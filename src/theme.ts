// import { Button, createTheme } from '@mantine/core';
import { createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    // Ваша палитра для фонов (10 оттенков)
    customGray: [
      '#fff', // 0
      '#f3f5fa', // 1 (ваш любимый светлый фон)
      '#e9ecef', // 2
      '#dee2e6', // 3
      '#ced4da', // 4
      '#adb5bd', // 5 (заменил дубль ced4da на стандартный шаг для градиента)
      '#868e96', // 6
      '#495057', // 7
      '#343a40', // 8
      '#212529', // 9 (ваш глубокий темный фон)
    ],
    // Ваша палитра для кнопок (из предыдущего шага)
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
