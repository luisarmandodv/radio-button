/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import Radio from '../Radio';

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
    // eslint-disable-next-line react/prop-types
    const { options, style, className } = this.props;
    const { selectedValue } = this.state;

    return (
      <div className={className} style={style}>
        {options.map(option => {
          const {
            value,
            id,
            name,
            label,
            disabled,
            required,
            ariaLabel,
            isBlock,
          } = option;
          return (
            <Radio
              key={id.toString()}
              id={id}
              name={name}
              value={value}
              onChange={!disabled ? this.handleChange : null}
              label={label}
              disabled={disabled}
              required={required}
              aria-label={ariaLabel}
              checked={value === selectedValue}
              isBlock={isBlock}
            />
          );
        })}
      </div>
    );
  }
}

RadioGroup.defaultProps = {
  className: 'rex-radio-group',
  // eslint-disable-next-line react/default-props-match-prop-types
  style: {},
  options: [],
};

RadioGroup.propTypes = {
  className: string,
  options: shape({
    id: string,
    name: string,
    value: string,
    label: string,
    checked: false,
    disabled: false,
    ariaLabel: string,
  }),
};
