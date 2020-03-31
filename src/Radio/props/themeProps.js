// eslint-disable-next-line import/no-extraneous-dependencies
import { color, text } from '@storybook/addon-knobs';

export default function ThemeProps() {
  return {
    themeDefaultBorder: color(
      'Default Border Color',
      '#830056',
      'Theme Default'
    ),
    themeDefaultLabelText: color(
      'Default Label Text Color',
      '#A2006A',
      'Theme Default'
    ),
    themeCheckedBackground: color(
      'Checked Background Color',
      '#CB0085',
      'Theme Checked'
    ),
    themeCheckedBorder: color(
      'Checked Border Color',
      '#CB0085',
      'Theme Checked'
    ),
    themeCheckedLabelText: color(
      'Checked Label Text Color',
      '#5A003C',
      'Theme Checked'
    ),
    themeDisabledBorder: color(
      'Disabled Border Color',
      '#686868',
      'Theme Disabled'
    ),
    themeDisabledLabelText: color(
      'Disabled Text Color',
      '#828282',
      'Theme Disabled'
    ),
    marginTop: text('Margin Top', '.5rem', 'Theme Margin'),
    marginRight: text('Margin Right', '3rem', 'Theme Margin'),
    marginBottom: text('Margin Bottom', '.5rem', 'Theme Margin'),
    marginLeft: text('Margin Left', '0rem', 'Theme Margin'),
  };
}
