import { useState } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useDisclosure, useHover } from '@mantine/hooks';

// import { theme } from '../../theme';

function Buttons() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };
  return (
    <div>
      <Button
        leftSection={<IconSun />}
        variant="gradient"
        gradient={{ from: 'red', to: 'cyan', deg: 0 }}
      >
        Gradient button
      </Button>
      <Button
        loading={loading}
        onClick={handleClick}
        variant="gradient"
        gradient={{ from: 'green', to: 'yellow', deg: 90 }}
      >
        Gradient button
      </Button>
      <Button variant="gradient" gradient={{ from: 'green', to: 'pink', deg: 90 }}>
        Gradient button
      </Button>
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        styles={(theme) => ({
          root: {
            border: 0,
            height: 500,
            paddingRight: '100px',
            paddingLeft: isHovered ? '100px' : '0',
          },
        })}
        variant="gradient"
        gradient={{ from: 'green', to: 'pink', deg: 90 }}
      >
        i work with root
      </Button>
      <Button
        component="a"
        href="https://www.google.com"
        target="_blank"
        variant="gradient"
        gradient={{ from: 'blue', to: 'pink', deg: 90 }}
      >
        Link a
      </Button>
    </div>
  );
}

export default Buttons;
