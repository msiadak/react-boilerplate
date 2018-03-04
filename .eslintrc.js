module.exports = {
  extends: ['airbnb'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    es6: true,
  }
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      env: { jest: true },
    },
  ],
};
