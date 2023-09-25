import { JSX, SVGProps } from 'react';
import cn from 'classnames';

import { IconCart } from '@/components/common/Icon/icons/IconCart';
import { IconType } from '@/components/common/Icon/Icon.types';

import styles from './Icon.module.scss';

export type IconProps = {
  type: IconType;
} & SVGProps<SVGSVGElement>;

export const Icon = (props: IconProps) => {
  const { type, className, ...svgProps } = props;

  const iconClassName = cn(styles.icon, className);
  const iconProps = {
    ...svgProps,
    className: iconClassName,
  };

  const iconMap: Record<IconType, JSX.Element> = {
    cart: <IconCart {...iconProps} />,
  };

  return iconMap[type];
};
