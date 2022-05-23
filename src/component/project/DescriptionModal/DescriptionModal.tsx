import Image from 'next/image';
import { DescriptionModalProps, LogicProps } from './DescriptionModal.type';

export const DescriptionModal: React.FC<DescriptionModalProps & LogicProps> = ({
  crossImage,
  btnName,
  isOpen,
  title,
  tasks,
  closeClick,
  updateClick,
}) =>
  isOpen === true ? (
    <div className='fixed top-0 left-0 flex w-full items-center justify-center overflow-x-auto overflow-y-auto bg-primary-50 bg-opacity-70 py-24'>
      <div className='w-80 rounded-md bg-white p-3 shadow-md shadow-primary-200'>
        <div className='mt-4 px-4 text-right'>
          <Image
            src={crossImage.src}
            alt={crossImage.alt}
            width={crossImage.width}
            height={crossImage.height}
            className='opacity-70 hover:cursor-pointer hover:opacity-100'
            onClick={closeClick}
          />
        </div>
        <div className='px-12'>
          <p className='text-base font-bold text-primary-800'>{title}</p>
          <ul className='my-8 list-disc text-sm font-bold text-primary-800'>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <div className='mb-14 text-right'>
            <button className='btn btn-green' onClick={updateClick}>
              {btnName}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
