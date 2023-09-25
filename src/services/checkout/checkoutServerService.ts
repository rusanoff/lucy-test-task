import { apiServer } from '@/services/apiServer';
import { CheckoutRequest, CheckoutResponse } from '@/services/checkout/types';

export const checkoutServerService = {
  createCheckout: async (data: CheckoutRequest) => {
    const response = await apiServer.post<CheckoutResponse>('/checkout/placeOrder', data);

    return response.data;
  },
};
