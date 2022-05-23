import { StaticImageData } from 'next/image';
import React from 'react';

export interface CreateModalProps {
  image: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  content: string;
  textarea: {
    row: number;
  };
  button: {
    name: string;
  };
}

export interface LogicProps {
  isOpen: boolean;
  onClose: () => void;
  titleForm: {
    title: string;
    change: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  taskForm: {
    task: string;
    change: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
  onCreate: () => void;
}
