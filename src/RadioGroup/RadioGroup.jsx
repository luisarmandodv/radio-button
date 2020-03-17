/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { shape, string, bool } from 'prop-types';
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

  componentDidUpdate(prevProps) {
    const { options } = this.props;
    let canUpdate = false;

    // Check for options length (how many items)
    if (options.length !== prevProps.options.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      canUpdate = true;
    }

    // Check for any change in options object values (data)
    // eslint-disable-next-line no-restricted-syntax
    for (const key in options) {
      if (options[key] !== prevProps.options[key]) {
        canUpdate = true;
        break;
      }
    }

    if (canUpdate) {
      this.updateCheckedState(options);
    }
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

  updateCheckedState(options) {
    const checkedList = this.setCheckedList(options);
    this.setState({
      options,
      checkedList,
    });
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
    const { style, className, isBlock, disabled } = this.props;
    const { options, checkedList } = this.state;

    return (
      <div className={className} style={style} role="radiogroup">
        {options.map(option => {
          const { value, id, name, label, required } = option;

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
  isBlock: false,
  disabled: false,
};

RadioGroup.propTypes = {
  className: string,
  style: string,
  options: shape({
    id: string,
    name: string,
    value: string,
    label: string,
    checked: false,
    disabled: false,
  }),
  isBlock: bool,
  disabled: bool,
};
