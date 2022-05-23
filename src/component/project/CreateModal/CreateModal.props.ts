import React, { useState } from 'react';
import { CreateModalProps } from './CreateModal.type';
import { useCreateModal } from '@/hook/useModal';
import CrossImage from '~/img/cross.png';

export const propObj: { [key: string]: CreateModalProps } = {
  default: {
    image: {
      src: CrossImage,
      alt: 'cross',
      width: 20,
      height: 20,
    },
    title: 'タイトル',
    content: '内容',
    textarea: {
      row: 6,
    },
    button: {
      name: '新規作成',
    },
  },
};
