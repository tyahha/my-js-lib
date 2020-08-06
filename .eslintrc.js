module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {},
}
