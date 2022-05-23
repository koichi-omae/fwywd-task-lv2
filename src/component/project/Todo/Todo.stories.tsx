import { ComponentMeta, Story } from '@storybook/react';
import { Todo } from './Todo';
import { propObj } from './Todo.props';
import { TodoProps } from './Todo.type';

export default {
  title: 'Project/Todo',
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
