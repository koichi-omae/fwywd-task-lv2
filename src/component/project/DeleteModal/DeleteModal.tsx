import Image from 'next/image';
import { DeleteModalProps, LogicProps } from './DeleteModal.type';

export const baseId = 'project-delete-modal';

export const DeleteModal: React.FC<DeleteModalProps & LogicProps> = ({
  crossImage,
  message,
  isOpen,
  title,
  closeDelete,
  deleteTodo,
}) =>
  isOpen ? (
    <div className='fixed top-0 left-0 flex w-full items-center justify-center  bg-primary-50 bg-opacity-70 py-24'>
      <div className='w-80 rounded-md bg-white p-3 shadow-md shadow-primary-200'>
        <div className='mt-4 px-4 text-right'>
          <Image
            src={crossImage.src}
            alt={crossImage.alt}
            width={crossImage.width}
            height={crossImage.height}
            className='opacity-70 hover:cursor-pointer hover:opacity-100'
            onClick={closeDelete}
          />
        </div>
        <div className='px-12'>
          <p className='text-base font-bold text-primary-800'>{title}</p>
          <p className='my-8 text-sm font-bold text-primary-800'>{message}</p>
          <div className='mb-14 text-center'>
            <button className='btn btn-green mr-2' onClick={closeDelete}>
              キャンセル
            </button>
            <button className='btn btn-pink' onClick={deleteTodo}>
              削除
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
