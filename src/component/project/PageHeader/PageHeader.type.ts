import { StaticImageData } from 'next/image';

export interface PageHeaderProps {
  logo: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
}
