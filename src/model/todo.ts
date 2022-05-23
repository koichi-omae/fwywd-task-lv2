import { atom } from 'recoil';
import { FormProps } from './form';

export const todoState = atom<FormProps[]>({
  key: 'todoState',
  default: [
    {
      title: 'title1',
      task: 'task1',
      checked: false,
    },
    {
      title: 'title2',
      task: 'task2',
      checked: true,
    },
  ],
});
