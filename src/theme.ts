import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    customGray: [
      '#fff',
      '#f3f5fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],

    vegetable: [
      '#eefcf1',
      '#def6e4',
      '#b9edc7',
      '#91e3a7',
      '#70da8c',
      '#54b46a',
      '#48b260',
      '#399c51',
      '#2f8b46',
      '#217939',
    ],
  },
  primaryColor: 'vegetable',
});

export default theme;
