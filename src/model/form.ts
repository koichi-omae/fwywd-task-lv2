import { atom } from 'recoil';

export interface FormProps {
  id?: number;
  title: string;
  task: string;
  isComplete: boolean;
}

export const formState = atom<FormProps>({
  key: 'formState',
  default: {
    title: '',
    task: '',
    isComplete: false,
  },
});
