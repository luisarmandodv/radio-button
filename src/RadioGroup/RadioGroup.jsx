/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import Radio from '../Radio';

export default class RadioGroup extends Component {
  constructor(props) {
    super(props);
    const { options } = this.props;
    const checkedList = this.setCheckedList(options);

    this.state = {
      options,
      checkedList,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Set initial default values for checkedList
  // eslint-disable-next-line class-methods-use-this
  setCheckedList(options) {
    const checkedList = [];
    options.forEach(({ id, checked }) => {
      checkedList[id] = checked;
    });
    return checkedList;
  }

  handleChange(e) {
    const { id, checked } = e.target;
    let { checkedList } = this.state;
    if (checked) {
      checkedList = [];
    }
    checkedList[id] = checked;
    this.setState({
      checkedList,
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { style, className, isBlock } = this.props;
    const { options, checkedList } = this.state;

    return (
      <div className={className} style={style} role="radiogroup">
        {options.map(option => {
          const { value, id, name, label, disabled, required } = option;
          const checked = checkedList[id];
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
              checked={checked}
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
  }),
};
