/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import CommonProps from './props/commonProps';
import ThemeProps from './props/themeProps';
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
  <Radio id="pet-dog" label="dog" name="pet" value="dog" />
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
    themeCheckedBackground,
    themeDefaultBorder,
    themeDefaultLabelText,
    themeCheckedBorder,
    themeCheckedLabelText,
    themeDisabledLabelText,
    themeDisabledBorder,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  } = ThemeProps();

  const customStyle = {
    '--rex-radio-theme': themeCheckedBackground,
    '--rex-radio-label': themeDefaultLabelText,
    '--rex-radio-border': themeDefaultBorder,
    '--rex-radio-checked-label': themeCheckedLabelText,
    '--rex-radio-checked-border': themeCheckedBorder,
    '--rex-radio-disabled-label': themeDisabledLabelText,
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

export const ReactThemAllStates = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const checked = boolean('Checked', false, 'Theme Checked');

  return (
    <Radio
      id="theme-default"
      label="rabbit"
      name="pet"
      value="rabbit"
      checked={checked}
      disabled={disabled}
      required={false}
      style={customStyle}
    />
  );
};

export const HTMLThemeAndAllStates = () => {
  const { customStyleHtml } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const checked = boolean('Checked', false, 'Theme Checked');

  return (
    <>
      <style>{customStyleHtml}</style>
      <Radio
        id="theme-default"
        label="rabbit"
        name="pet"
        value="rabbit"
        checked={checked}
        disabled={disabled}
        required={false}
      />
    </>
  );
};
