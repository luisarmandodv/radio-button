// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, text, number } from '@storybook/addon-knobs';

export default function CommonProps(showChecked = true) {
  return {
    label: text('label', 'cat'),
    id: text('id', 'cat'),
    name: text('name', 'pet'),
    value: text('value', 'cat'),
    checked: showChecked ? boolean('checked', true) : null,
    disabled: boolean('disabled', false),
    required: boolean('required', false),
    layout: boolean('layout (Block/Inline)', false),
    quantity: number('Quantity of items', 5),
  };
}
