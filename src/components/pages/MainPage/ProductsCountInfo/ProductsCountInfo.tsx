import { PropsWithChildren } from 'react';

import styles from './ProductsCountInfo.module.scss';

type ProductsCountInfoProps = PropsWithChildren<{
  totalCount: number;
  shownCount: number;
}>;

export const ProductsCountInfo = (props: ProductsCountInfoProps) => {
  const { totalCount, shownCount, children } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.data}>
        Showing 1 to {shownCount} of {totalCount} products
      </div>

      {children}
    </div>
  );
};
