import { lstat, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** @module crawler */

const parentFolder = join(__dirname, "..");

/**
 * Function to crawl a directory for scripts to execute.
 *
 * @param {string} directory - The directory to crawl
 * @returns {Map<string, string>} A map of script names to their execution
 *   command.
 */
async function getScripts(directory) {
  const files = await readdir(directory);
  const scripts = new Map();

  for (let file of files) {
    try {
      let key = file;

      const stats = await lstat(join(directory, file));

      // skip this file
      if (file === "index.mjs") {
        continue;
      }

      // recurse inside any directories found
      else if (stats.isDirectory()) {
        const result = await getScripts(join(directory, file));
        for (let [key, value] of result) scripts.set(key, value);
      }

      // use the Bun test runner for ESM/TS test files
      else if (file.endsWith(".test.mjs") || file.endsWith(".test.ts")) {
        key = key.replace(/(\.test\.mjs|\.test\.ts)$/, "");
        const relativePath = join(directory, file).replace(
          `${parentFolder}/`,
          ""
        );

        if (scripts.has(`${key}:test`)) {
          console.warn(`WARNING: Duplicate script name: ${key}:test`);
        }

        scripts.set(`${key}:test`, `bun test ${relativePath}`);
      }

      // use the Bun regular runner for ESM/TS scripts
      else if (file.endsWith(".mjs") || file.endsWith(".ts")) {
        key = key.replace(/(\.mjs|\.ts)$/, "");
        const relativePath = join(directory, file).replace(
          `${parentFolder}/`,
          ""
        );

        if (scripts.has(`${key}`)) {
          console.warn(`WARNING: Duplicate script name: ${key}`);
        }

        scripts.set(key, `bun run ${relativePath}`);
      }
    } catch (err) {
      console.error("Error processing file:", err);
    }
  }

  return Array.from(scripts).sort((a, b) => a[0].localeCompare(b[0]));
}

/** Function to update package.json scripts list. */
async function updatePackageJsonScripts() {
  const packageJsonPath = join(parentFolder, "package.json");

  try {
    let packageJsonContent = JSON.parse(await readFile(packageJsonPath));

    packageJsonContent.scripts = {};

    // Get scripts and add to content
    const scripts = await getScripts(__dirname);
    for (let [key, value] of scripts) packageJsonContent.scripts[key] = value;

    // Add additional scripts
    packageJsonContent.scripts["resync"] = "bun .";
    packageJsonContent.scripts["format"] = "prettier -w src";
    packageJsonContent.scripts["lint"] =
      `DEBUG=eslint:cli-engine eslint src --ext ts,tsx,js,cjs,mjs`;
    packageJsonContent.scripts["docs"] = "jsdoc -c .jsdoc.json";
    packageJsonContent.scripts["postinstall"] = "bun .";

    // Write back updated scripts to file
    await writeFile(
      packageJsonPath,
      JSON.stringify(packageJsonContent, null, 2)
    );
  } catch (err) {
    console.error("Error updating package.json:", err);
  }
}

await updatePackageJsonScripts()
  .then(() => console.log("Successfully updated package.json."))
  .catch(err => console.error("Error in updatePackageJsonScripts:", err));
