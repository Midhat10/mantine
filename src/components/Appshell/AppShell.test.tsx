import { render, screen } from '@test-utils';
import AppShellExample from './AppShell';

describe('AppShell component', () => {
  it('displays the correct header and button name', () => {
    render(<AppShellExample />);
    expect(screen.getByText(/vegetable/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /shop/i })).toBeInTheDocument();
  });
});
