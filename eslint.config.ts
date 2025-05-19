import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // unused-imports 플러그인과 규칙을 위한 별도의 설정 객체
  {
    // plugins 객체에 직접 플러그인 모듈을 등록
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": ["warn", { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    },
  },

  {
    rules: {
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
    },
  },
];
