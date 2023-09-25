import React from 'react';

import { ProductPayload } from '@/services/products/types';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { CartProductsListItem } from '@/components/pages/CartPage/ProductsList/ProductsListItem/CartProductsListItem';
import { removeProduct } from '@/store/slices/checkoutSlice';

import styles from './CartProductsList.module.scss';

type CartProductsListProps = {
  products: ProductPayload[];
};

export const CartProductsList = (props: CartProductsListProps) => {
  const { products } = props;

  const dispatch = useAppDispatch();

  const handleDeleteProduct = (id: number) => {
    return () => {
      dispatch(removeProduct(id));
    };
  };

  return (
    <ul className={styles.list}>
      {products.map((product) => {
        return (
          <CartProductsListItem
            key={product.id}
            id={product.id}
            name={product.name}
            imageSrc={product.image}
            price={product.price}
            specialPrice={product.special}
            onDelete={handleDeleteProduct(product.id)}
          />
        );
      })}
    </ul>
  );
};
