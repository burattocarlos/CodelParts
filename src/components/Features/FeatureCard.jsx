import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex max-w-xs items-start space-x-4">
      {/* Ícone */}      
        <img src={icon} alt={title} className="mx-auto mr-2 mb-2 w-15 h-15" />
      {/* Texto */}
      <div className="flex flex-col">
        <h3 className="font-bold text-start text-sm md:text-lg">{title}</h3>
        <p className="text-gray-600 text-xs md:text-base text-start">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
