import { render, screen } from '@testing-library/react';
import { MantineProvider, Notifica } from '@mantine/core'; // Импортируем Notifications
import { CounterProvider } from '../CounterContext/CounterContext'; // Импортируй свой контекст
import ButtonExample from './ButtonExample';

describe('ButtonExample component', () => {
  it('renders the Cart button', () => {
    render(
      <MantineProvider>
        <Notification />
        <CounterProvider>
          <ButtonExample />
        </CounterProvider>
      </MantineProvider>
    );

    const button = screen.getByRole('button', { name: /cart/i });
    expect(button).toBeInTheDocument();
  });
});
