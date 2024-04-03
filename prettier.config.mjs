/** @type {import("prettier").Config} */
const config = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  plugins: ["prettier-plugin-jsdoc"],
  printWidth: 80,
  proseWrap: "always",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false
};

export default config;
