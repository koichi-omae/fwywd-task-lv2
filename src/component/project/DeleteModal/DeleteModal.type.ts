import { StaticImageData } from 'next/image';

export interface DeleteModalProps {
  crossImage: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  message: string;
}

export interface LogicProps {
  isOpen: boolean;
  title: string;
  closeDelete: () => void;
  deleteTodo: () => void;
}
