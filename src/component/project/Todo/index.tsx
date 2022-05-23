import { Todo as TodoPresenter } from './Todo';
import { TodoProps } from './Todo.type';

const Todo: React.FC = () => {
  const defaultProps: TodoProps = {
    title: 'For what you wanna do !!',
  };
  return <TodoPresenter {...defaultProps} />;
};

export { Todo };
