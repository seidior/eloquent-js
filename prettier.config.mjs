/** @type {import("prettier").Config} */
const config = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "always",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  plugins: ["prettier-plugin-jsdoc"]
};

export default config;
