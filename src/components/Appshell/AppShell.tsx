import { Group, AppShell as MantineAppShell, Title } from '@mantine/core';
import { useFetch } from '@mantine/hooks';
import Grid from '../Grid/Grid';
import LightDarkButton from '../LightDarkButton/LightDarkButton';

interface Item {
  links?: { mission_patch_small: string };
  rocket?: { rocket_name: string };
  mission_name: string;
  details: string;
}

function AppShell() {
  const { data } = useFetch<Item[]>('https://api.spacexdata.com/v3/launches?launch_year=2020');
  return (
    <>
      <MantineAppShell padding={{ base: 10, sm: 15, lg: 'xl' }}>
        <MantineAppShell.Main
          style={{
            transition: 'background-color 0.3s ease',
            backgroundColor:
              'light-dark(var(--mantine-color-customGray-1), var(--mantine-color-customGray-9))',
            minHeight: '100vh',
          }}
        >
          <Group justify="center" style={{ position: 'relative' }}>
            <LightDarkButton />
            <Title
              order={1}
              style={{
                color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
                textAlign: 'center',
              }}
            >
              SpaceX Launches 2020
            </Title>
          </Group>
          <Grid data={data} length={0} />
        </MantineAppShell.Main>
      </MantineAppShell>
    </>
  );
}

export default AppShell;
