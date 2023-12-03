module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    // override/add rules settings here, such as:
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: {
          "{}": false,
        },
      },
    ],
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};
