module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    'parserOptions': {
        'ecmaVersion': 2020,
        'sourceType': 'module'
    },
    'env': {
        'es6': true,
        'node': true,
        'mocha': true,
        'jest': true
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'rules': {
        "padding-line-between-statements": "error",
        "newline-before-return": "error"
    }
};
