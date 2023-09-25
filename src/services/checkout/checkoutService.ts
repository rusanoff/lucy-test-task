import { api } from '@/services/api';
import { CheckoutRequest, CheckoutResponse } from '@/services/checkout/types';

export const checkoutService = {
  createCheckout: async (data: CheckoutRequest) => {
    const response = await api.post<CheckoutResponse>('/checkout/placeOrder', data);

    return response.data;
  },
};
