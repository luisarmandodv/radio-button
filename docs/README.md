# ReX React UI Component: radio-button

This project is part of ReX Design System and it can be used to create UI Components compatible with:

React, HTML/CSS and Vue.js  

# How to install

<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />

```
npm install @rakuten-rex/radio-button@0.0.1 --save
```

<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/yarn.svg?sanitize=true" height="16" />

```
yarn add @rakuten-rex/radio-button@0.0.1
```

# Getting started

## Storybook Live examples

For a complete guide of properties for React and HTML classes please visit our Storybook page:  

[<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/storybook.svg?sanitize=true" height="16" />](https://rakuten-rex.github.io/radio-button/)   

https://rakuten-rex.github.io/radio-button/   


**Storybook features**
- [x] Stories by component types
- [x] HTML raw output
- [x] JSX output
- [x] Stories source code
- [x] Knobs with multiple options


# How to integrate ReX in your project
## A) JavaScript modules

### <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React component (JavaScript + CSS Styles)

For plug and play components integration.   

Example: 

`my-component.jsx`

```jsx
import Radio from '@rakuten-rex/radio-button';

function MyCustomComponent() {
  return (
    <Radio name='pet' label='dog' value='dog' id='choice1' area-label='dog' />
    <Radio name='pet' label='cat' value='cat' area-label='cat' id='choice2' checked={true} />
    <Radio name='pet' label='rabbit' value='rabbit' area-label='rabbit' id='choice3' />
    <Radio name='pet' label='pig' value='pig' id='choice4' area-label='pig' disabled={true} />
  );
}
```


[Click here](https://rakuten-rex.github.io/radio-button/) to see all working examples in Storybook.


### <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS Styles only

For your own JavaScript integration (React, Vue, Angular, etc.) or Static HTML.

#### Using CSS Variables (Modern Websites and WebApps)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/radio-button/Radio/css';

function MyCustomComponent() {
  return (
    <div class="rex-radio">
        <input type="radio" value="dog" id="choice1" name="pet" area-label="dog" readonly="" /><label class="rex-radio-label" for="choice1">dog</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="cat" id="choice2" name="pet" area-label="cat" checked="" readonly="" /><label class="rex-radio-label" for="choice2">cat</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="rabbit" id="choice3" name="pet" area-label="rabbit" readonly="" /><label class="rex-radio-label" for="choice3">rabbit</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="pig" id="choice4" name="pet" disabled="" area-label="pig" readonly="" /><label class="rex-radio-label" for="choice4">pig</label>
      </div>
  );
}
```

#### Using Static CSS (Legacy Websites)

Example: 

`my-component.jsx`

```jsx
import '@rakuten-rex/radio-button/Radio/css/static';

function MyCustomComponent() {
  return (
    <div class="rex-radio">
        <input type="radio" value="dog" id="choice1" name="pet" area-label="dog" readonly="" /><label class="rex-radio-label" for="choice1">dog</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="cat" id="choice2" name="pet" area-label="cat" checked="" readonly="" /><label class="rex-radio-label" for="choice2">cat</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="rabbit" id="choice3" name="pet" area-label="rabbit" readonly="" /><label class="rex-radio-label" for="choice3">rabbit</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="pig" id="choice4" name="pet" disabled="" area-label="pig" readonly="" /><label class="rex-radio-label" for="choice4">pig</label>
      </div>
  );
}
```

[Click here](https://rakuten-rex.github.io/radio-button/) to see all working examples in Storybook.


### <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/sass.svg?sanitize=true" height="16" /> Sass mixins

For your own customization of styles (React, Vue, Angular, etc.) or Static HTML.

Example: 

`my-styles.scss`

```scss
@import '@rakuten-rex/radio-button/Radio/sass/styles.mixin';

.rex-radio {
  @include rex-radio();
}
```

### <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/vue.svg?sanitize=true" height="16" /> Vue.js

A basic implementation based on HTML structure and import CSS styles into your component.

Example: 

`my-component.vue`

```vue
<template>
    <div class="rex-radio">
        <input type="radio" value="dog" id="choice1" name="pet" area-label="dog" readonly="" /><label class="rex-radio-label" for="choice1">dog</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="cat" id="choice2" name="pet" area-label="cat" checked="" readonly="" /><label class="rex-radio-label" for="choice2">cat</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="rabbit" id="choice3" name="pet" area-label="rabbit" readonly="" /><label class="rex-radio-label" for="choice3">rabbit</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="pig" id="choice4" name="pet" disabled="" area-label="pig" readonly="" /><label class="rex-radio-label" for="choice4">pig</label>
      </div>
</template>
<script>
export default {
  name: 'Radio',
}
</script>
<style scoped>
@import "~@rakuten-rex/radio-button/css";
</style>
```


## B) Static HTML

Copy-paste the stylesheet `<link>` into your `<head>` tag to load our CSS styles.

### Using CSS Variables (Modern Websites and WebApps)
**Production mode URL** (recommended for Static HTML projects):  
```
https://unpkg.com/@rakuten-rex/radio-button@0.0.1/Radio/Radio.production.min.css
```


Development mode URL (for local testing):  

```
https://unpkg.com/@rakuten-rex/radio-button@0.0.1/Radio/Radio.development.css
```


### Using Static CSS (Legacy Websites)

```
https://unpkg.com/@rakuten-rex/radio-button@0.0.1/Radio/Radio.static.css
```

### <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> Single component integration
Add it from unpkg.com CDN (NPM) into your HTML template or HTML static page.

Example: 

`my-page.html`

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Page</title>
    <!-- ReX radio-button -->
    <link href="https://unpkg.com/@rakuten-rex/radio-button@0.0.1/Radio/Radio.production.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="rex-radio">
        <input type="radio" value="dog" id="choice1" name="pet" area-label="dog" readonly="" /><label class="rex-radio-label" for="choice1">dog</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="cat" id="choice2" name="pet" area-label="cat" checked="" readonly="" /><label class="rex-radio-label" for="choice2">cat</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="rabbit" id="choice3" name="pet" area-label="rabbit" readonly="" /><label class="rex-radio-label" for="choice3">rabbit</label>
      </div>
      <div class="rex-radio">
        <input type="radio" value="pig" id="choice4" name="pet" disabled="" area-label="pig" readonly="" /><label class="rex-radio-label" for="choice4">pig</label>
      </div>
  </body>
</html>
```

## Documentation, source code and distribution

|| Site  | URL |
|-------------| ------------- | ------------- |
|<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/github-icon.svg?sanitize=true" height="16" />| Github (Source Code) | https://github.com/rakuten-rex |
|<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/npm.svg?sanitize=true" height="16" />| NPM (Package distribution)  | https://www.npmjs.com/org/rakuten-rex  |
|<img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/zh_logo.svg?sanitize=true" height="16" />| ZeroHeight (Documentation)  | https://zeroheight.com/390c074f3 |

## Project Stack

| Front-end |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/html-5.svg?sanitize=true" height="16" /> HTML5 <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/css-3.svg?sanitize=true" height="16" /> CSS3 & Sass  <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/javascript.svg?sanitize=true" height="16" /> JavaScript ES6 <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/react.svg?sanitize=true" height="16" /> React |

| Tools |
|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/webpack.svg?sanitize=true" height="16" /> webpack <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/storybook-icon.svg?sanitize=true" height="16" /> Storybook <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/babel.svg?sanitize=true" height="16" /> Babel <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/eslint.svg?sanitize=true" height="16" /> ESLint <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/logos/prettier.svg?sanitize=true" height="16" /> Prettier |

## Features

| Styles features |  JavaScript features |
|-------------|-------------|
| Theme support via CSS variables |  React components splitted by type |
| Static CSS styles available for HTML/VueJS/AngularJS | Universal Module Definition support |
| Sass mixins for custom builds |
| Reset CSS styles already bundled by HTML tags |
| Removed duplicated CSS props |
| CSS classes prefix `rex-` |

## Browser Support

| PC | Mobile 
|-------------|-------------|
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/chrome.svg?sanitize=true" height="14" /> Chrome 49+ | <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/apple.svg?sanitize=true" height="14" /> iOS 9+ (Safari 9.3+, Chrome 78+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/safari.svg?sanitize=true" height="14" /> Safari 9.1+ | <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/android-icon.svg?sanitize=true" height="14" /> Android 6+ (Chrome 78+, Android Browser 76+) |
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/firefox.svg?sanitize=true" height="14" /> Firefox 31+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/microsoft-edge.svg?sanitize=true" height="14" /> MS Edge 15+ | |
| <img src="https://raw.githubusercontent.com/rakuten-rex/radio-button/master/project-scripts/webpack/markdown/browsers/internetexplorer.svg?sanitize=true" height="14" /> IE 11+ | |



