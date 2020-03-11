// eslint-disable-next-line import/no-extraneous-dependencies
import { color, text } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeDefaultBorder: color(
      'Default Border Color',
      '#9c9c9c',
      'Theme Default'
    ),
    themeLabelText: color(
      'Default Label Text Color',
      '#333333',
      'Theme Default'
    ),
    themeDefaultCheckedBackground: color(
      'Default Checked Background Color',
      '#bf0000',
      'Theme Checked'
    ),
    themeDisabledBorder: color(
      'Disabled Border Color',
      '#DFDFDF',
      'Theme Disabled'
    ),
    themeDisabledLabelText: color(
      'Disabled Text Color',
      '#dddddd',
      'Theme Disabled'
    ),
    marginTop: text('Margin Top', '.5rem', 'Theme Margin'),
    marginRight: text('Margin Right', '3rem', 'Theme Margin'),
    marginBottom: text('Margin Bottom', '.5rem', 'Theme Margin'),
    marginLeft: text('Margin Left', '0rem', 'Theme Margin'),
  };
}
