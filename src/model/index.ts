import { atom } from 'recoil';

export const indexState = atom<number>({
  key: 'indexState',
  default: 0,
});
