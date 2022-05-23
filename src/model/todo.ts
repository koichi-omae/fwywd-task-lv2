import { atom } from 'recoil';
import { FormProps } from './form';

export const todoState = atom<FormProps[]>({
  key: 'todoState',
  default: [
    {
      title: 'title1',
      task: 'task1',
      isComplete: false,
    },
  ],
});
