'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { withReduxProvider } from '@/HOCs/withReduxProvider';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Icon } from '@/components/common/Icon/Icon';

import styles from './CartLink.module.scss';

const CartLinkComponent = () => {
  const { products } = useAppSelector((state) => {
    return state.checkout;
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Link
      href="/cart"
      className={styles.link}
    >
      <span className={styles.link}>
        <Icon
          type="cart"
          width={32}
          height={32}
        />

        {isMounted && products.length > 0 && <span className={styles.badge}>{products.length}</span>}
      </span>
    </Link>
  );
};

export const CartLink = withReduxProvider(CartLinkComponent);
