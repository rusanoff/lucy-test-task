'use client';
import { useEffect, useState } from 'react';

import { HTMLString } from '@/types/common';
import { decodeHtml } from '@/helpers/decodeHtml';

type ProductDescriptionProps = {
  content: HTMLString;
};

export const ProductDescription = (props: ProductDescriptionProps) => {
  const { content } = props;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <div dangerouslySetInnerHTML={{ __html: decodeHtml(content) }} />;
};
