import cn from 'classnames';

import { ProductPayload } from '@/services/products/types';
import { ProductCard } from '@/components/pages/ProductPage/ProductCard/ProductCard';
import { CheckoutButton } from '@/components/pages/ProductPage/CheckoutButton/CheckoutButton';

import styles from './ProductPage.module.scss';

type MainPageProps = {
  product: ProductPayload;
};

export const ProductPage = (props: MainPageProps) => {
  const { product } = props;

  return (
    <section className={cn('container', styles.content)}>
      <div className={styles.cardWrapper}>
        <ProductCard
          name={product.name}
          imageSrc={product.image}
          description={product.description}
        />
      </div>

      <div className={styles.buttonWrapper}>
        <CheckoutButton product={product} />
      </div>
    </section>
  );
};
