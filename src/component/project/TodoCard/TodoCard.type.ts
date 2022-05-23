import { StaticImageData } from 'next/image';
import React from 'react';
import { FormProps } from '@/model/form';

export interface TodoCardProps {
  title: string;
  titleStyle: string;
  showList: boolean;
  addImage: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  crossImage: {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
}

export interface LogicProps {
  openCreate: () => void;
  isTodo: FormProps[];
  isComplete: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  openDescription: (i: number) => void;
}
