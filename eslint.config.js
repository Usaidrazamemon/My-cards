module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "*.css", // ignore Tailwind CSS files
    "node_modules/",
    "dist/",
  ],
  rules: {
    "react/prop-types": "off",
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
  },
};
