'use client';

import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WashTransition from '@/components/ui/WashTransition';

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <WashTransition>
      <Header />
      {children}
      <Footer />
    </WashTransition>
  );
}
