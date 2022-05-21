import { StaticImageData } from 'next/image';

export interface ListProps {
  title: string;
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
}
