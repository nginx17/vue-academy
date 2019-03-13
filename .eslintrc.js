module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-in-parens': ['off'],
    'quotes': ['error', 'single'],
    'no-undef': ['off'],
    'computed-property-spacing': ['off'],
    'linebreak-style': ['off'],
    'brace-style': [2, 'stroustrup', { allowSingleLine: false }],
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'semi': ['error', 'never'],
    'camelcase': ['error', { properties: 'always' }],
    'function-paren-newline': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'prefer-arrow-callback': ['off']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
