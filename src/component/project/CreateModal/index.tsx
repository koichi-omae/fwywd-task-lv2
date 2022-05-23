import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateModal as CreateModalPresenter } from './CreateModal';
import { CreateModalProps, LogicProps } from './CreateModal.type';
import { useForm } from '@/hook/useForm';
import { useCreateModal } from '@/hook/useModal';
import { createState } from '@/model/modal';
import { todoState } from '@/model/todo';
import CrossImage from '~/img/cross.png';

const CreateModal: React.FC = () => {
  const isOpen = useRecoilValue(createState);
  const setTodo = useSetRecoilState(todoState);
  const { closeCreate } = useCreateModal();
  const { isForm, setForm } = useForm();

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...isForm, title: e.target.value });
  };

  const changeTask = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...isForm, task: e.target.value });
  };

  const handleCreate = () => {
    setTodo((prevTodo) => [...prevTodo, isForm]);
    const data = isForm;
    axios.post('/api/todo', { data });
    setForm({ ...isForm, title: '', task: '', checked: false });
    closeCreate();
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
  const defaultProps: CreateModalProps = {
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
      name: '新規作成',
    },
  };
  return <CreateModalPresenter {...defaultProps} {...LogicData} />;
};

export { CreateModal };
