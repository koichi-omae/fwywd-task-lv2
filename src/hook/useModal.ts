import { useSetRecoilState } from 'recoil';
import { createState, descriptionState } from '@/model/modal';

export const useCreateModal = () => {
  const setCreate = useSetRecoilState(createState);

  const openCreate = () => setCreate(true);
  const closeCreate = () => setCreate(false);

  return { openCreate, closeCreate };
};

export const useDescriptionModal = () => {
  const setDescription = useSetRecoilState(descriptionState);

  const openDescription = () => setDescription(true);
  const closeDescription = () => setDescription(false);

  return { openDescription, closeDescription };
};
