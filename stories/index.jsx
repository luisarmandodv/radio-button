/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReXStories from './rex/stories';
import RadioButton from '../src/index';

const stories = ReXStories('RadioButton');

const Petdata = {
  petSelections: [
    'dog',
    'cat',
    'rabbit',
    'iguana',
    'pony',
    'ferret',
    'fish',
    'bird',
  ],
  selectedPets: ['dog', 'cat', 'ferret'],
  ageOptions: ['18 - 25', '26 - 59', '60 or older'],
  ownerAgeRangeSelection: '',
};

// Stories
stories.add('default', () => (
  <form className="rex-form">
    <fieldset>
      <div className="rex-form-group">
        <RadioButton type="radio" options={Petdata.petSelections} />
      </div>
    </fieldset>
  </form>
));

stories.add('block layout', () => (
  <form className="rex-form">
    <fieldset>
      <div className="rex-form-group">
        <RadioButton type="radio" block options={Petdata.petSelections} />
      </div>
    </fieldset>
  </form>
));

stories.add('with Title label', () => (
  <form className="rex-form">
    <fieldset>
      <div className="rex-form-group">
        <RadioButton
          hasTitleLabel
          titleLabel="Which kinds of pets would you like to adopt?"
          type="radio"
          options={Petdata.petSelections}
        />
      </div>
    </fieldset>
  </form>
));

stories.add('with Helper text', () => (
  <form className="rex-form">
    <fieldset>
      <div className="rex-form-group">
        <RadioButton
          type="radio"
          options={Petdata.petSelections}
          hasHelper
          helper="Helper Text"
        />
      </div>
    </fieldset>
  </form>
));

stories.add('with Title text and helper text', () => (
  <form className="rex-form">
    <fieldset>
      <div className="rex-form-group">
        <RadioButton
          hasTitleLabel
          titleLabel="Which kinds of pets would you like to adopt?"
          type="radio"
          options={Petdata.petSelections}
          hasHelper
          helper="Helper Text"
        />
      </div>
    </fieldset>
  </form>
));
