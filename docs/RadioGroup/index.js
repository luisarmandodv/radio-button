'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./RadioGroup.production.min.css');
  module.exports = require('./RadioGroup.production.min.js');
} else {
  require('./RadioGroup.development.css');
  module.exports = require('./RadioGroup.development.js');
}
