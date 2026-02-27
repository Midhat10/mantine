import { useState } from 'react';
import { Button } from '@mantine/core';
import { useHover } from '@mantine/hooks';

function Counter({ value, decrement, increment }) {
  const { hovered, ref } = useHover();
  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement} bg="#dee2e6" maw={30} p={9}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="2" height="12" transform="rotate(-90 0 7)" fill="#212529" />
        </svg>
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" maw={30} p={9}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment} bg="#dee2e6" maw={30} p={9}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2001_1626)">
            <path d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z" fill="#212529" />
          </g>
          <defs>
            <clipPath id="clip0_2001_1626">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Button>
    </Button.Group>
  );
}

export default Counter;
