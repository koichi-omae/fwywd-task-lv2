import { StaticImageData } from 'next/image';

export interface PageHeaderProps {
  logoImage: {
    src: StaticImageData;
    alt: 'logo';
    width: number;
    height: number;
  };
}
