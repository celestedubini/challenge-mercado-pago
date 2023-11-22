import React, { ReactNode } from 'react';
import { textTags } from './Text.config';

type TextProps = {
  tag?: (typeof textTags)[number];
  className?: string;
  children: ReactNode;
};

function Text({ tag: Tag = 'span', children, className }: TextProps) {
  return <Tag className={className}>{children}</Tag>;
}

export default Text;
