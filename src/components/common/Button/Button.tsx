import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = (props: ButtonProps) => {
  const { children, className, ...otherProps } = props;

  return (
    <button
      className={cn(styles.button, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
