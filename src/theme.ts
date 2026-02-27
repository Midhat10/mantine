import { Button, createTheme } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily: 'Open Sans',
  fontSizes: { md: '12px' },
  radius: { sm: '10px' },
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
  primaryColor: 'gray',
  // components: {
  //   Button: Button.extend({
  //     styles: (theme) => ({
  //       root: {
  //         backgroundColor: theme.colors.blue[2],
  //       },
  //     }),
  //   }),
  // },
});
