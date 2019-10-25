import React from 'react';
import { bool, string, func } from 'prop-types';
import './RadioButtonUI.scss';

export default function RadioButtonUI({
  className,
  name,
  isBlock,
  id,
  value,
  label,
  disabled,
  checked,
  required,
  onChangeValue,
  ...attributes
}) {
  const labelClass = 'rex-radio-label';
  const layoutClass = isBlock ? 'rex-form-block' : null;
  const classes = ['rex-radio', layoutClass, className].join(' ').trim();

  return (
    <div className={classes}>
      <input
        id={id}
        value={value}
        name={name}
        type="radio"
        disabled={disabled}
        checked={checked}
        required={required}
        onChange={onChangeValue}
        {...attributes}
      />
      <label className={labelClass} htmlFor={value}>
        {label}
      </label>
    </div>
  );
}

RadioButtonUI.defaultProps = {
  className: '',
  disabled: false,
  checked: false,
  required: false,
  isBlock: false,
  name: '',
  label: '',
  id: '',
  value: '',
  onChangeValue: () => {},
};

RadioButtonUI.propTypes = {
  className: string,
  disabled: bool,
  checked: bool,
  required: bool,
  isBlock: bool,
  name: string,
  label: string,
  id: string,
  value: string,
  onChangeValue: func,
};
