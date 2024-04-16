import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslint_config = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  }
);

export default eslint_config;
