import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import styles from './LightDarkButton.module.css';

function LightDarkButton() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  useHotkeys([['mod + J', () => toggleColorScheme()]]);
  return (
    <div>
      <ActionIcon
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
        variant="default"
        size="xl"
        radius="100%"
        aria-label="Toggle color scheme"
        style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <IconSun className={cx(styles.icon, styles.light)} stroke={1.5} />
        <IconMoon className={cx(styles.icon, styles.dark)} stroke={1.5} />
      </ActionIcon>
    </div>
  );
}

export default LightDarkButton;
