/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import CommonProps from './props';
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
  <Radio
    id="pet-dog"
    label="dog"
    name="pet"
    value="dog"
    ariaLabel="dog"
    checked={false}
    disabled={false}
    required={false}
    isBlock={false}
  />
);

export const CheckedView = () => (
  <Radio
    id="pet-cat"
    label="cat"
    name="pet"
    value="cat"
    ariaLabel="cat"
    checked
    disabled={false}
    required={false}
    isBlock={false}
  />
);

export const DisabledView = () => (
  <Radio
    id="choice-dog"
    label="dog"
    name="pet"
    value="dog"
    ariaLabel="dog"
    disabled
    checked={false}
    required={false}
    isBlock={false}
  />
);

export const WithDynamicProps = () => {
  const {
    id,
    name,
    value,
    label,
    ariaLabel,
    checked,
    disabled,
    required,
    isBlock,
  } = CommonProps();

  return (
    <Radio
      id={id}
      label={label}
      name={name}
      value={value}
      ariaLabel={ariaLabel}
      checked={checked}
      disabled={disabled}
      required={required}
      isBlock={isBlock}
    />
  );
};

export const LayoutInline = () => (
  <>
    <Radio name="pet" label="dog" value="dog" id="choice1-1" ariaLabel="dog" />
    <Radio
      name="pet"
      label="cat"
      value="cat"
      ariaLabel="cat"
      id="choice1-2"
      checked
      disabled={false}
      required={false}
    />
    <Radio
      name="pet"
      label="rabbit"
      value="rabbit"
      ariaLabel="rabbit"
      id="choice1-3"
      checked={false}
      disabled={false}
      required={false}
    />
    <Radio
      name="pet"
      label="pig"
      value="pig"
      id="choice1-4"
      ariaLabel="pig"
      disabled
      checked={false}
      required={false}
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
      ariaLabel="dog"
      checked
      disabled={false}
      required={false}
    />
    <Radio
      isBlock
      name="pet"
      label="cat"
      value="cat"
      id="choice2"
      checked={false}
      disabled={false}
      required={false}
    />
    <Radio
      isBlock
      name="pet"
      label="rabbit"
      value="rabbit"
      ariaLabel="rabbit"
      id="choice3"
      checked={false}
      disabled={false}
      required={false}
    />
    <Radio
      isBlock
      name="pet"
      label="pig"
      value="pig"
      id="choice4"
      disabled
      checked={false}
      required={false}
    />
  </>
);

/**
 * Custom Theme support
 * */

function Theme() {
  const themeColor = color('Checkbox theme color', '#bf0000', 'Theme');
  const borderColor = color('Default Border color', '#9c9c9c', 'Theme');
  const disabledTextColor = color('Disabled Text Color', '#d1d1d1', 'Theme');
  const disabledBorderColor = color(
    'Disabled Border Color',
    '#d1d1d1',
    'Theme'
  );

  const customStyle = {
    '--rex-radio-theme': themeColor,
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
        ariaLabel="rabbit"
        checked={false}
        disabled={false}
        required={false}
        style={customStyle}
      />
      <Radio
        id="theme-checked"
        label="rabbit"
        name="pet"
        value="rabbit"
        ariaLabel="rabbit"
        checked
        disabled={false}
        required={false}
        style={customStyle}
      />
      <Radio
        id="theme-disabled"
        label="rabbit"
        name="pet"
        value="rabbit"
        ariaLabel="rabbit"
        disabled
        checked={false}
        required={false}
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
        ariaLabel="rabbit"
        checked={false}
        disabled={false}
        required={false}
      />
      <Radio
        id="theme-legacy-checked-dog"
        label="dog"
        name="pet"
        value="dog"
        ariaLabel="dog"
        checked
        disabled={false}
        required={false}
      />
      <Radio
        id="theme-legacy-disabled"
        label="rabbit"
        name="pet"
        value="rabbit"
        ariaLabel="rabbit"
        disabled
        checked={false}
        required={false}
      />
    </>
  );
};
