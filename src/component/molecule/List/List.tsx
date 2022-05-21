import Image from 'next/image';
import { ListProps } from './List.type';

export const baseId = 'molecule-list';

export const List: React.FC<ListProps> = ({ title, image }) => (
  <div className='flex items-center gap-3'>
    <input type='checkbox' className='checkbox' data-testid='molecule-list-checkbox' />
    <p className='text-base font-bold text-primary-800' data-testid='molecule-list-title'>
      {title}
    </p>
    <Image
      data-testid='molecule-list-image'
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
  </div>
);
