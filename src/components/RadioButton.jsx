import React, { Component, Fragment } from 'react';
import { bool, string, arrayOf, oneOf } from 'prop-types';
import { SIZES, DEFAULT_SIZE } from './props';
import './RadioButton.scss';

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false }; // eslint-disable-line
  }

  render() {
    const {
      className,
      type,
      name,
      size,
      block,
      options,
      hasTitleLabel,
      titleLabel,
      isDisabled,
      isRequired,
      hasHelper,
      helper,
    } = this.props;
    const typeClass = type === 'radio' ? 'rex-radio' : 'rex-checkbox';
    const labelClass =
      type === 'radio' ? 'rex-radio-label' : 'rex-checkbox-label';
    const layoutClass = block ? 'rex-form-block' : null;
    const classes = [typeClass, className, layoutClass].join(' ').trim();
    const sizeClass = SIZES[size];
    const disabledClass = isDisabled ? 'disabled' : '';
    const labelTitleClasses = ['rex-form-label', disabledClass]
      .join(' ')
      .trim();
    const labelClasses = [labelClass, sizeClass].join(' ').trim();
    const labelTag = hasTitleLabel ? (
      <legend {...labelTitleClasses}>{titleLabel}</legend>
    ) : null;
    const helperTag = hasHelper ? (
      <small className="rex-form-helper">{helper}</small>
    ) : null;

    return (
      <Fragment>
        {labelTag}
        {options.map(option => (
          <div className={classes} key={option.toString()}>
            <input
              name={name}
              id={option.id}
              value={option}
              onChange={this.handleChecked}
              type={type}
              disabled={isDisabled}
              required={isRequired}
            />
            <label className={labelClasses} htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
        {helperTag}
      </Fragment>
    );
  }
}

RadioButton.defaultProps = {
  className: '',
  isDisabled: false,
  isRequired: false,
  block: false,
  type: 'radio',
  hasTitleLabel: false,
  titleLabel: '',
  hasHelper: false,
  helper: '',
  name: '',
  size: DEFAULT_SIZE,
  options: [],
};

RadioButton.propTypes = {
  className: string,
  isDisabled: bool,
  isRequired: bool,
  block: bool,
  type: oneOf(['checkbox', 'radio']),
  hasTitleLabel: bool,
  titleLabel: string,
  hasHelper: bool,
  helper: string,
  name: string,
  size: oneOf(Object.keys(SIZES)),
  options: arrayOf(string),
};
