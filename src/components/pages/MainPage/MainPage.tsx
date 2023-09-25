'use client';
import { PropsWithChildren, useState } from 'react';
import cn from 'classnames';

import { ProductPayload } from '@/services/products/types';
import { productsService } from '@/services/products/productsService';
import { ProductsList } from '@/components/pages/MainPage/ProductsList/ProductsList';
import { ProductsCountInfo } from '@/components/pages/MainPage/ProductsCountInfo/ProductsCountInfo';
import { Button } from '@/components/common/Button/Button';

import styles from './MainPage.module.scss';

type MainPageProps = PropsWithChildren<{
  preloadedProducts: ProductPayload[];
  productsTotalCount: number;
  productsShownCount: number;
}>;

export const MainPage = (props: MainPageProps) => {
  const { preloadedProducts, productsTotalCount, productsShownCount } = props;

  const [products, setProducts] = useState<ProductPayload[]>(preloadedProducts);
  const [productsShown, setProductsShown] = useState(productsShownCount);

  const handleShowMore = async () => {
    try {
      const { data } = await productsService.getProducts({ page: 2 });

      setProducts((prevProducts) => {
        return [...prevProducts, ...data];
      });
      setProductsShown((prevCount) => {
        return prevCount + data.length;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={cn('container', styles.content)}>
      <ProductsList products={products} />

      <div className={styles.centeredFlexRow}>
        <ProductsCountInfo
          totalCount={productsTotalCount}
          shownCount={productsShown}
        >
          <Button
            type="button"
            className={styles.button}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleShowMore}
            disabled={productsShown === productsTotalCount}
          >
            Show More
          </Button>
        </ProductsCountInfo>
      </div>
    </main>
  );
};
