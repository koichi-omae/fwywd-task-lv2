import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DeleteModal as DeleteModalPresenter } from './DeleteModal';
import { DeleteModalProps, LogicProps } from './DeleteModal.type';
import { useDeleteModal } from '@/hook/useModal';
import { indexState } from '@/model';
import { formState } from '@/model/form';
import { deleteState } from '@/model/modal';
import { todoState } from '@/model/todo';
import CrossImage from '~/img/cross.png';

/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { DeleteModalProps };
export { DeleteModalPresenter};
*/

const DeleteModal: React.FC = () => {
  const isOpen = useRecoilValue(deleteState);
  const isForm = useRecoilValue(formState);
  const isTodo = useRecoilValue(todoState);
  const isIndex = useRecoilValue(indexState);
  const setIndex = useSetRecoilState(indexState);
  const setTodo = useSetRecoilState(todoState);
  const { closeDelete } = useDeleteModal();

  const handleDelete = () => {
    const id = isTodo[isIndex].id;
    setTodo((prevTodo) => {
      const deleteTodo = [...prevTodo];
      deleteTodo.splice(isIndex, 1);
      return deleteTodo;
    });
    axios.delete(`/api/todo/${id}`, { data: { id: id } });
    setIndex(0);
    closeDelete();
  };

  const Data: LogicProps = {
    isOpen: isOpen,
    title: isForm.title,
    closeDelete: closeDelete,
    deleteTodo: handleDelete,
  };
  const defaultProps: DeleteModalProps = {
    crossImage: {
      src: CrossImage,
      alt: 'cross',
      width: 20,
      height: 20,
    },
    message: '本当に削除しますか？',
  };
  return <DeleteModalPresenter {...defaultProps} {...Data} />;
};

export { DeleteModal };
