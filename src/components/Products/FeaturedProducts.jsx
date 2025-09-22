import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: '/src/assets/conector175.jpg',
    title: 'Conector Power Anderson 175Ah'
  },
  {
    image: '/src/assets/conector350.jpg',
    title: 'Conector Power Anderson 350Ah'
  },
  {
    image: '/src/assets/motorpartidaf2.jpg',
    title: 'Motor de partida Mazda F2'
  },
  {
    image: '/src/assets/espelhoretrovisor.jpg',
    title: 'Espelho retrovisor para empilhadeiras'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
          PEÇAS EM DESTAQUE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 cursor-pointer">
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
