import { ComponentMeta, Story } from '@storybook/react';
import { useRecoilValue, useSetRecoilState, RecoilRoot } from 'recoil';
import { TodoCard } from './TodoCard';
import { propObj } from './TodoCard.props';
import { TodoCardProps, LogicProps } from './TodoCard.type';
import { useCreateModal } from '@/hook/useModal';
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

  return <TodoCard {...args} {...LogicData} />;
};
export const Todo = Template.bind({});
Todo.args = propObj.todo;

export const Complete = Template.bind({});
Complete.args = propObj.complete;
