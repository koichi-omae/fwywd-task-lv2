import { useSetRecoilState } from 'recoil';
import { createState } from '@/model/modal';

export const useCreateModal = () => {
  const setCreate = useSetRecoilState(createState);

  const openCreate = () => setCreate(true);
  const closeCreate = () => setCreate(false);

  return { openCreate, closeCreate };
};
