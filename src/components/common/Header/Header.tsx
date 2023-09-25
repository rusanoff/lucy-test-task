import Image from 'next/image';
import Link from 'next/link';

import { CartLink } from '@/components/common/Header/CartLink/CartLink';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Link
          href="/"
          className={styles.logoLink}
        >
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={242}
            height={43}
            priority
          />
        </Link>
      </div>

      <div className={styles.actions}>
        <CartLink />
      </div>
    </header>
  );
};
