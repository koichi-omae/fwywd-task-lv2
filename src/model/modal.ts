import { atom } from 'recoil';

export const createState = atom<boolean>({
  key: 'createState',
  default: false,
});

export const descriptionState = atom<boolean>({
  key: 'descriptionState',
  default: false,
});
