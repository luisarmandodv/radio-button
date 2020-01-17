/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { number } from '@storybook/addon-knobs';
import RadioGroup from 'src/RadioGroup';
import { withKnobs } from '../../.storybook/helper';
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
    ariaLabel: 'iguana',
  },
];

export const LayoutInline = () => <RadioGroup options={FastestAnimals} />;

export const LayoutBlock = () => <RadioGroup options={Petdata} isBlock />;

export const WithDynamicPropsGroup = () => {
  const quantity = number('Quantity of items', 5);
  const { id } = CommonProps();
  const { name } = CommonProps();
  const { value } = CommonProps();
  const { label } = CommonProps();
  const { ariaLabel } = CommonProps();
  const { checked } = CommonProps();
  const { disabled } = CommonProps();
  const { required } = CommonProps();
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
      ariaLabel: `${ariaLabel}-${i}`,
    };
    listData.push(option);
  }
  // eslint-disable-next-line react/jsx-indent
  return <RadioGroup options={listData} isBlock />;
};
