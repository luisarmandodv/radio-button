/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { boolean } from '@storybook/addon-knobs';
import ReXStories from '../../stories/rex/stories';
import RadioButtonUI from './RadioButtonUI';

const stories = ReXStories('Radio Button/UI/Radio Button');

// Stories
stories.add('default', () => <RadioButtonUI option="dog" name="a dog" />);

stories.add('checked', () => (
  <RadioButtonUI option="dog" name="a dog" checked={boolean('checked', true)} />
));

stories.add('disabled', () => (
  <RadioButtonUI
    option="dog"
    name="a dog"
    disabled={boolean('disabled', true)}
  />
));

stories.add('required', () => (
  <RadioButtonUI
    option="dog"
    name="a dog"
    required={boolean('required', true)}
  />
));

stories.add('dynamic', () => (
  <RadioButtonUI
    option="dog"
    name="a dog"
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
  />
));

const storiesLayout = ReXStories('Radio Button/UI/Layout');

// storiesLayout
storiesLayout.add('default inline layout', () => (
  <Fragment>
    <RadioButtonUI option="dog" checked />
    <RadioButtonUI option="cat" />
    <RadioButtonUI option="rabbit" />
    <RadioButtonUI option="pig" disabled />
  </Fragment>
));

storiesLayout.add('block layout', () => (
  <Fragment>
    <RadioButtonUI block option="dog" checked />
    <RadioButtonUI block option="cat" />
    <RadioButtonUI block option="rabbit" />
    <RadioButtonUI block option="pig" disabled />
  </Fragment>
));
