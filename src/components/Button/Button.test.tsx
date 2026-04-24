import { render, screen } from '@test-utils';
import Button from './Button';

describe('render Button', () => {
  it('Проверка имени кнопки', () => {
    render(<Button />);
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });
});
