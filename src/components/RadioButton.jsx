import React from 'react';
import { string, func, element, oneOfType, arrayOf } from 'prop-types';
import H1 from '@rakuten-rex/core/h1';
import './RadioButton.scss';

export default function RadioButton({ children, onClick, text, className }) {
  return (
    <div className={className} onClick={onClick} role="presentation">
      <H1>{text}</H1>
      {children}
    </div>
  );
}

RadioButton.defaultProps = {
  children: null,
  text: 'Welcome to React',
  className: 'radio-button',
  onClick: () => null,
};

RadioButton.propTypes = {
  children: oneOfType([string, element, arrayOf(element)]),
  text: string,
  className: string,
  onClick: func,
};
