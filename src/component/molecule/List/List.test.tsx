import { render, screen } from '@testing-library/react';
import { List } from './List';
import { propObj } from './List.props';
import { ListProps } from './List.type';

let props: ListProps;

describe('component/molecule/List', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/molecule/List <input /> の type が checkbox であること', () => {
      render(<List {...props} />);
      expect(screen.getByTestId('molecule-list-checkbox')).toHaveAttribute('type', 'checkbox');
    });
    it('component/molecule/List のタイトルが表示されること', () => {
      render(<List {...props} />);
      expect(screen.getByTestId('molecule-list-title')).toHaveTextContent(propObj.default.title);
    });
    it('component/molecule/List の画像が表示されること', () => {
      render(<List {...props} />);
      expect(screen.getByTestId('molecule-list-image')).toHaveAttribute(
        'alt',
        propObj.default.image.alt,
      );
    });
  });
});
