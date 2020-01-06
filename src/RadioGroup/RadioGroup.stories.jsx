/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import RadioGroup from 'src/RadioGroup';
import { cssVarsToLegacy, withKnobs } from '../../.storybook/helper';

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
    ariaLabel: 'BrownHare',
  },
  {
    id: 'fastestAnimal2',
    name: 'fastest',
    value: 'Wildebeest',
    label: 'Wildebeest',
    checked: false,
    disabled: false,
    ariaLabel: 'Wildebeest',
  },
  {
    id: 'fastestAnimal3',
    name: 'fastest',
    value: 'Cheetah',
    label: 'Cheetah',
    checked: true,
    disabled: false,
    ariaLabel: 'Cheetah',
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
    ariaLabel: 'Pronghorn',
  },
  {
    id: 'fastestAnimal',
    name: 'fastest',
    value: 'Lion',
    label: 'Lion',
    checked: false,
    disabled: true,
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
    ariaLabel: 'dog',
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
    disabled: false,
    ariaLabel: 'fish',
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
    disabled: false,
    ariaLabel: 'cat',
  },
  {
    id: 'choice4',
    name: 'pet',
    value: 'rabbit',
    label: 'Rabbit',
    checked: false,
    disabled: false,
    ariaLabel: 'rabbit',
  },
  {
    id: 'choice5',
    name: 'pet',
    value: 'iguana',
    label: 'Iguana',
    checked: false,
    disabled: true,
    ariaLabel: 'iguana',
  },
];

export const LayoutInline = () => <RadioGroup options={FastestAnimals} />;

export const LayoutBlock = () => <RadioGroup options={Petdata} isBlock />;

export const WithDynamicPropsGroup = () => {
  const quantity = number('Quantity of items', 5);
  const id = text('id', 'id');
  const name = text('name', 'name');
  const value = text('value', 'value');
  const label = text('label', 'label');
  const ariaLabel = text('ariaLabel', 'ariaLabel');
  let options = [];
  // for (let i = 0; i < quantity; i += 1) {
  //   test = id + i;
  // options = {
  //   id: `${id}-${i}`,
  //   name: `${name}-${i}`,
  //   value: `${value}-${i}`,
  //   label: `${label}-${i}`,
  //   checked: false,
  //   disabled: false,
  //   ariaLabel: `${ariaLabel}-${i}`,
  // };
  // }
  for (let i = 0; i < quantity; i += 1) {
    options = {
      id: `${id}-${i}`,
      name: `${name}-${i}`,
      value: `${value}-${i}`,
      label: `${label}-${i}`,
      checked: false,
      disabled: false,
      ariaLabel: `${ariaLabel}-${i}`,
    };
    // console.log(options);
  }
  // console.log(test);
  <RadioGroup options={options} isBlock />;
};
