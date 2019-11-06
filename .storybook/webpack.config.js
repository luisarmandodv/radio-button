const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules = config.module.rules.map(rule => {
    if (rule.test.toString().includes('svg')) {
      const test = rule.test.toString().replace('svg|', '').replace(/\//g, '')
      return { ...rule, test: new RegExp(test) }
    } else {
      return rule
    }
  });

  config.module.rules.push({
    test: new RegExp('theme/rex-logo.svg'),
    include: path.resolve(__dirname, 'theme'),
    use: [
      {
        loader: 'file-loader',
        query: { name: 'static/media/[name].[hash:8].[ext]' },
      },
    ]
  });

  config.module.rules.push({
    test: /\.svg?$/,
    include: path.resolve(__dirname, '../src'),
    use: ['@svgr/webpack']
  });

  config.devtool = (mode === 'DEVELOPMENT') ? 'inline-source-map' : false;
  config.performance = {
    hints: false
  };

  return config;
};
