'use client';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/hooks/useAppSelector';
import { withReduxProvider } from '@/HOCs/withReduxProvider';
import { CartProductsList } from '@/components/pages/CartPage/ProductsList/CartProductsList';
import { Checkout } from '@/components/pages/CartPage/Checkout/Checkout';

import styles from './CartPage.module.scss';

export const CartPageComponent = () => {
  const { products } = useAppSelector((state) => {
    return state.checkout;
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.productsWrapper}>
        <CartProductsList products={products} />
      </div>

      <div className={styles.checkoutWrapper}>
        <Checkout products={products} />
      </div>
    </section>
  );
};

export const CartPage = withReduxProvider(CartPageComponent);
