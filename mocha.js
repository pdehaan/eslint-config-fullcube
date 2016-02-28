module.exports = {
  'extends': [ 'strict/mocha' ],
  'rules': {
    'prefer-arrow-callback': 0,
    'no-shadow': [2, {'allow': ['err', 'res']}]
  }
};
