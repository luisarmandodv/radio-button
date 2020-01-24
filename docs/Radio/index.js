'use strict';

if (process.env.NODE_ENV === 'production') {
  require('./Radio.production.min.css');
  module.exports = require('./Radio.production.min.js');
} else {
  require('./Radio.development.css');
  module.exports = require('./Radio.development.js');
}
