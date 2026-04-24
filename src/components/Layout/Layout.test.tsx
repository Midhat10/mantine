import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import Layout from './Layout';

describe('render Layout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it('Layout есть в документе и откликается на клик', () => {
    const mockOnClose = vi.fn();
    render(<Layout onClose={mockOnClose} />);

    const layoutDiv = screen.getByTestId('layout');

    fireEvent.click(layoutDiv!);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
