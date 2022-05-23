import Image from 'next/image';
import { UpdateModalProps, LogicProps } from './UpdateModal.type';

export const baseId = 'project-update-modal';

export const UpdateModal: React.FC<UpdateModalProps & LogicProps> = ({
  image,
  title,
  content,
  textarea,
  button,
  isOpen,
  closeUpdate,
  titleForm,
  taskForm,
  onUpdate,
}) =>
  isOpen ? (
    <div className='fixed top-0 left-0 flex w-full items-center justify-center overflow-x-auto overflow-y-auto bg-primary-50 bg-opacity-70 py-24'>
      <div className='w-80 rounded-md bg-white p-3 shadow-md shadow-primary-200'>
        <div className='mt-4 px-4 text-right'>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            onClick={closeUpdate}
            className='opacity-70 hover:cursor-pointer hover:opacity-100'
          />
        </div>
        <div className='px-12'>
          <p className='text-sm font-bold text-primary-800'>{title}</p>
          <input
            type='text'
            className='form form-green my-2.5'
            value={titleForm.title}
            onChange={(e) => titleForm.change(e)}
          />
          <p className='text-sm font-bold text-primary-800'>{content}</p>
          <textarea
            className='form form-green my-2.5 w-[200px]'
            rows={textarea.row}
            value={taskForm.task}
            onChange={(e) => taskForm.change(e)}
          />
          <div className='mb-14 text-right'>
            <button className='btn btn-green' onClick={onUpdate}>
              {button.name}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
