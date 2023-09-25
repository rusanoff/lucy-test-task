export type CheckoutRequest = {
  products: Array<{
    id: number;
    size: string;
  }>;
};

export type CheckoutResponse = {
  orderId: number;
};
