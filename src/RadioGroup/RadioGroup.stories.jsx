/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { number, boolean, color } from '@storybook/addon-knobs';
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
    ariaLabel: 'BrownHare',
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
    ariaLabel: 'Wildebeest',
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
    ariaLabel: 'Cheetah',
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
    required: false,
    isBlock: false,
    ariaLabel: 'Pronghorn',
  },
  {
    id: 'fastestAnimal',
    name: 'fastest',
    value: 'Lion',
    label: 'Lion',
    checked: false,
    disabled: true,
    required: false,
    isBlock: false,
    ariaLabel: 'Lion',
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
    ariaLabel: 'dog',
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
    ariaLabel: 'fish',
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
    ariaLabel: 'cat',
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
    ariaLabel: 'rabbit',
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
    ariaLabel: 'iguana',
  },
];

export const LayoutInline = () => <RadioGroup options={FastestAnimals} />;

export const LayoutBlock = () => <RadioGroup options={Petdata} isBlock />;

export const WithDynamicPropsGroup = () => {
  const quantity = number('Quantity of items', 5);
  const isBlock = boolean('layout (Block/Inline)', false);
  const {
    id,
    name,
    value,
    label,
    ariaLabel,
    checked,
    disabled,
    required,
  } = CommonProps();

  let option;
  const listData = [];
  for (let i = 1; i <= quantity; i += 1) {
    option = {
      id: `${id}-${i}`,
      name: `${name}-${i}`,
      value: `${value}-${i}`,
      label: `${label}-${i}`,
      isBlock,
      checked,
      disabled,
      required,
      ariaLabel: `${ariaLabel}-${i}`,
    };
    listData.push(option);
  }
  // eslint-disable-next-line react/jsx-indent
  return <RadioGroup options={listData} />;
};

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
    '--rex-radio-theme-color': themeColor,
    '--rex-radio-border-color': borderColor,
    '--rex-radio-disabled-text': disabledTextColor,
    '--rex-radio-disabled-border': disabledBorderColor,
  };

  return {
    customStyle,
    customStyleHtml: cssVarsToLegacy(customStyle, RadioGroup),
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
