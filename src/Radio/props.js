// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, text } from '@storybook/addon-knobs';

export default function CommonProps() {
  return {
    label: text('label', 'cat'),
    id: text('id', 'cat'),
    name: text('name', 'pet'),
    value: text('value', 'cat'),
    checked: boolean('checked', true),
    disabled: boolean('disabled', false),
    required: boolean('required', false),
  };
}
