import Image from 'next/image';
import { IconProps } from './Icon.type';
import AddImage from '~/img/add.png';
import CrossImage from '~/img/cross.png';
import LogoImage from '~/img/logo.png';

export const Icon: React.FC<IconProps> = ({ type, width = 50, height = 50 }) => {
  switch (type) {
    case 'logo':
      return <Image alt={type} src={LogoImage} width={width} height={height} />;
    case 'add':
      return (
        <Image
          alt={type}
          src={AddImage}
          width={width}
          height={height}
          className='opacity-70 hover:opacity-100'
        />
      );
    case 'cross':
      return (
        <Image
          alt={type}
          src={CrossImage}
          width={width}
          height={height}
          className='opacity-70 hover:opacity-100'
        />
      );
  }
};
