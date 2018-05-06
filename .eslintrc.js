module.exports = {
  extends: [require.resolve('eslint-config-fusion')],
  settings: {
    'import/ignore': ['node_modules'],
  },
  rules: {
    // Conflicts with prettier
    'flowtype/generic-spacing': 'off',
    'flowtype/space-after-type-colon': 'off',
  },
};
