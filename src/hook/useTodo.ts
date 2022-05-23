import { useRecoilState } from 'recoil';
import { todoState } from '@/model/todo';

export const useTodo = () => {
  const [isTodo, setTodo] = useRecoilState(todoState);
  return { isTodo, setTodo };
};
