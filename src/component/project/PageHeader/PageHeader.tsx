import Image from 'next/image';
import { PageHeaderProps } from './PageHeader.type';

export const baseId = 'project-page-header';

export const PageHeader: React.FC<PageHeaderProps> = ({ logoImage }) => (
  <header className='bg-primary-800 py-5 px-7'>
    <Image
      src={logoImage.src}
      alt={logoImage.alt}
      width={logoImage.width}
      height={logoImage.height}
      data-testid={baseId}
    />
  </header>
);
