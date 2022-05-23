import { DeleteModalProps } from './DeleteModal.type';
import CrossImage from '~/img/cross.png';

const defaultProps: DeleteModalProps = {
  crossImage: {
    src: CrossImage,
    alt: 'cross',
    width: 20,
    height: 20,
  },
  message: '本当に削除しますか？',
};

export const propObj: { [key: string]: DeleteModalProps } = {
  default: defaultProps,
};
