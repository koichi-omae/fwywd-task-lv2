import { useState } from 'react';

interface FormProps {
  id?: number;
  title: string;
  task: string;
  checked: boolean;
}

export const useForm = () => {
  const [isForm, setForm] = useState<FormProps>({ title: '', task: '', checked: false });
  return { isForm, setForm };
};
