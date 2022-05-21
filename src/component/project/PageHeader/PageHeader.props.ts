import { PageHeaderProps } from './PageHeader.type';
import LogoImage from '~/img/logo.png';

export const propObj: { [key: string]: PageHeaderProps } = {
  default: {
    logo: {
      src: LogoImage,
      alt: 'logo',
      width: 156,
      height: 60,
    },
  },
};
