import { atom } from 'recoil';

interface FormProps {
  title: string;
  task: string;
  isComplete: boolean;
}

export const createState = atom<boolean>({
  key: 'createState',
  default: true,
});
