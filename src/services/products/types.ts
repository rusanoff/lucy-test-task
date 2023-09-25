import { HTMLString } from '@/types/common';

export type GetProductsRequest = {
  page?: number;
};

export type ProductPayload = {
  id: number;
  model: string;
  name: string;
  image: string;
  description: HTMLString;
  sizes: string[];
  price: string;
  special: string;
  priceInCents: number;
  specialInCents: number;
};

export type GetProductsResponse = {
  data: ProductPayload[];
  count: number;
  total: number;
  pageCount: number;
  page: number;
};
