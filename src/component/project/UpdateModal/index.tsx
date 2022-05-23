import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { UpdateModal as UpdateModalPresenter } from './UpdateModal';
import { UpdateModalProps, LogicProps } from './UpdateModal.type';
import { useUpdateModal } from '@/hook/useModal';
import { indexState } from '@/model';
import { formState } from '@/model/form';
import { updateState } from '@/model/modal';
import { todoState } from '@/model/todo';
import CrossImage from '~/img/cross.png';

const UpdateModal: React.FC = () => {
  const isOpen = useRecoilValue(updateState);
  const isForm = useRecoilValue(formState);
  const isTodo = useRecoilValue(todoState);
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
    const reqData = {
      id: isForm.id,
      title: isForm.title,
      task: isForm.task,
      checked: isForm.checked,
    };
    axios.put(`/api/todo/${reqData.id}`, { reqData });
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
  const defaultProps: UpdateModalProps = {
    image: {
      src: CrossImage,
      alt: 'cross',
      width: 20,
      height: 20,
    },
    title: 'タイトル',
    content: '内容',
    textarea: {
      row: 6,
    },
    button: {
      name: '更新',
    },
  };
  return <UpdateModalPresenter {...defaultProps} {...Data} />;
};

export { UpdateModal };
