import { StaticImageData } from 'next/image';

export interface DescriptionModalProps {
  crossImage: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  btnName: string;
}

export interface LogicProps {
  isOpen: boolean;
  title: string;
  tasks: string[];
  closeClick: () => void;
  updateClick: () => void;
}
