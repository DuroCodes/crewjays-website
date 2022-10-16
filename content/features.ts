import React from 'react';
import {
  ThumbUpIcon,
  MapIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline';
import { IconType } from '../components/Icons';

export type Feature = {
  name: string;
  description: React.ReactNode;
  Icon: IconType;
  page: 'all' | 'home' | 'docs';
};

export type Features = Feature[];

const FEATURES: Features = [
  {
    name: 'Embed Creator',
    description: 'We make it easy for you to create an embed.',
    Icon: PencilAltIcon,
    page: 'all',
  },
  {
    name: '8 Ball',
    description: 'We have an 8-ball command to ask a question to the magic 8-ball.',
    Icon: QuestionMarkCircleIcon,
    page: 'home',
  },
  {
    name: 'Verification System',
    description: 'Protect your server against spam and raids with our verification system.',
    Icon: CheckCircleIcon,
    page: 'all',
  },
];

export const DOCS_FEATURES = FEATURES.filter(
  (f) => f.page === 'docs' || f.page === 'all',
);

export const HOME_FEATURES = FEATURES.filter(
  (f) => f.page === 'home' || f.page === 'all',
);

export default FEATURES;
