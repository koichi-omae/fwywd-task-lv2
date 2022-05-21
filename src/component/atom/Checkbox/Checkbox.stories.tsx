import { ComponentMeta, Story } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'atom/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: Story = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <input type='checkbox' className='checkbox' />,
};
