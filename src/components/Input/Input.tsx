import { useState } from 'react';
import { IconAt } from '@tabler/icons-react';
import { CloseButton, Input } from '@mantine/core';

function InputExample() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input pt="25px" placeholder="Your email" leftSection={<IconAt height="10px" size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}

export default InputExample;
