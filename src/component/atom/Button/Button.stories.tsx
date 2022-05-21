import { ComponentMeta, Story } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'atom/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story = (args) => <Button {...args} />;

export const Green = Template.bind({});
Green.args = { children: <span className='btn btn-green'>btn btn-green</span> };

export const Pink = Template.bind({});
Pink.args = {
  children: <span className='btn btn-pink'>btn btn-yellow</span>,
};
