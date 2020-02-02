module.exports = {
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'sonarjs', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  extends: ['plugin:sonarjs/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-empty': 'off',
    'max-lines': ['error', 300],
    'max-lines-per-function': ['error', 80],
    eqeqeq: ['error'],
    'prefer-const': 'error',
    'prettier/prettier': 'error',
    'no-unused-vars': ['off'],
    'no-console': 'error',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    '@typescript-eslint/class-name-casing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'sonarjs/cognitive-complexity': ['error', 7],
    'sonarjs/no-identical-expressions': 'error',
    'sonarjs/no-small-switch': 'off',
  },
};
