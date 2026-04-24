import { fireEvent, render, screen } from '@test-utils';
import { vi } from 'vitest';
import Modal from './Modal';

describe('render Modal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById('modal')!;
    document.body.removeChild(modalRoot);
  });
  it('показывает содержимое внутри модального окна', () => {
    render(
      <Modal onClose={() => {}}>
        <div data-testid="content">Типо дети</div>
      </Modal>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
  });
  it('уход по нажатию крестика', () => {
    const mockOnClose = vi.fn();
    render(<Modal onClose={mockOnClose}>Content</Modal>);
    const closeBt = screen.getByText('x');
    fireEvent.click(closeBt);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
  it('уход при нажатии escape', () => {
    const mockOnClose = vi.fn();
    render(<Modal onClose={mockOnClose}>Content</Modal>);

    fireEvent.keyDown(document, { code: 'Escape' });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
