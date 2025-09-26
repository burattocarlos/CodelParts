import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 text-center transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center mb-4">
        <img src={image} alt={title} className="max-h-32 object-contain" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4 h-10">{title}</h3>
        <a
          href="#"
          className="text-yellow-500 font-bold text-sm hover:underline"
        >
          Ver detalhes
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
