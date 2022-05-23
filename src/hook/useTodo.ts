import { useSetRecoilState, useRecoilState } from 'recoil';
import { formState } from '@/model/form';
import { todoState } from '@/model/todo';

export const useTodo = () => {
  const [isTodo, setTodo] = useRecoilState(todoState);
  return { isTodo, setTodo };
};
