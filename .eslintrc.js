module_exports = {
    parser: "@typescript-eslint/parse",
    extends : [
        "plugin: @typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin: prettier/recommended",
    ],
    parseOption: {
        ecmaVersion: 2022,
        sourceType: "module",
    },
    rules: {}
};