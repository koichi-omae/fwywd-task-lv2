import { ComponentMeta, Story } from '@storybook/react';
import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil';
import { TodoCard } from './TodoCard';
import { propObj } from './TodoCard.props';
import { TodoCardProps, LogicProps } from './TodoCard.type';
import { useCreateModal, useDescriptionModal, useDeleteModal } from '@/hook/useModal';
import { formState } from '@/model/form';
import { todoState } from '@/model/todo';

export default {
  title: 'Project/TodoCard',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: TodoCard,
} as ComponentMeta<typeof TodoCard>;

const Template: Story<TodoCardProps & LogicProps> = (args) => {
  const { openCreate } = useCreateModal();
  const { openDescription } = useDescriptionModal();
  const { openDelete } = useDeleteModal();
  const isTodo = useRecoilValue(todoState);
  const setForm = useSetRecoilState(formState);
  const setTodo = useSetRecoilState(todoState);

  const handleComplete = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setTodo((prevTodo) => {
      const completeTodo = [...prevTodo];
      completeTodo[index] = { ...completeTodo[index], isComplete: e.target.checked };
      return completeTodo;
    });
  };

  const handleDescription = (i: number) => {
    setForm(isTodo[i]);
    openDescription;
  };

  const handleDelete = (i: number) => {
    setForm(isTodo[i]);
    openDelete;
  };

  const LogicData: LogicProps = {
    openCreate: openCreate,
    isTodo: isTodo,
    isComplete: handleComplete,
    openDescription: handleDescription,
    openDelete: handleDelete,
  };

  return <TodoCard {...args} {...LogicData} />;
};
export const Todo = Template.bind({});
Todo.args = propObj.todo;

export const Complete = Template.bind({});
Complete.args = propObj.complete;
