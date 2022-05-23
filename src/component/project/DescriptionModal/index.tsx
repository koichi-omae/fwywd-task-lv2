import { useRecoilValue } from 'recoil';
import { DescriptionModal as DescriptionModalPresenter } from './DescriptionModal';
import { DescriptionModalProps, LogicProps } from './DescriptionModal.type';
import { useDescriptionModal } from '@/hook/useModal';
import { formState } from '@/model/form';
import { descriptionState } from '@/model/modal';
import CrossImage from '~/img/cross.png';
/**
 * ロジックが存在しない（= Container が要らない）場合は 以下と置き換えてください。
 * 存在する場合はコメントアウト部分を全て削除して使ってください。
 */
/* 
export type { DescriptionModalProps };
export { DescriptionModalPresenter};
*/

const DescriptionModal: React.FC = () => {
  const isOpen = useRecoilValue(descriptionState);
  const { closeDescription } = useDescriptionModal();
  const isForm = useRecoilValue(formState);

  const Data: LogicProps = {
    isOpen: isOpen,
    title: isForm.title,
    tasks: isForm.task.split('\n'),
    closeClick: closeDescription,
    updateClick: closeDescription,
  };
  const defaultProps: DescriptionModalProps = {
    crossImage: {
      src: CrossImage,
      alt: 'cross',
      width: 20,
      height: 20,
    },
    btnName: '更新',
  };
  return <DescriptionModalPresenter {...defaultProps} {...Data} />;
};

export { DescriptionModal };
