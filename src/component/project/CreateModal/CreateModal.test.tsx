import { render, screen } from '@testing-library/react';
import { useRecoilValue } from 'recoil';
import { CreateModal, baseId } from './CreateModal';
import { propObj } from './CreateModal.props';
import { CreateModalProps, LogicProps } from './CreateModal.type';
import { useForm } from '@/hook/useForm';
import { useCreateModal } from '@/hook/useModal';
import { createState } from '@/model/modal';

let props: CreateModalProps;
let logicprops: LogicProps;

describe('component/project/CreateModal', () => {
  describe('default', () => {
    beforeEach(() => {
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
      logicprops = {
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
      props = propObj.default;
    });

    it('component/project/CreateModal の', () => {
      render(<CreateModal {...props} {...logicprops} />);
      expect(screen.getByTestId(baseId)).toBeInTheDocument();
    });
  });
});
