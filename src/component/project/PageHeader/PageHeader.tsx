import Image from 'next/image';
import { PageHeaderProps } from './PageHeader.type';

export const PageHeader: React.FC<PageHeaderProps> = ({ logo }) => (
  <header className='bg-primary-800 py-5 px-7'>
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      data-testid='project-ph-image'
    />
  </header>
);
