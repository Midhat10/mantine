import React, { useEffect, useState } from 'react';
import { Chip } from '@mantine/core';

function ChipsExample() {
  // array of strings value when multiple is true
  const [value, setValue] = useState([]);

  useEffect(() => {
    console.log(value);
  });
  return (
    <Chip.Group multiple value={value} onChange={setValue}>
      <Chip
        size="md"
        radius="xs"
        value="react"
        color="red"
        variant="filled"
        style={{ textAlign: 'center' }}
      >
        React
      </Chip>
      <Chip size="md" radius="xs" value="ng" pt="lg" style={{ textAlign: 'center' }}>
        Angular
      </Chip>
      <Chip size="md" radius="xs" value="svelte" pt="lg" style={{ textAlign: 'center' }}>
        Svelte
      </Chip>
      <Chip size="md" radius="xs" value="vue" pt="lg" style={{ textAlign: 'center' }}>
        Vue
      </Chip>
    </Chip.Group>
  );
}

export default ChipsExample;
