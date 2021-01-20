module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["eslint:recommended", "plugin:vue/essential"],
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {
        "no-unused-vars": [1, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
    },
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        process: false,
    },
};