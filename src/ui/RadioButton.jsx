import React, { Fragment } from 'react';
import { bool, string, oneOf, array } from 'prop-types';
import { SIZES, DEFAULT_SIZE } from './props';
import './RadioButton.scss';

export default function RadioButton({
  className,
  name,
  size,
  block,
  option,
  isDisabled,
  isChecked,
  ...attributes
}) {
  const labelClass = 'rex-radio-label';
  const layoutClass = block ? 'rex-form-block' : null;
  const classes = ['rex-radio', className, layoutClass].join(' ').trim();
  const sizeClass = SIZES[size];
  const labelClasses = [labelClass, sizeClass].join(' ').trim();
  const disabled = isDisabled ? { disabled: 'disabled' } : {};
  const checked = isChecked ? true : null;

  return (
    <Fragment>
      <div className={classes}>
        <input
          name={name}
          block={block}
          id={option}
          value={option}
          type="radio"
          {...disabled}
          checked={checked}
          {...attributes}
        />
        <label className={labelClasses} htmlFor={option}>
          {option}
        </label>
      </div>
    </Fragment>
  );
}

RadioButton.defaultProps = {
  className: '',
  isDisabled: false,
  isChecked: false,
  block: false,
  name: '',
  size: DEFAULT_SIZE,
  option: [],
};

RadioButton.propTypes = {
  className: string,
  isDisabled: bool,
  isChecked: bool,
  block: bool,
  name: string,
  size: oneOf(Object.keys(SIZES)),
  option: array,
};
