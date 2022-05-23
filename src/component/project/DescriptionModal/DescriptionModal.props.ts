import { DescriptionModalProps } from './DescriptionModal.type';
import CrossImage from '~/img/cross.png';

const defaultProps: DescriptionModalProps = {
  crossImage: {
    src: CrossImage,
    alt: 'cross',
    width: 20,
    height: 20,
  },
  btnName: '更新',
};

export const propObj: { [key: string]: DescriptionModalProps } = {
  default: defaultProps,
};
