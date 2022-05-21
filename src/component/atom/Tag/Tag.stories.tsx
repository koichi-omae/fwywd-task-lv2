import { ComponentMeta, Story } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'atom/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: Story = (args) => <Tag {...args} />;

export const Green = Template.bind({});
Green.args = { children: <span className='tag tag-green'>tag tag-green</span> };

export const Pink = Template.bind({});
Pink.args = { children: <span className='tag tag-pink'>tag tag-green</span> };
