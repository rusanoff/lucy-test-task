'use client';
import { HTMLString } from '@/types/common';

export const decodeHtml = (htmlString: HTMLString) => {
  const element = document.createElement('div');

  element.innerHTML = htmlString;

  return element.childNodes.length === 0 ? '' : element.childNodes[0].nodeValue || '';
};
