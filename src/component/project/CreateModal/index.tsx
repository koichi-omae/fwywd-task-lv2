import { useRecoilValue } from 'recoil';
import { CreateModal as CreateModalPresenter } from './CreateModal';
import { CreateModalProps } from './CreateModal.type';
import { useCreateModal } from '@/hook/useModal';
import { createState } from '@/model/modal';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { CreateModalProps };
export { CreateModalPresentern};
*/

const CreateModal: React.FC = () => {
  const isOpen = useRecoilValue(createState);
  const { closeCreate } = useCreateModal();
  const defaultProps: CreateModalProps = {};
  return <CreateModalPresenter {...defaultProps} />;
};

export { CreateModal };
