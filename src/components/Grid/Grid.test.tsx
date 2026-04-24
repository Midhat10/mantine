import { render, screen } from '@test-utils';
import { vi } from 'vitest';
import Grid from './Grid';

describe('Grid Component', () => {
  const mockData = [
    {
      links: { mission_patch_small: 'https://images2.imgbox.com/4f/d2/kTjuhrb0_o.png' },
      rocket: { rocket_name: 'Falcon 8' },
      mission_name: 'Starlink-14 (v1.0)',
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

  it('отображает 24 циклов загрузки, когда данные загружаются (data === null)', () => {
    render(<Grid data={null} length={0} />);

    const { container } = render(<Grid data={null} length={0} />);

    const loaders = container.querySelectorAll('.mantine-Loader-root');

    expect(loaders.length).toBe(24);
  });

  it('рендерит правильное количество карточек CardBig при наличии данных', () => {
    render(<Grid data={mockData} length={mockData.length} />);

    expect(screen.getByText('Falcon 8')).toBeInTheDocument();
    expect(screen.getByText('Falcon 9')).toBeInTheDocument();

    const buttons = screen.getAllByText(/see more/i);
    expect(buttons).toHaveLength(2);
  });
});
