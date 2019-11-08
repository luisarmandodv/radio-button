import React, { Component, Fragment } from 'react';
import { bool, shape, string } from 'prop-types';
import Radio from '../Radio/Radio';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedValue: e.target.value,
    });
  }

  render() {
    const { options, isBlock } = this.props;
    const { selectedValue } = this.state;

    return (
      <Fragment>
        {options.map(option => (
          <Radio
            type="radio"
            key={option.value.toString()}
            id={option.id.toString()}
            name={option.name}
            value={option.value}
            onChange={!option.disabled ? this.handleChange : null}
            label={option.label}
            disabled={option.disabled}
            required={option.required}
            area-label={option.areaLabel}
            checked={option.value === selectedValue}
            isBlock={isBlock}
          />
        ))}
      </Fragment>
    );
  }
}

RadioGroup.defaultProps = {
  isBlock: false,
  options: [],
};

RadioGroup.propTypes = {
  isBlock: bool,
  options: shape({
    id: string,
    name: string,
    value: string,
    label: string,
    checked: false,
    disabled: false,
    areaLabel: string,
  }),
};
