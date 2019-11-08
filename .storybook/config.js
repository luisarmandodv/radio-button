import { configure, addParameters } from '@storybook/react';
import rexTheme from './theme/rexTheme';

// Option defaults.
addParameters({
  options: {
    theme: rexTheme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
