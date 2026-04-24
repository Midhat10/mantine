import { fireEvent, render, screen } from '@test-utils';
import Card from './Card';

describe('Card Component', () => {
  const mockItem = {
    links: { mission_patch_small: 'https://images2.imgbox.com/4f/d2/kTjuhrb0_o.png' },
    rocket: { rocket_name: 'Falcon 8' },
    mission_name: 'Starlink-14 (v1.0)',
    details: 'Ну что нибудь про ракетку',
  };

  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById('modal');
    document.body.removeChild(modalRoot);
  });

  it('корректно отображает данные товара', () => {
    render(<Card launch={mockItem} />);

    expect(screen.getByText(/Falcon 8/i)).toBeInTheDocument();
    expect(screen.getByText(/Starlink-14/i)).toBeInTheDocument();

    const image = screen.getByAltText(/Starlink-14/i);
    expect(image).toHaveAttribute('src', 'https://images2.imgbox.com/4f/d2/kTjuhrb0_o.png');
  });
  it('нажимается кнопка', async () => {
    render(<Card launch={mockItem} />);

    const button = screen.getByText(/see more/i);
    fireEvent.click(button);

    const modal = await screen.findByRole('dialog');
    expect(modal).toBeInTheDocument();
  });
});
