module.exports = {
  'extends': [ '@fullcube/eslint-config-fullcube' ],
  'env': {
    'mocha': true,
  },
  'rules': {
    'prefer-arrow-callback': ['off'],
    'no-shadow': ['error', {'allow': ['err', 'res']}],
    'func-names': ['off'],
    'no-sync': ['off'],
  }
};
