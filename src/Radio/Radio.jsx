/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { bool, string } from 'prop-types';
import './Radio.scss';

export default function Radio({
  className,
  id,
  name,
  isBlock,
  value,
  label,
  disabled,
  checked,
  required,
  areaLabel,
  // eslint-disable-next-line react/prop-types
  style,
  ...props
}) {
  const labelClass = 'rex-radio-label';
  const layoutClass = isBlock ? 'rex-form-block' : null;
  const classes = ['rex-radio', layoutClass, className].join(' ').trim();

  return (
    <div className={classes} style={style}>
      <input
        value={value}
        id={id}
        name={name}
        type="radio"
        disabled={disabled}
        required={required}
        area-label={areaLabel}
        checked={checked}
        readOnly
        {...props}
      />
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

Radio.defaultProps = {
  className: '',
  disabled: false,
  checked: false,
  required: false,
  isBlock: false,
  areaLabel: '',
  id: '',
  name: '',
  label: '',
  value: '',
};

Radio.propTypes = {
  className: string,
  disabled: bool,
  checked: bool,
  required: bool,
  isBlock: bool,
  areaLabel: string,
  id: string,
  name: string,
  label: string,
  value: string,
};
