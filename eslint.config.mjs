// @ts-check

import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
// import globals from "globals"

export default defineConfig(
  js.configs.recommended,
  tseslint.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);
