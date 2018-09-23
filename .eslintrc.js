module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-quotes': 'single',
    'vue/valid-template-root': 'off',
    semi: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
