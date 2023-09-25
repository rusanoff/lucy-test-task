import { api } from '@/services/api';
import { GetProductsRequest, GetProductsResponse } from '@/services/products/types';

export const productsService = {
  getProducts: async (params?: GetProductsRequest) => {
    const response = await api.get<GetProductsResponse>('/product', { params });

    return response.data;
  },
};
