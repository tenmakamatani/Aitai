import React, { ReactNode } from 'react';
import { Footer } from './Footer';

interface IProps {
  children: ReactNode;
}

export const Layout = ({children}: IProps) => {
  return (
    <div>
      <header>
        <p>a</p>
      </header>
      {children}
      <Footer />
    </div>
  );
}
