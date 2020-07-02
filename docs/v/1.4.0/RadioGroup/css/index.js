'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../RadioGroup.production.min.css');
} else {
  module.exports = require('../RadioGroup.development.css');
}
