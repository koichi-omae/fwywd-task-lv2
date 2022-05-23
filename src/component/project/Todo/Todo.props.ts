import { TodoProps } from './Todo.type';

const defaultProps: TodoProps = { title: 'For what you wanna do !!' };

export const propObj: { [key: string]: TodoProps } = {
  default: defaultProps,
};
