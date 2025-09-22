import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Features from '../components/Features/Features';
import FeaturedProducts from '../components/Products/FeaturedProducts';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner />
      <Features />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default Home;