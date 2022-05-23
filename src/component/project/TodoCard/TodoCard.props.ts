import { TodoCardProps } from './TodoCard.type';
import AddImage from '~/img/add.png';
import CrossImage from '~/img/cross.png';

const todoProps: TodoCardProps = {
  title: 'TO DO',
  titleStyle: 'tag tag-green absolute -top-3',
  showList: false,
  addImage: {
    src: AddImage,
    alt: 'add',
    width: 30,
    height: 30,
  },
  crossImage: {
    src: CrossImage,
    alt: 'cross',
    width: 16,
    height: 16,
  },
};

const completeProps: TodoCardProps = {
  title: 'COMPLETE',
  titleStyle: 'tag tag-pink absolute -top-3',
  showList: true,
  addImage: {
    src: AddImage,
    alt: 'add',
    width: 30,
    height: 30,
  },
  crossImage: {
    src: CrossImage,
    alt: 'cross',
    width: 16,
    height: 16,
  },
};

export const propObj: { [key: string]: TodoCardProps } = {
  todo: todoProps,
  complete: completeProps,
};
