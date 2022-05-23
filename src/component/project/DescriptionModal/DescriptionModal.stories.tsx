import { ComponentMeta, Story } from '@storybook/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { DescriptionModal } from './DescriptionModal';
import { propObj } from './DescriptionModal.props';
import { DescriptionModalProps, LogicProps } from './DescriptionModal.type';
import { useDescriptionModal } from '@/hook/useModal';
import { formState } from '@/model/form';
import { descriptionState } from '@/model/modal';

export default {
  title: 'Project/DescriptionModal',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: DescriptionModal,
} as ComponentMeta<typeof DescriptionModal>;

const Template: Story<DescriptionModalProps & LogicProps> = (args) => {
  const isOpen = useRecoilValue(descriptionState);
  const { closeDescription } = useDescriptionModal();
  const isForm = useRecoilValue(formState);

  const Data: LogicProps = {
    isOpen: isOpen,
    title: isForm.title,
    tasks: isForm.task.split('\n'),
    closeClick: closeDescription,
    updateClick: closeDescription,
  };
  return <DescriptionModal {...args} {...Data} />;
};

export const Default = Template.bind({});
Default.args = propObj.default;
