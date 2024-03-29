module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@electron-toolkit/eslint-config-ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
