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

// export const theme = createTheme({
//   /** Put your mantine theme override here */
//   fontFamily: 'Open Sans',
//   fontSizes: { md: '12px' },
//   radius: { sm: '10px' },
//   colors: {
//     blue: [
//       '#e64980',
//       '#da77f2',
//       '#9775fa',
//       '#5c7cfa',
//       '#4dabf7',
//       '#1098ad',
//       '#12b886',
//       '#ff922b',
//       '#fab005',
//       '#a9e34b',
//     ],
//   },
//   primaryColor: 'gray',
//   components: {
//     Button: Button.extend({
//       vars: (theme, props) => {
//         if (props.size === 'xxl') {
//           return {
//             root: {
//               '--button-height': '60px',
//               '--button-padding-x': '30px',
//               '--button-fz': '24px',
//             },
//           };
//         }

//         if (props.size === 'xxs') {
//           return {
//             root: {
//               '--button-height': '24px',
//               '--button-padding-x': '10px',
//               '--button-fz': '10px',
//             },
//           };
//         }

//         return { root: {} };
//       },
//     }),
//   },
// components: {
//   Button: Button.extend({
//     styles: (theme) => ({
//       root: {
//         backgroundColor: theme.colors.blue[2],
//       },
//     }),
//   }),
// },
// });
