/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ReXStories from '../../stories/rex/stories';
import RadioButtonUI from './RadioButtonUI';

const stories = ReXStories('Radio Button/UI/Radio Button');

// Stories
stories.add('default', () => (
  <RadioButtonUI id="choice1" label="dog" name="pet" value="dog" />
));

stories.add('checked', () => (
  <RadioButtonUI
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    checked={boolean('checked', true)}
  />
));

stories.add('disabled', () => (
  <RadioButtonUI
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    disabled={boolean('disabled', true)}
  />
));

stories.add('required', () => (
  <RadioButtonUI
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    required={boolean('required', true)}
  />
));

stories.add('dynamic', () => (
  <RadioButtonUI
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
  />
));

stories.add('onClick', () => (
  <RadioButtonUI
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    onChangeValue={action('button-click')}
  />
));

const storiesLayout = ReXStories('Radio Button/UI/Layout');

// storiesLayout
storiesLayout.add('default inline layout', () => (
  <Fragment>
    <RadioButtonUI name="pet" label="dog" value="dog" id="choice1" checked />
    <RadioButtonUI name="pet" label="cat" value="cat" id="choice2" />
    <RadioButtonUI name="pet" label="rabbit" value="rabbit" id="choice3" />
    <RadioButtonUI name="pet" label="pig" value="pig" id="choice4" disabled />
  </Fragment>
));

storiesLayout.add('block layout', () => (
  <Fragment>
    <RadioButtonUI
      block
      name="pet"
      label="dog"
      value="dog"
      id="choice1"
      checked
    />
    <RadioButtonUI block name="pet" label="cat" value="cat" id="choice2" />
    <RadioButtonUI
      block
      name="pet"
      label="rabbit"
      value="rabbit"
      id="choice3"
    />
    <RadioButtonUI
      block
      name="pet"
      label="pig"
      value="pig"
      id="choice4"
      disabled
    />
  </Fragment>
));
