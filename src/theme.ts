// import { Button, createTheme } from '@mantine/core';
import { createTheme, MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#eafbee',
  '#dbf2e0',
  '#b9e1c2',
  '#94d0a1',
  '#74c186',
  '#60b874',
  '#54b46a',
  '#449e59',
  '#398d4d',
  '#2a7a3f',
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
});

export default theme;
