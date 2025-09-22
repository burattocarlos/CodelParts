import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center hover:opacity-80 transition-opacity">
      <img src={image} alt={title} className="w-full h-32 object-contain mb-2" />
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ProductCard;
