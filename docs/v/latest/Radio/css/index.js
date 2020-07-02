'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('../Radio.production.min.css');
} else {
  module.exports = require('../Radio.development.css');
}
