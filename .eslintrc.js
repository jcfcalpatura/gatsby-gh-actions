module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'airbnb',
  ],
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/function-component-definition': 0,
  },
  settings: {
    'import/extensions': ['.js', '.jsx'],
  },
};
