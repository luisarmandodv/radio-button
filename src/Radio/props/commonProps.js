// eslint-disable-next-line import/no-extraneous-dependencies
import { boolean, text } from '@storybook/addon-knobs';

export default function CommonProps(showChecked = true) {
  return {
    label: text('Label', 'cat'),
    id: text('ID', 'cat'),
    name: text('Name', 'pet'),
    value: text('Value', 'cat'),
    checked: showChecked ? boolean('Checked', true) : null,
    disabled: boolean('Disabled', false),
    required: boolean('Required', false),
    layout: boolean('Layout (Block/Inline)', false),
  };
}
