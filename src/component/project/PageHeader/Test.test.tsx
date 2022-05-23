import { render, screen } from '@testing-library/react';
import { PageHeader, baseId } from './PageHeader';
import { propObj } from './PageHeader.props';
import { PageHeaderProps } from './PageHeader.type';

let props: PageHeaderProps;

describe('component/project/Project', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/project/Project のロゴ画像が表示されること', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});
