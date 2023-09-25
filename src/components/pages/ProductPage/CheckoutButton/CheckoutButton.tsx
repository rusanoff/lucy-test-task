'use client';
import { useEffect, useState } from 'react';

import { ProductPayload } from '@/services/products/types';
import { withReduxProvider } from '@/HOCs/withReduxProvider';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addProduct } from '@/store/slices/checkoutSlice';
import { Button } from '@/components/common/Button/Button';

import styles from '@/components/pages/ProductPage/ProductPage.module.scss';

type CheckoutButtonProps = {
  product: ProductPayload;
};

const CheckoutButtonComponent = (props: CheckoutButtonProps) => {
  const { product } = props;

  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => {
    return state.checkout;
  });

  const [isMounted, setIsMounted] = useState(false);

  const isProductInCart = products.some((item) => {
    return item.id === product.id;
  });

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Button
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={isMounted && isProductInCart}
    >
      Add to Order
    </Button>
  );
};

export const CheckoutButton = withReduxProvider(CheckoutButtonComponent);
