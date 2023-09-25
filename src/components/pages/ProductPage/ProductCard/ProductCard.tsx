import Image from 'next/image';

import { HTMLString } from '@/types/common';
import { ProductDescription } from '@/components/pages/ProductPage/ProductDescription/ProductDescription';

import styles from './ProductCard.module.scss';

type ProductCardProps = {
  name: string;
  imageSrc: string;
  description: HTMLString;
};

export const ProductCard = (props: ProductCardProps) => {
  const { name, imageSrc, description } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.mainBlock}>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={name}
            className={styles.image}
            width={424}
            height={624}
            priority
          />
        </div>

        <div>{name}</div>
      </div>

      <div className={styles.descriptionBlock}>
        <ProductDescription content={description} />
      </div>
    </div>
  );
};
