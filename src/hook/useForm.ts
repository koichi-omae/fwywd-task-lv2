import { useState } from 'react';

interface FormProps {
  id?: number;
  title: string;
  task: string;
  isComplete: boolean;
}

export const useForm = () => {
  const [isForm, setForm] = useState<FormProps>({ title: '', task: '', isComplete: false });
  return { isForm, setForm };
};
