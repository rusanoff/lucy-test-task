import { ProductPayload } from '@/services/products/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CheckoutState = {
  products: ProductPayload[];
};

const initialState: CheckoutState = {
  products: [],
};

const NOT_FOUND_INDEX = -1;

const checkoutSlice = createSlice({
  initialState,
  name: 'checkout',
  reducers: {
    addProduct: (state, { payload }: PayloadAction<ProductPayload>) => {
      state.products.push(payload);
    },
    removeProduct: (state, { payload: id }: PayloadAction<number>) => {
      const removingProductIndex = state.products.findIndex((product) => {
        return product.id === id;
      });

      if (removingProductIndex !== NOT_FOUND_INDEX) {
        state.products.splice(removingProductIndex, 1);
      }
    },
  },
});

export const { addProduct, removeProduct } = checkoutSlice.actions;

export const checkoutReducer = checkoutSlice.reducer;
