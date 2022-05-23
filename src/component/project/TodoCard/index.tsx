import { useRecoilValue, useSetRecoilState } from 'recoil';
import { TodoCard as TodoCardPresenter } from './TodoCard';
import { TodoCardProps, LogicProps } from './TodoCard.type';
import { useCreateModal, useDescriptionModal, useDeleteModal } from '@/hook/useModal';
import { indexState } from '@/model';
import { formState } from '@/model/form';
import { todoState } from '@/model/todo';
import AddImage from '~/img/add.png';
import CrossImage from '~/img/cross.png';

const TodoCard: React.FC = () => {
  const { openCreate } = useCreateModal();
  const { openDescription } = useDescriptionModal();
  const { openDelete } = useDeleteModal();
  const isTodo = useRecoilValue(todoState);
  const setIndex = useSetRecoilState(indexState);
  const setForm = useSetRecoilState(formState);
  const setTodo = useSetRecoilState(todoState);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTodo((prevTodo) => {
      const completeTodo = [...prevTodo];
      completeTodo[index] = { ...completeTodo[index], isComplete: e.target.checked };
      return completeTodo;
    });
  };

  const handleDescription = (index: number) => {
    setIndex(index);
    setForm(isTodo[index]);
    openDescription();
  };
  const handleDelete = (i: number) => {
    setForm(isTodo[i]);
    openDelete();
  };
  const LogicData: LogicProps = {
    openCreate: openCreate,
    isTodo: isTodo,
    isComplete: handleComplete,
    openDescription: handleDescription,
    openDelete: handleDelete,
  };

  const defaultProps: TodoCardProps = {
    title: 'TO DO',
    titleStyle: 'tag tag-green absolute -top-3',
    showList: false,
    addImage: {
      src: AddImage,
      alt: 'add',
      width: 30,
      height: 30,
    },
    crossImage: {
      src: CrossImage,
      alt: 'cross',
      width: 16,
      height: 16,
    },
  };
  return <TodoCardPresenter {...defaultProps} {...LogicData} />;
};

const CompleteCard: React.FC = () => {
  const { openCreate } = useCreateModal();
  const { openDescription } = useDescriptionModal();
  const { openDelete } = useDeleteModal();
  const isTodo = useRecoilValue(todoState);
  const setIndex = useSetRecoilState(indexState);
  const setForm = useSetRecoilState(formState);
  const setTodo = useSetRecoilState(todoState);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTodo((prevTodo) => {
      const completeTodo = [...prevTodo];
      completeTodo[index] = { ...completeTodo[index], isComplete: e.target.checked };
      return completeTodo;
    });
  };

  const handleDescription = (index: number) => {
    setIndex(index);
    setForm(isTodo[index]);
    openDescription();
  };

  const LogicData: LogicProps = {
    openCreate: openCreate,
    isTodo: isTodo,
    isComplete: handleComplete,
    openDescription: handleDescription,
    openDelete: openDelete,
  };

  const defaultProps: TodoCardProps = {
    title: 'Complete',
    titleStyle: 'tag tag-pink absolute -top-3',
    showList: true,
    addImage: {
      src: AddImage,
      alt: 'add',
      width: 30,
      height: 30,
    },
    crossImage: {
      src: CrossImage,
      alt: 'cross',
      width: 16,
      height: 16,
    },
  };
  return <TodoCardPresenter {...defaultProps} {...LogicData} />;
};

export { TodoCard, CompleteCard };
