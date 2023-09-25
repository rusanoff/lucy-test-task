'use client';
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { ComponentType } from 'react';
import { ReduxProvider } from '@/store/ReduxProvider';

export const withReduxProvider = <T extends object>(WrappedComponent: ComponentType<T>) => {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    const ResultComponent = () => {
      return (
        <ReduxProvider>
          <WrappedComponent {...(props as T)} />
        </ReduxProvider>
      );
    };

    ResultComponent.displayName = `withReduxProvider(${displayName})`;

    return <ResultComponent />;
  };
};
