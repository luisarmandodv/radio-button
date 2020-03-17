// eslint-disable-next-line import/no-extraneous-dependencies
import { radios } from '@storybook/addon-knobs';

export default function CheckedProps() {
  const options = {
    BrownHare: 'BrownHare',
    Wildebeest: 'Wildebeest',
    Cheetah: 'Cheetah',
  };
  let checkedBrownHare = false;
  let checkedWildebeest = false;
  let checkedCheetah = false;
  const value = radios('Checked', options, 'BrownHare', 'Theme Checked');
  switch (value) {
    case 'BrownHare':
      checkedBrownHare = true;
      break;
    case 'Wildebeest':
      checkedWildebeest = true;
      break;
    case 'Cheetah':
      checkedCheetah = true;
      break;
    default:
      return false;
  }
  const data = [
    {
      id: 'Animal1',
      name: 'fastest',
      value: 'BrownHare',
      label: 'BrownHare',
      checked: checkedBrownHare,
      disabled: false,
      required: false,
    },
    {
      id: 'Animal2',
      name: 'fastest',
      value: 'Wildebeest',
      label: 'Wildebeest',
      checked: checkedWildebeest,
      disabled: false,
      required: false,
    },
    {
      id: 'Animal3',
      name: 'fastest',
      value: 'Cheetah',
      label: 'Cheetah',
      checked: checkedCheetah,
      disabled: false,
      required: false,
    },
  ];

  return {
    data,
  };
}
