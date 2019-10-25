/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import ReXStories from '../../stories/rex/stories';
import RadioButton from './RadioButton';

// StoriesHOC
const storiesHOC = ReXStories('Radio Button');

const Petdata = [
  {
    id: 'choice1',
    name: 'pet',
    value: 'dog',
    label: 'Dog',
    checked: false,
  },
  {
    id: 'choice2',
    name: 'pet',
    value: 'fish',
    label: 'Fish',
    checked: false,
  },
  {
    id: 'choice3',
    name: 'pet',
    value: 'cat',
    label: 'Cat',
    checked: true,
  },
  {
    id: 'choice4',
    name: 'pet',
    value: 'rabbit',
    label: 'Rabbit',
    checked: false,
  },
  {
    id: 'choice5',
    name: 'pet',
    value: 'iguana',
    label: 'Iguana',
    checked: false,
  },
];
storiesHOC.add('Radio Button inline', () => (
  <Fragment>
    <RadioButton options={Petdata} />
  </Fragment>
));
storiesHOC.add('Radio Button block', () => (
  <Fragment>
    <RadioButton options={Petdata} isBlock />
  </Fragment>
));
