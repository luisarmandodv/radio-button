/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import CommonProps from './props';
import ThemeProps from './themeProps';
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
export const Default = () => (
  <Radio
    id="pet-dog"
    label="dog"
    name="pet"
    value="dog"
    checked={false}
    disabled={false}
    required={false}
    isBlock={false}
  />
);

export const CheckedState = () => (
  <Radio
    id="pet-cat"
    label="cat"
    name="pet"
    value="cat"
    checked
    disabled={false}
    required={false}
    isBlock={false}
  />
);

export const DisabledState = () => (
  <Radio
    id="choice-dog"
    label="dog"
    name="pet"
    value="dog"
    disabled
    checked={false}
    required={false}
    isBlock={false}
  />
);

export const LayoutInline = () => (
  <>
    <Radio name="pet" label="dog" value="dog" id="choice1-1" />
    <Radio
      name="pet"
      label="cat"
      value="cat"
      id="choice1-2"
      checked
      disabled={false}
      required={false}
    />
    <Radio
      name="pet"
      label="rabbit"
      value="rabbit"
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

export const WithDynamicProps = () => {
  const { id, name, value, label, checked, disabled, required } = CommonProps();
  const layout = boolean('layout (Block/Inline)', false);

  return (
    <Radio
      id={id}
      label={label}
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      required={required}
      isBlock={layout}
    />
  );
};

/**
 * Custom Theme support
 * */

function Theme() {
  const {
    themeDefaultCheckedBackground,
    themeDefaultBorder,
    themeLabelText,
    themeDisabledLabelText,
    themeDisabledBorder,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = ThemeProps();

  const customStyle = {
    '--rex-radio-theme': themeDefaultCheckedBackground,
    '--rex-radio-label': themeLabelText,
    '--rex-radio-border-color': themeDefaultBorder,
    '--rex-radio-disabled-text': themeDisabledLabelText,
    '--rex-radio-disabled-border': themeDisabledBorder,
    '--rex-radio-margin-top': marginTop,
    '--rex-radio-margin-right': marginRight,
    '--rex-radio-margin-bottom': marginBottom,
    '--rex-radio-margin-left': marginLeft,
  };
  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, Radio),
  };
}

export const HTMLTheme = () => {
  const { customStyle } = Theme();

  return (
    <>
      <Radio
        id="theme-default"
        label="rabbit"
        name="pet"
        value="rabbit"
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
        disabled
        checked={false}
        required={false}
        style={customStyle}
      />
    </>
  );
};

export const HTMLThemeAndAllStates = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <Radio
        id="theme-default"
        label="rabbit"
        name="pet"
        value="rabbit"
        checked={false}
        disabled={false}
        required={false}
      />
      <Radio
        id="theme-legacy-checked-dog"
        label="dog"
        name="pet"
        value="dog"
        checked
        disabled={false}
        required={false}
      />
      <Radio
        id="theme-legacy-disabled"
        label="rabbit"
        name="pet"
        value="rabbit"
        disabled
        checked={false}
        required={false}
      />
    </>
  );
};
