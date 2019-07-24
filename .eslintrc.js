// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //分号 报错，要分号
    'semi':['error','always'],
    //关闭indent
    'indent':'off',
    //使用Vue下script-indent配置 报错 2*1共同决定空两行
    'vue/script-indent':['error',2,{'baseIndent':1}],
    //函数括号前的空格 报错  匿名函数总是空格 有名字的不空格 异步箭头函数总是有空格 
    'space-before-function-paren':['error',{'anonymous':'always','named':'never','asyncArrow':'always'}]
  }
}
