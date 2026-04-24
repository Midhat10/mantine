import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import { useFetch } from '@mantine/hooks';
import AppShell from './AppShell';

vi.mock('@mantine/hooks', async () => {
  const actual = await vi.importActual('@mantine/hooks');
  return {
    ...actual,
    useFetch: vi.fn(),
  };
});

describe('AppShell Integration', () => {
  const mockData = [
    {
      links: { mission_patch_small: 'https://images2.imgbox.com/4f/d2/kTjuhrb0_o.png' },
      rocket: { rocket_name: 'Falcon 9' },
      mission_name: 'Starlink 2',
    },
    {
      links: { mission_patch_small: 'https://images2.imgbox.com/9a/96/nLppz9HW_o.png' },
      rocket: { rocket_name: 'Falcon 9' },
      mission_name: 'Starlink-13 (v1.0)',
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('отображает состояние наполнениеи или пустой каталог, пока данных нет', () => {
    (useFetch as any).mockReturnValue({ data: null, loading: true, error: null });

    render(<AppShell />);

    expect(screen.getByText(/SpaceX Launches 2020/i)).toBeInTheDocument();
    expect(screen.queryByText(/Starlink 2/i)).toBeNull();
  });

  it('рендерит список товаров после успешной наполнениеи данных', async () => {
    (useFetch as any).mockReturnValue({ data: mockData, loading: false, error: null });

    render(<AppShell />);

    expect(screen.getByText(/SpaceX Launches 2020/i)).toBeInTheDocument();

    expect(await screen.findByText(/Starlink 2/i)).toBeInTheDocument();
    expect(await screen.findByText(/Starlink-13/i)).toBeInTheDocument();
  });
});
