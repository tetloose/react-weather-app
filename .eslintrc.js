module.exports = {
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'rules': {
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'indent': [
      'error',
      2
    ],
    'no-multi-spaces': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'space-before-function-paren': [
      'error',
      'never'
    ]
  }
}
