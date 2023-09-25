import '../assets/scss/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Header } from '@/components/common/Header/Header';

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lucy In The Sky',
  description: 'Test app',
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <div className="mainWrapper">{children}</div>
      </body>
    </html>
  );
}
