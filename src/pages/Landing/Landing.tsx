import React from 'react';
import { AuthProvider } from '../../providers/AuthProvider';
import { Banner, Navbar } from './components';
import { Features } from './components/Features';
import Footer from './components/Footer';

export const Landing = () => (
  <AuthProvider>
    <Navbar />
    <Banner />
    <Features />
    <Footer />
  </AuthProvider>
);
