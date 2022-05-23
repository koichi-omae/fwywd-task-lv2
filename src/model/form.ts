import { atom } from 'recoil';

export interface FormProps {
  id?: number;
  title: string;
  task: string;
  checked: boolean;
}

export const formState = atom<FormProps>({
  key: 'formState',
  default: {
    title: '',
    task: '',
    checked: false,
  },
});
