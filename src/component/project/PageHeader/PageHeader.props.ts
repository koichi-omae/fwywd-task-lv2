import { PageHeaderProps } from './PageHeader.type';
import LogoImage from '~/img/logo.png';

const defaultProps: PageHeaderProps = {
  logoImage: {
    src: LogoImage,
    alt: 'logo',
    width: 156,
    height: 60,
  },
};

export const propObj: { [key: string]: PageHeaderProps } = {
  default: defaultProps,
};
