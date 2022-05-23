import { ComponentMeta, Story } from '@storybook/react';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { DeleteModal } from './DeleteModal';
import { propObj } from './DeleteModal.props';
import { DeleteModalProps, LogicProps } from './DeleteModal.type';
import { useDeleteModal } from '@/hook/useModal';
import { indexState } from '@/model';
import { formState } from '@/model/form';
import { deleteState } from '@/model/modal';
import { todoState } from '@/model/todo';

export default {
  title: 'Project/DeleteModal',
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: Story<DeleteModalProps> = (args) => {
  const isOpen = useRecoilValue(deleteState);
  const isForm = useRecoilValue(formState);
  const isIndex = useRecoilValue(indexState);
  const setIndex = useSetRecoilState(indexState);
  const setTodo = useSetRecoilState(todoState);
  const { closeDelete } = useDeleteModal();

  const handleDelete = () => {
    setTodo((prevTodo) => {
      const deleteTodo = [...prevTodo];
      deleteTodo.splice(isIndex, 1);
      return deleteTodo;
    });
    setIndex(0);
    closeDelete();
  };

  const Data: LogicProps = {
    isOpen: isOpen,
    title: isForm.title,
    closeDelete: closeDelete,
    deleteTodo: handleDelete,
  };

  return <DeleteModal {...args} {...Data} />;
};

export const Default = Template.bind({});
Default.args = propObj.default;
