import React, { Fragment } from 'react';
import { bool, string, oneOf, func } from 'prop-types';
import { SIZES, DEFAULT_SIZE } from './props';
import './RadioButtonUI.scss';

export default function RadioButtonUI({
  className,
  name,
  size,
  block,
  option,
  disabled,
  checked,
  required,
  handleChange,
  ...attributes
}) {
  const labelClass = 'rex-radio-label';
  const layoutClass = block ? 'rex-form-block' : null;
  const classes = ['rex-radio', layoutClass, className].join(' ').trim();
  const sizeClass = SIZES[size];
  const labelClasses = [labelClass, sizeClass].join(' ').trim();

  return (
    <Fragment>
      <div className={classes}>
        <input
          block={block.toString()}
          id={option}
          value={option}
          type="radio"
          disabled={disabled}
          checked={checked}
          required={required}
          onChange={() => handleChange(option)}
          {...attributes}
        />
        <label className={labelClasses} htmlFor={option}>
          {option}
        </label>
      </div>
    </Fragment>
  );
}

RadioButtonUI.defaultProps = {
  className: '',
  disabled: false,
  checked: false,
  required: false,
  block: false,
  name: '',
  size: DEFAULT_SIZE,
  option: {},
  handleChange: () => {},
};

RadioButtonUI.propTypes = {
  className: string,
  disabled: bool,
  checked: bool,
  required: bool,
  block: bool,
  name: string,
  size: oneOf(Object.keys(SIZES)),
  option: string,
  handleChange: func,
};
