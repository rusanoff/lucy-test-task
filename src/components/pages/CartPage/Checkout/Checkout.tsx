import { useMemo, useState } from 'react';

import { useAppDispatch } from '@/hooks/useAppDispatch';
import { resetCheckout } from '@/store/slices/checkoutSlice';
import { checkoutService } from '@/services/checkout/checkoutService';
import { ProductPayload } from '@/services/products/types';
import { Button } from '@/components/common/Button/Button';

import styles from './Checkout.module.scss';

type CheckoutProps = {
  products: ProductPayload[];
};

export const Checkout = (props: CheckoutProps) => {
  const { products } = props;

  const dispatch = useAppDispatch();

  const [orderId, setOrderId] = useState<Nullable<number>>(null);

  const amountInCents = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + (product.specialInCents ? product.specialInCents : product.priceInCents);
    }, 0);
  }, [products]);

  const checkout = async () => {
    const data = products.map((product) => {
      return {
        id: product.id,
        size: product.sizes[0],
      };
    });

    try {
      const response = await checkoutService.createCheckout({ products: data });

      setOrderId(response.orderId);
      dispatch(resetCheckout());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.checkout}>
      {!orderId && (
        <>
          {/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
          <div className={styles.price}>Total Price: {(amountInCents / 100).toFixed(2)}$</div>

          <Button
            type="button"
            className={styles.button}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={checkout}
            disabled={!amountInCents}
          >
            Checkout
          </Button>
        </>
      )}

      {orderId && <div className={styles.orderNumber}>Order Number: {orderId}</div>}
    </div>
  );
};
