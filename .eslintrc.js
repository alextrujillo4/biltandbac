module.exports = {
    extends: [
        'plugin:vue/recommended',
        'plugin:vue/essential',
        'eslint:recommended'
    ],

    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },

    root: true,

    env: {
      node: true
    },

    parserOptions: {
      parser: 'babel-eslint'
    }
}
