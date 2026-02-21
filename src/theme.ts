import { root } from 'postcss';
import { Button, createTheme } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Open Sans',
  fontSizes: { md: '12px' },
  radius: { sm: '232px' },
  colors: {
    blue: [
      '#e64980',
      '#da77f2',
      '#9775fa',
      '#5c7cfa',
      '#4dabf7',
      '#1098ad',
      '#12b886',
      '#ff922b',
      '#fab005',
      '#a9e34b',
    ],
  },
  primaryColor: 'red',
  components: {
    Button: Button.extend({
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.blue[1],
        },
      }),
    }),
  },
});
