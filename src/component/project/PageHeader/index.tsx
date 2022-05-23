import { PageHeader as PageHeaderPresenter } from './PageHeader';
import { PageHeaderProps } from './PageHeader.type';
import LogoImage from '~/img/logo.png';

const PageHeader: React.FC = () => {
  const defaultProps: PageHeaderProps = {
    logoImage: {
      src: LogoImage,
      alt: 'logo',
      width: 156,
      height: 60,
    },
  };
  return <PageHeaderPresenter {...defaultProps} />;
};

export { PageHeader };
