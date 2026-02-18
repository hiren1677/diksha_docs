import React from 'react';
import Accessibility from '../components/common/Accessibility';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Accessibility />
      <Header />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
