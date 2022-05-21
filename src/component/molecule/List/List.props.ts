import { ListProps } from './List.type';
import CrossImage from '~/img/cross.png';

export const propObj: { [key: string]: ListProps } = {
  default: {
    title: 'Title',
    image: {
      src: CrossImage,
      alt: 'cross',
      width: 16,
      height: 16,
    },
  },
};
