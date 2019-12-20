/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { color, select, boolean } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

/**
 * Main story
 * */
export default {
  title: 'Radio / Uncontrolled',
  decorators: withKnobs,
};

/**
 * Stories
 * */
export const DefaultView = () => (
  <Radio id="pet-dog" label="dog" name="pet" value="dog" area-label="dog" />
);

export const CheckedView = () => (
  <Radio
    id="pet-cat"
    label="cat"
    name="pet"
    value="cat"
    area-label="cat"
    checked
  />
);

export const DisabledView = () => (
  <Radio
    id="choice-dog"
    label="dog"
    name="pet"
    value="dog"
    area-label="dog"
    disabled
  />
);

export const WithDynamicProps = () => (
  <Radio
    id="choice-cat"
    label="cat"
    name="pet"
    value="cat"
    area-label="cat"
    checked={boolean('checked', true)}
    disabled={boolean('disabled', true)}
    required={boolean('required', false)}
  />
);

export const LayoutInline = () => (
  <>
    <Radio name="pet" label="dog" value="dog" id="choice1-1" area-label="dog" />
    <Radio
      name="pet"
      label="cat"
      value="cat"
      area-label="cat"
      id="choice1-2"
      checked
    />
    <Radio
      name="pet"
      label="rabbit"
      value="rabbit"
      area-label="rabbit"
      id="choice1-3"
    />
    <Radio
      name="pet"
      label="pig"
      value="pig"
      id="choice1-4"
      area-label="pig"
      disabled
    />
  </>
);
export const LayoutBlock = () => (
  <>
    <Radio
      isBlock
      name="pet"
      label="dog"
      value="dog"
      id="choice1"
      area-label="dog"
      checked
    />
    <Radio isBlock name="pet" label="cat" value="cat" id="choice2" />
    <Radio
      isBlock
      name="pet"
      label="rabbit"
      value="rabbit"
      area-label="rabbit"
      id="choice3"
    />
    <Radio isBlock name="pet" label="pig" value="pig" id="choice4" disabled />
  </>
);

/**
 * Custom Theme support
 * */

function Theme() {
  const themeColor = color(
    'Checkbox theme color',
    '#bf0000',
    'Checkbox theme color'
  );
  const borderColor = color(
    'Default Border color',
    '#9c9c9c',
    'Default Border color'
  );
  const disabledTextColor = color(
    'Disabled Text Color',
    '#d1d1d1',
    'Disabled Text Color'
  );
  const disabledBorderColor = color(
    'Disabled Border Color',
    '#d1d1d1',
    'Disabled Border Color'
  );

  const customStyle = {
    '--rex-radio-theme-color': themeColor,
    '--rex-radio-border-color': borderColor,
    '--rex-radio-disabled-text': disabledTextColor,
    '--rex-radio-disabled-border': disabledBorderColor,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, Radio),
  };
}

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();

  return (
    <>
      <Radio
        id="theme-default"
        label="rabbit"
        name="pet"
        value="rabbit"
        area-label="rabbit"
        style={customStyle}
      />
      <Radio
        id="theme-checked"
        label="rabbit"
        name="pet"
        value="rabbit"
        area-label="rabbit"
        checked
        style={customStyle}
      />
      <Radio
        id="theme-disabled"
        label="rabbit"
        name="pet"
        value="rabbit"
        area-label="rabbit"
        disabled
        style={customStyle}
      />
    </>
  );
};

export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <Radio
        id="theme-default"
        label="rabbit"
        name="pet"
        value="rabbit"
        area-label="rabbit"
      />
      <Radio
        id="theme-legacy-checked-dog"
        label="dog"
        name="pet"
        value="dog"
        area-label="dog"
        checked
      />
      <Radio
        id="theme-legacy-disabled"
        label="rabbit"
        name="pet"
        value="rabbit"
        area-label="rabbit"
        disabled
      />
    </>
  );
};
