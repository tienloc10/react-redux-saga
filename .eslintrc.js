module.exports = {
    parser: "babel-eslint",
    parserOption: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    rules: {
        semi: 1,
        quotes: [2, 'single']
    }
}