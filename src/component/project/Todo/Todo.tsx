import { CreateModal } from '../CreateModal';
import { TodoProps } from './Todo.type';
export const baseId = 'project-todo';

export const Todo: React.FC<TodoProps> = ({ title }) => (
  <div className='p-7'>
    <h2 className='text-lg font-bold text-primary-800'>{title}</h2>
    <CreateModal />
  </div>
);
