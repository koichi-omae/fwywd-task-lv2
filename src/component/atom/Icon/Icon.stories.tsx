import { ComponentMeta, Story } from '@storybook/react';
import { Icon } from './Icon';
import { IconProps } from './Icon.type';

export default {
  title: 'atom/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Logo = Template.bind({});
Logo.args = { type: 'logo', width: 156, height: 60 };

export const Add = Template.bind({});
Add.args = { type: 'add', width: 50, height: 50 };

export const Cross = Template.bind({});
Cross.args = { type: 'cross', width: 50, height: 50 };
