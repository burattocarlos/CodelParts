import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-lg transition-transform transform hover:scale-105">
      {/* Ícone */}
      <div className="mb-4">
        {icon}
      </div>
      {/* Texto */}
      <div className="flex flex-col">
        <h3 className="font-bold text-sm md:text-base">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
