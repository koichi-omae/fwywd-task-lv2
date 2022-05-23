import { ComponentMeta, Story } from '@storybook/react';
import React from 'react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { UpdateModal } from './UpdateModal';
import { propObj } from './UpdateModal.props';
import { UpdateModalProps, LogicProps } from './UpdateModal.type';
import { useUpdateModal } from '@/hook/useModal';
import { indexState } from '@/model';
import { formState } from '@/model/form';
import { updateState } from '@/model/modal';
import { todoState } from '@/model/todo';

export default {
  title: 'Project/UpdateModal',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: UpdateModal,
} as ComponentMeta<typeof UpdateModal>;

const Template: Story<UpdateModalProps & LogicProps> = (args) => {
  const isOpen = useRecoilValue(updateState);
  const isForm = useRecoilValue(formState);
  const isIndex = useRecoilValue(indexState);
  const setIndex = useSetRecoilState(indexState);
  const setForm = useSetRecoilState(formState);
  const setTodo = useSetRecoilState(todoState);

  const { closeUpdate } = useUpdateModal();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...isForm, title: e.target.value });
  };

  const changeTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...isForm, task: e.target.value });
  };

  const updateTodo = () => {
    setTodo((prevTodo) => {
      const updateTodo = [...prevTodo];
      updateTodo.splice(isIndex, 1, {
        title: isForm.title,
        task: isForm.task,
        checked: isForm.checked,
      });
      return updateTodo;
    });
    setIndex(0);
    closeUpdate();
  };

  const Data: LogicProps = {
    isOpen: isOpen,
    closeUpdate: closeUpdate,
    titleForm: {
      title: isForm.title,
      change: changeTitle,
    },
    taskForm: {
      task: isForm.task,
      change: changeTask,
    },
    onUpdate: updateTodo,
  };

  return <UpdateModal {...args} {...Data} />;
};

export const Default = Template.bind({});
Default.args = propObj.default;
