/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import ReXText from '@rakuten-rex/core/text';
import ReXStories from './rex/stories';
import RadioButton from '../src/index';

const stories = ReXStories('RadioButton');

// Stories
stories.add('default', () => <RadioButton />);
stories.add('with text', () => <RadioButton text="Welcome to React example" />);
stories.add('with className', () => (
  <React.Fragment>
    <RadioButton className="color-black active" />
  </React.Fragment>
));

stories.add('with onClick', () => {
  const onClickSample = action('clicked');

  return <RadioButton onClick={onClickSample} />;
});

stories.add('with children', () => (
  <RadioButton>
    <ReXText>Hello World</ReXText>
  </RadioButton>
));

stories.add('with dynamic props', () => {
  const textWelcome = text('text', 'Welcome to Dynamic React');

  return <RadioButton text={textWelcome} />;
});
