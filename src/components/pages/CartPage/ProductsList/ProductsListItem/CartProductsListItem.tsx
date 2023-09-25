import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { Button } from '@/components/common/Button/Button';

import styles from './CartProductsListItem.module.scss';

type CartProductsListItemProps = {
  id: number;
  name: string;
  imageSrc: string;
  price: string;
  specialPrice?: string;
  imageWidth?: number;
  imageHeight?: number;
  onDelete: () => void;
};

export const CartProductsListItem = (props: CartProductsListItemProps) => {
  const { id, name, imageSrc, price, specialPrice, imageWidth = 424, imageHeight = 624, onDelete } = props;

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Link href={`/products/${id}`}>
          <Image
            src={imageSrc}
            alt={name}
            width={imageWidth}
            height={imageHeight}
            className={styles.image}
            loading="lazy"
          />
        </Link>
      </div>

      <div className={styles.name}>
        <Link
          href={`/products/${id}`}
          className={styles.link}
        >
          {name}
        </Link>
      </div>

      <div className={styles.price}>
        <span
          className={cn({
            [styles.oldPrice]: Boolean(specialPrice),
          })}
        >
          {price}
        </span>

        {Boolean(specialPrice) && <span className={styles.specialPrice}>{specialPrice}</span>}
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          type="button"
          className={styles.button}
          onClick={onDelete}
        >
          Delete
        </Button>
      </div>
    </li>
  );
};
