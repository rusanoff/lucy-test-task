import { GetProductsRequest, GetProductsResponse, ProductPayload } from '@/services/products/types';
import { apiServer } from '@/services/apiServer';

export const productsServerService = {
  getProducts: async (params?: GetProductsRequest) => {
    const response = await apiServer.get<GetProductsResponse>('/product', { params });

    return response.data;
  },

  getProductDetail: async (id: number) => {
    const response = await apiServer.get<ProductPayload>(`/product/${id}`);

    return response.data;
  },
};
