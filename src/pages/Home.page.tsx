import '@mantine/core';

import { Children, cloneElement, ReactElement, useState } from 'react';
import AppShellExample from '@/components/Appshell/AppShell';

const Button = ({ style }: { style?: object }): ReactElement => (
  <button
    type="button"
    style={{
      color: 'red',
      border: '1px solid red',
      ...style,
    }}
  >
    i am button
  </button>
);

const Div = ({ style }: { style?: object }): ReactElement => <div style={style}>I am div</div>;

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const BackgroundColorClick = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const [backgroundColor, setBackGroundColor] = useState<string>('');
  const onClick = () => setBackGroundColor(getRandomColor());

  return (
    <>
      <span onClick={onClick}>
        {Children.map(children, (child: ReactElement) =>
          cloneElement(child, {
            ...child.props, //нужды для добавления пропсов, кроме style, так как мы должны изменить style
            style: {
              ...(child.props.style ?? {}), //добавляем исходные стили
              backgroundColor, //то, что меняется при нажатии кнопки
            },
          })
        )}
      </span>
    </>
  );
};

export function HomePage() {
  return (
    <>
      {/* <AppShellExample /> */}
      <BackgroundColorClick>
        <Button />
      </BackgroundColorClick>
      <BackgroundColorClick>
        <Div />
      </BackgroundColorClick>
      <Button />
      <Div />
    </>
  );
}
