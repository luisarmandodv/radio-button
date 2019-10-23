/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { boolean } from '@storybook/addon-knobs';
import ReXStories from './rex/stories';
import RadioButton from '../src/ui/RadioButton';
import Radio from '../src/Radio/index';

const stories = ReXStories('Radio Button/UI/Radio Button');

// Stories
stories.add('default', () => <RadioButton option="dog" name="a dog" />);

stories.add('checked', () => (
  <RadioButton
    option="dog"
    name="a dog"
    isChecked={boolean('checked', false)}
  />
));

stories.add('disabled', () => (
  <RadioButton
    option="dog"
    name="a dog"
    isDisabled={boolean('disabled', false)}
  />
));

stories.add('required', () => (
  <RadioButton
    option="dog"
    name="a dog"
    required={boolean('required', false)}
  />
));

stories.add('dynamic', () => (
  <RadioButton
    option="dog"
    name="a dog"
    isChecked={boolean('checked', false)}
    isDisabled={boolean('disabled', false)}
    required={boolean('required', false)}
  />
));

const storiesLayout = ReXStories('Radio Button/UI/Layout');

// storiesLayout
storiesLayout.add('default inline layout', () => (
  <Fragment>
    <RadioButton option="dog" name="a dog" isChecked />
    <RadioButton option="cat" name="a cat" />
    <RadioButton option="rabbit" name="a rabbit" />
    <RadioButton option="pig" name="a pig" isDisabled />
  </Fragment>
));

storiesLayout.add('block layout', () => (
  <Fragment>
    <RadioButton block option="dog" name="a dog" isChecked />
    <RadioButton block option="cat" name="a cat" />
    <RadioButton block option="rabbit" name="a rabbit" />
    <RadioButton block option="pig" name="a pig" isDisabled />
  </Fragment>
));

// StoriesHOC
const storiesHOC = ReXStories('Radio Button/Radio Button');

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
    <Radio options={Petdata} />
  </Fragment>
));
