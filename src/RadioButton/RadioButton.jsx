import React, { Component, Fragment } from 'react';
import { bool, shape, string, func } from 'prop-types';
import RadioButtonUI from '../ui/RadioButtonUI';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      selectedValue: e.target.value,
    });
  }

  render() {
    const { options, disabled, required, isBlock } = this.props;
    const { selectedValue } = this.state;
    return (
      <Fragment>
        {options.map((option, index) => (
          <RadioButtonUI
            isBlock={isBlock}
            key={option.id}
            id={index}
            name={option.name}
            value={option.value}
            // onChangeValue={this.handleChange}
            onChangeValue={e => this.handleChange(e)}
            type="radio"
            label={option.label}
            disabled={disabled}
            required={required}
            checked={selectedValue === option.value}
            // checked={option.checked}
          />
        ))}
      </Fragment>
    );
  }
}

RadioButton.defaultProps = {
  disabled: false,
  required: false,
  isBlock: false,
  options: {},
  onChangeValue: () => {},
};

RadioButton.propTypes = {
  disabled: bool,
  required: bool,
  isBlock: bool,
  options: shape({
    id: string,
    name: string,
    value: string,
    checked: bool,
  }),
  onChangeValue: func,
};
