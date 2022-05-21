import { ComponentMeta, Story } from '@storybook/react';
import { Form } from './Form';

export default {
  title: 'atom/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: Story = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <input type='text' placeholder='form form-green' className='form form-green'></input>,
};
