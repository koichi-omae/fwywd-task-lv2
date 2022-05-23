import { atom } from 'recoil';

export const createState = atom<boolean>({
  key: 'createState',
  default: true,
});
