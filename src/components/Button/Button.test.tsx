import { MantineProvider, PopoverProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ButtonExample from './ButtonExample';

function App() {
  return (
    <MantineProvider>
      <PopoverProvider>
        <Notifications />
        <ButtonExample />
      </PopoverProvider>
    </MantineProvider>
  );
}

export default App;
