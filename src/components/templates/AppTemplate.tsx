import React from 'react';
import { Header } from "@components/organisms/Header"
import { Footer } from '@components/organisms/Footer';

export const AppTemplate: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      { children }
      <Footer />
    </React.Fragment>
  )
}
