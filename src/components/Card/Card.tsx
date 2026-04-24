import { useReducer } from 'react';
import { AspectRatio, Button, Image, Card as MCard, Stack, Text, Title } from '@mantine/core';
import Layout from '../Layout/Layout';
import Modal from '../Modal/Modal';

export interface Launch {
  links?: { mission_patch_small: string };
  rocket?: { rocket_name: string };
  mission_name: string;
  details?: string;
}

export interface CardProps {
  launch: Launch;
}

type State = {
  isModalOpen: boolean;
};

type Action = { type: 'close' } | { type: 'open' };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'close':
      return {
        ...state,
        isModalOpen: false,
      };
    case 'open':
      return {
        ...state,
        isModalOpen: true,
      };
    default:
      return state;
  }
}

function Card({ launch }: CardProps) {
  const [state, dispatcher] = useReducer(reducer, { isModalOpen: false });

  const handleIsModalOpen = () => {
    dispatcher({ type: 'close' });
  };

  return (
    <>
      <MCard
        shadow="sm"
        padding="md"
        radius="md"
        withBorder
        mx="auto"
        w={{ base: '100%', md: 302 }}
        h={{ base: 'auto', md: 414 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          transition: 'background-color 0.6s ease, border-color 0.6s ease',

          backgroundColor:
            'light-dark(var(--mantine-color-white), var(--mantine-color-customGray-8))',

          borderColor: 'light-dark(var(--mantine-color-gray-3), var(--mantine-color-customGray-7))',
        }}
      >
        <MCard.Section p="md">
          <AspectRatio ratio={1 / 1} maw={200} mx="auto">
            <Image
              src={launch.links?.mission_patch_small}
              alt={launch.mission_name}
              fit="contain"
              fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
          </AspectRatio>
        </MCard.Section>

        <Stack align="center" gap={10}>
          <Text
            fw={600}
            fz="18px"
            truncate="end"
            style={{
              color: 'light-dark(var(--mantine-color-black), var(--mantine-color-white))',
              flexShrink: 1,
            }}
          >
            {launch.mission_name}
          </Text>

          <Text
            fw={700}
            fz="20px"
            style={{
              color: 'light-dark(var(--mantine-color-gray-4), var(--mantine-color-gray-6))',
              whiteSpace: 'nowrap',
            }}
          >
            {launch.rocket?.rocket_name}
          </Text>
        </Stack>
        <Button
          variant="filled"
          color="light-dark(var(--mantine-color-blue-6),var(--mantine-color-blue-4))"
          radius="md"
          h={44}
          mt="auto"
          onClick={() => dispatcher({ type: 'open' })}
        >
          See more
        </Button>
      </MCard>
      {state.isModalOpen && (
        <>
          <Layout onClose={handleIsModalOpen} />
          <Modal onClose={handleIsModalOpen}>
            <Title order={2}>{launch.mission_name}</Title>
            <AspectRatio ratio={1 / 1} maw={200} mx="auto">
              <Image
                src={launch.links?.mission_patch_small}
                alt={launch.mission_name}
                fit="contain"
                fallbackSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              />
            </AspectRatio>
            <Title order={5}>Mission name:</Title>
            {launch.mission_name}
            <Title order={5}>Rocket name:</Title>
            {launch.rocket?.rocket_name}
            <Title order={5}>Details:</Title>
            <p style={{ marginTop: 0 }}>{launch.details}</p>
          </Modal>
        </>
      )}
    </>
  );
}

export default Card;
