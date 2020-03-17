/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import RadioGroup from 'src/RadioGroup';
import { withKnobs, cssVarsToLegacy } from '../../.storybook/helper';
import CommonProps from '../Radio/props';
import ThemeProps from '../Radio/themeProps';

/**
 * Main story
 * */
export default {
  title: 'Radio Group / Controlled',
  decorators: withKnobs,
};

/**
 * Stories
 * */

const fastestAnimals = [
  {
    id: 'fastestAnimal1',
    name: 'fastest',
    value: 'BrownHare',
    label: 'BrownHare',
    checked: false,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal2',
    name: 'fastest',
    value: 'Wildebeest',
    label: 'Wildebeest',
    checked: false,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal3',
    name: 'fastest',
    value: 'Cheetah',
    label: 'Cheetah',
    checked: false,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
  },
];

const fastestAnimalsChecked = [
  {
    id: 'fastestAnimal1',
    name: 'fastest',
    value: 'BrownHare',
    label: 'BrownHare',
    checked: true,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal2',
    name: 'fastest',
    value: 'Wildebeest',
    label: 'Wildebeest',
    checked: false,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal3',
    name: 'fastest',
    value: 'Cheetah',
    label: 'Cheetah',
    checked: false,
    disabled: false,
    required: false,
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
  },
];

const disabledData = [
  {
    id: 'choice1',
    name: 'pet',
    value: 'dog',
    label: 'Dog',
    checked: false,
    disabled: true,
    required: false,
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
    disabled: true,
    required: false,
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
    disabled: true,
    required: false,
  },
  {
    id: 'choice4',
    name: 'pet',
    value: 'rabbit',
    label: 'Rabbit',
    checked: false,
    disabled: true,
    required: false,
  },
  {
    id: 'choice5',
    name: 'pet',
    value: 'iguana',
    label: 'Iguana',
    checked: false,
    disabled: true,
    required: false,
  },
];

export const Default = () => <RadioGroup options={fastestAnimals} />;

export const CheckedState = () => (
  <RadioGroup options={fastestAnimalsChecked} />
);

export const DisabledState = () => <RadioGroup options={disabledData} />;

export const LayoutInline = () => <RadioGroup options={fastestAnimals} />;

export const LayoutInlineChecked = () => (
  <RadioGroup options={fastestAnimalsChecked} />
);

export const LayoutBlock = () => (
  <RadioGroup options={fastestAnimals} isBlock />
);

export const LayoutBlockChecked = () => (
  <RadioGroup options={fastestAnimalsChecked} isBlock />
);

export const WithDynamicProps = () => {
  const quantity = number('Quantity of items', 5);
  const layout = boolean('layout (Block/Inline)', false);
  const { id, name, value, label, disabled, required } = CommonProps(false);
  let option;
  const listData = [];
  for (let i = 1; i <= quantity; i += 1) {
    option = {
      id: `${id}-${i}`,
      name: `${name}-${i}`,
      value: `${value}-${i}`,
      label: `${label}-${i}`,
      required,
    };
    listData.push(option);
  }
  // eslint-disable-next-line react/jsx-indent
  return <RadioGroup options={listData} isBlock={layout} disabled={disabled} />;
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

export const ReactTheme = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  return (
    <RadioGroup
      options={fastestAnimalsChecked}
      style={customStyle}
      disabled={disabled}
    />
  );
};

export const ReactThemeAllStates = () => {
  const { customStyle } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  return (
    <RadioGroup
      options={fastestAnimalsChecked}
      style={customStyle}
      disabled={disabled}
    />
  );
};

export const HTMLTheme = () => {
  const { customStyleHtml } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');

  return (
    <>
      <style>{customStyleHtml}</style>
      <RadioGroup options={fastestAnimals} disabled={disabled} />
    </>
  );
};

export const HTMLThemeAndAllStates = () => {
  const { customStyleHtml } = Theme();
  const disabled = boolean('Disabled', false, 'Theme Disabled');
  const checked = boolean('Checked', false, 'Theme Checked');

  return (
    <>
      <style>{customStyleHtml}</style>
      <RadioGroup
        options={fastestAnimalsChecked}
        disabled={disabled}
        checked={checked}
      />
    </>
  );
};
