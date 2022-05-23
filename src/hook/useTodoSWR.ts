import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';

interface TodoProps {
  id: number;
  title: string;
  task: string;
  checked: boolean;
}

export const useTodoSWR = () => {
  // 非同期処理の疑似的に再現
  const fetcher = (url: string) => axios.get(url).then((res) => res.data as TodoProps[]);

  const { data: isData } = useSWR('/api/todo', fetcher);

  const setter = useCompleted();

  return { isData, ...setter };
};

export const useCompleted = () => {
  const { mutate } = useSWRConfig();

  const changeCheck = (i: number, check: boolean): void => {
    mutate('/api/todo', (isData: TodoProps[]) => {
      if (isData !== undefined) {
        isData[i].checked = check;
        const reqData = isData[i];
        axios.put(`/api/todo/${reqData.id}`, { reqData });
        return isData;
      }
    });
  };

  return { changeCheck };
};
