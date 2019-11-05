/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ReXStories from '../../stories/rex/stories';
import Radio from './Radio';

const stories = ReXStories('Radio/Uncontrolled');

// Stories
stories.add('default', () => (
  <Radio id="choice1" label="dog" name="pet" value="dog" />
));

stories.add('checked', () => (
  <Radio
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    area-label="dog"
    checked={boolean('checked', true)}
  />
));

stories.add('disabled', () => (
  <Radio
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    area-label="dog"
    disabled={boolean('disabled', true)}
  />
));

stories.add('required', () => (
  <Radio
    id="choice1"
    label="dog"
    name="pet"
    value="dog"
    area-label="dog"
    required={boolean('required', true)}
  />
));

stories.add('dynamic', () => (
  <Radio
    id="choice0"
    label="rabbit"
    name="pet"
    value="rabbit"
    area-label="rabbit"
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
  />
));

const storiesLayout = ReXStories('Radio/Uncontrolled/Layout');

// storiesLayout
storiesLayout.add('default inline layout', () => (
  <Fragment>
    <Radio name="pet" label="dog" value="dog" id="choice1" area-label="dog" />
    <Radio
      name="pet"
      label="cat"
      value="cat"
      area-label="cat"
      id="choice2"
      checked
    />
    <Radio
      name="pet"
      label="rabbit"
      value="rabbit"
      area-label="rabbit"
      id="choice3"
    />
    <Radio
      name="pet"
      label="pig"
      value="pig"
      id="choice4"
      area-label="pig"
      disabled
    />
  </Fragment>
));

storiesLayout.add('block layout', () => (
  <Fragment>
    <Radio
      isBlock
      name="pet"
      label="dog"
      value="dog"
      id="choice1"
      area-label="dog"
      checked
    />
    <Radio isBlock name="pet" label="cat" value="cat" id="choice2" />
    <Radio
      isBlock
      name="pet"
      label="rabbit"
      value="rabbit"
      area-label="rabbit"
      id="choice3"
    />
    <Radio isBlock name="pet" label="pig" value="pig" id="choice4" disabled />
  </Fragment>
));
