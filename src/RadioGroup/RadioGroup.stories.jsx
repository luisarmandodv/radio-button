/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, color, select } from '@storybook/addon-knobs';
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
    areaLabel: 'BrownHare',
  },
  {
    id: 'fastestAnimal2',
    name: 'fastest',
    value: 'Wildebeest',
    label: 'Wildebeest',
    checked: false,
    disabled: false,
    areaLabel: 'Wildebeest',
  },
  {
    id: 'fastestAnimal3',
    name: 'fastest',
    value: 'Cheetah',
    label: 'Cheetah',
    checked: true,
    disabled: false,
    areaLabel: 'Cheetah',
  },
  {
    id: 'fastestAnimal4',
    name: 'fastest',
    value: 'Pronghorn',
    label: 'Pronghorn',
    checked: false,
    disabled: false,
    areaLabel: 'Pronghorn',
  },
  {
    id: 'cfastestAnimal',
    name: 'fastest',
    value: 'Lion',
    label: 'Lion',
    checked: false,
    disabled: true,
    areaLabel: 'Lion',
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
    areaLabel: 'dog',
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
    disabled: false,
    areaLabel: 'fish',
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
    disabled: false,
    areaLabel: 'cat',
  },
  {
    id: 'choice4',
    name: 'pet',
    value: 'rabbit',
    label: 'Rabbit',
    checked: false,
    disabled: false,
    areaLabel: 'rabbit',
  },
  {
    id: 'choice5',
    name: 'pet',
    value: 'iguana',
    label: 'Iguana',
    checked: false,
    disabled: true,
    areaLabel: 'iguana',
  },
];

export const LayoutInline = () => <RadioGroup options={FastestAnimals} />;

export const LayoutBlock = () => <RadioGroup options={Petdata} isBlock />;
