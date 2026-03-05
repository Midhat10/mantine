import { useState } from 'react';
import { Button } from '@mantine/core';
import { useHover } from '@mantine/hooks';

function Counter({ value, decrement, increment }) {
  const { hovered: hovered1, ref: ref1 } = useHover();
  const { hovered: hovered2, ref: ref2 } = useHover();
  return (
    <Button.Group>
      <Button
        ref={ref1}
        variant="default"
        radius="md"
        onClick={decrement}
        bg="#dee2e6"
        maw={30}
        p={9}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="2"
            height="12"
            transform="rotate(-90 0 7)"
            fill="#212529"
            opacity={hovered1 ? 0.3 : 1}
          />
        </svg>
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" maw={30} p={9}>
        {value}
      </Button.GroupSection>
      <Button
        ref={ref2}
        variant="default"
        radius="md"
        onClick={increment}
        bg="#dee2e6"
        maw={30}
        p={9}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z" fill="#212529" opacity={hovered2 ? 0.3 : 1} />
        </svg>
      </Button>
    </Button.Group>
  );
}

export default Counter;
