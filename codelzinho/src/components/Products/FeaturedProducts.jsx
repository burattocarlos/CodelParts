import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    image: '/imagens/conector175.jpg',
    title: 'Conector Power Anderson 175Ah'
  },
  {
    image: '/imagens/conector350.jpg',
    title: 'Conector Power Anderson 350Ah'
  },
  {
    image: '/imagens/motorpartidaf2.jpg',
    title: 'Motor de partida Mazda F2'
  },
  {
    image: '/imagens/espelhoretrovisor.jpg',
    title: 'Espelho retrovisor para empilhadeiras'
  }
];

const FeaturedProducts = () => {
  return (
    <section id="featured-products" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            PEÇAS EM DESTAQUE
          </h2>
          <p className="text-gray-600 mt-2">
            Confira nossa seleção de produtos de alta qualidade.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
