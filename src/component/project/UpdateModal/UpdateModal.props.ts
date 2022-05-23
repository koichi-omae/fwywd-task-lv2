import { UpdateModalProps } from './UpdateModal.type';
import CrossImage from '~/img/cross.png';

const defaultProps: UpdateModalProps = {
  image: {
    src: CrossImage,
    alt: 'cross',
    width: 20,
    height: 20,
  },
  title: 'タイトル',
  content: '内容',
  textarea: {
    row: 6,
  },
  button: {
    name: '更新',
  },
};

export const propObj: { [key: string]: UpdateModalProps } = {
  default: defaultProps,
};
