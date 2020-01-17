import { boolean, text } from '@storybook/addon-knobs';

export default function CommonProps() {
  return {
    id: text('id', 'cat'),
    label: text('label', 'cat'),
    name: text('name', 'pet'),
    value: text('value', 'cat'),
    ariaLabel: text('aria-label', 'cat'),
    checked: boolean('checked', true),
    disabled: boolean('disabled', false),
    required: boolean('required', false),
  };
}
