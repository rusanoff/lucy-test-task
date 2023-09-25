import { ProductPayload } from '@/services/products/types';
import { ProductsListItem } from '@/components/pages/MainPage/ProductsList/ProductsListItem/ProductsListItem';

import styles from './ProductsList.module.scss';

type ProductsListProps = {
  products: ProductPayload[];
};

export const ProductsList = (props: ProductsListProps) => {
  const { products } = props;

  return (
    <ul className={styles.list}>
      {products.map((product) => {
        return (
          <ProductsListItem
            key={product.id}
            id={product.id}
            name={product.name}
            imageSrc={product.image}
            price={product.price}
            specialPrice={product.special}
          />
        );
      })}
    </ul>
  );
};
