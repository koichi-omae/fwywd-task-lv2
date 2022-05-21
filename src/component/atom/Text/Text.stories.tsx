import { ComponentMeta, Story } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'atom/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: Story = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: <span className='text-primary-800'>text-primary-800</span> };

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  children: <span className='text-xs'>text-xs</span>,
};

export const Small = Template.bind({});
Small.args = {
  children: <span className='text-sm'>text-sm</span>,
};

export const Base = Template.bind({});
Base.args = {
  children: <span className='text-base'>text-base</span>,
};

export const Large = Template.bind({});
Large.args = {
  children: <span className='text-lg'>text-lg</span>,
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  children: <span className='text-xl'>text-xl</span>,
};

export const ExtraLarge2 = Template.bind({});
ExtraLarge2.args = {
  children: <span className='text-2xl'>text-2xl</span>,
};
