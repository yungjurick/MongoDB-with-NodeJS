const path = require('path');

module.exports = {
  extends: 'airbnb-base',
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve('./src')]
      }
    }
  },
  parser: 'babel-eslint',
  rules: {
    'no-console': 0,
    'comma-dangle': 0
  }
};
