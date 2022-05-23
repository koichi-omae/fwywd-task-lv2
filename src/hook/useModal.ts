import { useSetRecoilState } from 'recoil';
import { createState, descriptionState, updateState, deleteState } from '@/model/modal';

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

export const useUpdateModal = () => {
  const setUpdate = useSetRecoilState(updateState);

  const openUpdate = () => setUpdate(true);
  const closeUpdate = () => setUpdate(false);

  return { openUpdate, closeUpdate };
};

export const useDeleteModal = () => {
  const setDelete = useSetRecoilState(deleteState);

  const openDelete = () => setDelete(true);
  const closeDelete = () => setDelete(false);

  return { openDelete, closeDelete };
};
