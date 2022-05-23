import { useRecoilValue, useSetRecoilState } from 'recoil';
import { TodoCard as TodoCardPresenter } from './TodoCard';
import { TodoCardProps, LogicProps } from './TodoCard.type';
import { useCreateModal } from '@/hook/useModal';
import { todoState } from '@/model/todo';
import AddImage from '~/img/add.png';
import CrossImage from '~/img/cross.png';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { TodoCardProps };
export { TodoCardPresenter};
*/

const TodoCard: React.FC = () => {
  const { openCreate } = useCreateModal();
  const isTodo = useRecoilValue(todoState);
  const setTodo = useSetRecoilState(todoState);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTodo((prevTodo) => {
      const completeTodo = [...prevTodo];
      completeTodo[index] = { ...completeTodo[index], isComplete: e.target.checked };
      return completeTodo;
    });
  };

  const LogicData: LogicProps = {
    openCreate: openCreate,
    isTodo: isTodo,
    isComplete: handleComplete,
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
  const isTodo = useRecoilValue(todoState);
  const setTodo = useSetRecoilState(todoState);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTodo((prevTodo) => {
      const completeTodo = [...prevTodo];
      completeTodo[index] = { ...completeTodo[index], isComplete: e.target.checked };
      return completeTodo;
    });
  };

  const LogicData: LogicProps = {
    openCreate: openCreate,
    isTodo: isTodo,
    isComplete: handleComplete,
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
