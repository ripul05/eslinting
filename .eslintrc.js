module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jquery: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    // plugins: ["diff/staged"],

    extends: ["plugin:diff/staged"],
    ignorePatterns: [
        "**/vendors/**/*.js",
        "test/**/*.js",
        "webpack_obfuscator/**/*.js",
        "dist/**/*.js"
    ],
    globals: {
        "_": "readonly"
    },
    rules: {
        "no-magic-numbers": ["warn", { "ignore": [0], "ignoreArrayIndexes": true }],
        "no-console": "warn"
    }
};
