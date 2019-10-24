/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import ReXStories from '../../stories/rex/stories';
import RadioButton from './RadioButton';

// StoriesHOC
const storiesHOC = ReXStories('Radio Button');

const Petdata = [
  'dog',
  'cat',
  'rabbit',
  'iguana',
  'pony',
  'ferret',
  'fish',
  'bird',
];
storiesHOC.add('Radio Buttons', () => (
  <Fragment>
    <RadioButton options={Petdata} />
  </Fragment>
));
