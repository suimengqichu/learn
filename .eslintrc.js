modules.exports = {
  "root": true,
  "env": {
    "node": true,
  },
  "extends": ["@vue/standard", "plugin:vue/essential"],
  "rules": {
    // 对象等末尾的逗号填写是否提示错误0-'off', 1-'warn', 2-'error'
    "comma-dangle": 0,
    // 注释后方无空格是否提示
    "spaced-comment": 0,
    // 函数左括号前无空格是否提示
    "space-before-function-paren": 0,
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "ecmaVersion": "2018",
  },
  "overrides": [
    {
      "files": ["node_modules/"],
    },
  ],
}
