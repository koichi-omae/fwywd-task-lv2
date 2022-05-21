import { ComponentMeta, Story } from '@storybook/react';
import { List } from './List';
import { propObj } from './List.props';
import { ListProps } from './List.type';

export default {
  title: 'molecule/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
