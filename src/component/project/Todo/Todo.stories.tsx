import { ComponentMeta, Story } from '@storybook/react';
import { RecoilRoot } from 'recoil';
import { Todo } from './Todo';
import { propObj } from './Todo.props';
import { TodoProps } from './Todo.type';

export default {
  title: 'Project/Todo',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: Todo,
} as ComponentMeta<typeof Todo>;

const Template: Story<TodoProps> = (args) => <Todo {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
