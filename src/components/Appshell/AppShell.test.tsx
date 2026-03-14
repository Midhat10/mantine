import { render, screen, waitFor } from '@test-utils';
import { vi } from 'vitest';
import { useFetch } from '@mantine/hooks';
import AppShellExample from './AppShell';

vi.mock('@mantine/hooks', async () => {
  const actual = await vi.importActual('@mantine/hooks');
  return {
    ...actual,
    useFetch: vi.fn(),
  };
});

describe('AppShellExample Integration', () => {
  const mockData = [
    { id: '1', name: 'Carrot', price: 10, image: 'carrot.jpg', category: 'veg' },
    { id: '2', name: 'Tomato', price: 15, image: 'tomato.jpg', category: 'veg' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отображает состояние наполнениеи или пустой каталог, пока данных нет', () => {
    (useFetch as any).mockReturnValue({ data: null, loading: true, error: null });

    render(<AppShellExample />);

    expect(screen.getByText('Vegetable')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });

  it('рендерит список товаров после успешной наполнениеи данных', async () => {
    (useFetch as any).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<AppShellExample />);

    expect(screen.getByText('SHOP')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Carrot/i)).toBeInTheDocument();
      expect(screen.getByText(/Tomato/i)).toBeInTheDocument();
    });
  });

  it('инициализирует корзину с нулевым количеством элементов', () => {
    (useFetch as any).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<AppShellExample />);

    const cartBadge = screen.getByText('0');
    expect(cartBadge).toBeInTheDocument();
  });
});
