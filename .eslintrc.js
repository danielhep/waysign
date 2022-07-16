module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'standard-jsx',
    'eslint:recommended',
    'plugin:react/recommended',
    'next/core-web-vitals'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-indent': 'error',
    'react/jsx-indent-props': 'error'
  }
}
