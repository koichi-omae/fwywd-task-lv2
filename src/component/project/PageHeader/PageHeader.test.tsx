import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';
import { propObj } from './PageHeader.props';
import { PageHeaderProps } from './PageHeader.type';

let props: PageHeaderProps;

describe('component/project/PageHeader', () => {
  describe('default', () => {
    beforeEach(() => {
      props = propObj.default;
    });

    it('component/project/PageHeader のロゴ画像が表示されること', () => {
      render(<PageHeader {...props} />);
      expect(screen.getByTestId('project-ph-image')).toHaveAttribute(
        'alt',
        propObj.default.logo.alt,
      );
    });
  });
});
