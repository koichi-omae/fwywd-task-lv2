import { ComponentMeta, Story } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { propObj } from './PageHeader.props';
import { PageHeaderProps } from './PageHeader.type';

export default {
  title: 'Project/PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: Story<PageHeaderProps> = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = propObj.default;
