import React, { Component, Fragment } from 'react';
import { bool, object } from 'prop-types';
import RadioButtonUI from '../ui/RadioButtonUI';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    // this.state = { checked: false }; // eslint-disable-line
    this.state = {
      selectedValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({
      selectedValue: event.target.value,
    });
    console.log(this.selectedValue);
  }

  render() {
    const { options, disabled, required, block } = this.props;
    // const value = this.props.value || this.state.value;// eslint-disable-line
    return (
      <Fragment>
        {options.map(option => (
          <RadioButtonUI
            data-value={this.option}
            key={option.toString()}
            id={option.id}
            value={option}
            onChange={this.handleChange}
            type="radio"
            block={block}
            disabled={disabled}
            required={required}
            option={option}
            checked={this.selectedValue === option}
          />
        ))}
      </Fragment>
    );
  }
}

RadioButton.defaultProps = {
  disabled: false,
  required: false,
  checked: false,
  block: false,
  options: [],
};

RadioButton.propTypes = {
  disabled: bool,
  required: bool,
  checked: bool,
  block: bool,
  options: object,
};
