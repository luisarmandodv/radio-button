/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import ReXStories from '../../stories/rex/stories';
import RadioGroup from './RadioGroup';

// StoriesHOC
const storiesHOC = ReXStories('RadioGroup / Controlled');

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

storiesHOC.add('RadioGroup inline', () => (
  <Fragment>
    <RadioGroup options={Petdata} />
  </Fragment>
));

storiesHOC.add('RadioGroup block', () => (
  <Fragment>
    <RadioGroup options={Petdata} isBlock />
  </Fragment>
));
