import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { CreateModal } from './CreateModal';
import { propObj } from './CreateModal.props';
import { CreateModalProps, LogicProps } from './CreateModal.type';
import { useForm } from '@/hook/useForm';
import { useCreateModal } from '@/hook/useModal';
import { createState } from '@/model/modal';

export default {
  title: 'Project/CreateModal',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: CreateModal,
} as ComponentMeta<typeof CreateModal>;

const Template: Story<CreateModalProps & LogicProps> = (args) => {
  const isOpen = useRecoilValue(createState);
  const { closeCreate } = useCreateModal();
  const { isForm, setForm } = useForm();
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...isForm, title: e.target.value });
  };
  const changeTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...isForm, task: e.target.value });
  };
  const handleCreate = () => {
    closeCreate();
    setForm({ ...isForm, title: '', task: '', isComplete: false });
  };

  const LogicData: LogicProps = {
    isOpen: isOpen,
    onClose: closeCreate,
    titleForm: {
      title: isForm.title,
      change: changeTitle,
    },
    taskForm: {
      task: isForm.task,
      change: changeTask,
    },
    onCreate: handleCreate,
  };

  return <CreateModal {...args} {...LogicData} />;
};

export const Default = Template.bind({});
Default.args = propObj.default;
