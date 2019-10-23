import React, { Component, Fragment } from 'react';
import { bool, string, shape } from 'prop-types';
import RadioButton from '../ui/RadioButton';

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }; // eslint-disable-line
  }

  render() {
    const { name, options, isDisabled, isRequired, block } = this.props;
    return (
      <Fragment>
        {options.map(option => (
          <RadioButton
            key={option.toString()}
            name={name}
            id={option.id}
            value={option}
            onChange={this.handleChecked}
            type="radio"
            block={block}
            disabled={isDisabled}
            required={isRequired}
            option={option}
          />
        ))}
      </Fragment>
    );
  }
}

Radio.defaultProps = {
  isDisabled: false,
  isRequired: false,
  block: false,
  name: '',
  options: [],
};

Radio.propTypes = {
  isDisabled: bool,
  isRequired: bool,
  block: bool,
  name: string,
  options: shape({
    name: string,
    key: string,
  }),
};
