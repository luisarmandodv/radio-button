/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { number, text, color, boolean } from '@storybook/addon-knobs';
import Radio from 'src/Radio';
import RadioGroup from 'src/RadioGroup';
import { withKnobs, cssVarsToLegacy } from '../../.storybook/helper';
import CommonProps from '../Radio/props';

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

const FastestAnimals = [
  {
    id: 'fastestAnimal1',
    name: 'fastest',
    value: 'BrownHare',
    label: 'BrownHare',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'fastestAnimal2',
    name: 'fastest',
    value: 'Wildebeest',
    label: 'Wildebeest',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'fastestAnimal3',
    name: 'fastest',
    value: 'Cheetah',
    label: 'Cheetah',
    checked: true,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
    required: false,
  },
];

const Petdata = [
  {
    id: 'choice1',
    name: 'pet',
    value: 'dog',
    label: 'Dog',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'choice4',
    name: 'pet',
    value: 'rabbit',
    label: 'Rabbit',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
  },
  {
    id: 'choice5',
    name: 'pet',
    value: 'iguana',
    label: 'Iguana',
    checked: false,
    disabled: true,
    required: false,
    isBlock: false,
  },
];

const PetdataBlock = [
  {
    id: 'choice1',
    name: 'pet',
    value: 'dog',
    label: 'Dog',
    checked: false,
    disabled: false,
    required: false,
    isBlock: true,
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
    disabled: false,
    required: false,
    isBlock: true,
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
    disabled: false,
    required: false,
    isBlock: true,
  },
];

export const DefaultView = () => <RadioGroup options={FastestAnimals} />;

export const LayoutInline = () => <RadioGroup options={FastestAnimals} />;

export const LayoutBlock = () => <RadioGroup options={PetdataBlock} />;

export const WithDynamicPropsGroup = () => {
  const quantity = number('Quantity of items', 5);
  const layout = boolean('layout (Block/Inline)', false);
  const { id, name, value, label, checked, disabled, required } = CommonProps(
    false
  );
  let option;
  const listData = [];
  for (let i = 1; i <= quantity; i += 1) {
    option = {
      id: `${id}-${i}`,
      name: `${name}-${i}`,
      value: `${value}-${i}`,
      label: `${label}-${i}`,
      checked,
      disabled,
      required,
    };
    listData.push(option);
  }
  // eslint-disable-next-line react/jsx-indent
  return <RadioGroup options={listData} isBlock={layout} />;
};

/**
 * Custom Theme support
 * */

function Theme() {
  const themeColor = color('Radio theme color', '#bf0000', 'Theme');
  const borderColor = color('Default Border color', '#9c9c9c', 'Theme');
  const themeLabelColor = color('Label color', '#333333', 'Theme');
  const disabledTextColor = color('Disabled Text Color', '#d1d1d1', 'Theme');
  const disabledBorderColor = color(
    'Disabled Border Color',
    '#d1d1d1',
    'Theme'
  );
  const marginTop = text('Margin Top', '.5rem', 'Theme Props');
  const marginRight = text('Margin Right', '3rem', 'Theme Props');
  const marginBottom = text('Margin Bottom', '.5rem', 'Theme Props');
  const marginLeft = text('Margin Left', '0rem', 'Theme Props');

  const customStyle = {
    '--rex-radio-theme': themeColor,
    '--rex-radio-label': themeLabelColor,
    '--rex-radio-border-color': borderColor,
    '--rex-radio-disabled-text': disabledTextColor,
    '--rex-radio-disabled-border': disabledBorderColor,
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

export const WithThemeReactAndCSSVars = () => {
  const { customStyle } = Theme();
  return <RadioGroup options={Petdata} style={customStyle} />;
};
export const WithThemeHTMLAndLegacyCSS = () => {
  const { customStyleHtml } = Theme();

  return (
    <>
      <style>{customStyleHtml}</style>
      <RadioGroup options={Petdata} />
    </>
  );
};
