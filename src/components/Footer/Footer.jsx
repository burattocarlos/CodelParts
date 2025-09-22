import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-2xl">
            <ContactInfo />
            <SocialMedia />
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-600 text-xs text-gray-400">
          <div className="text-center">
            <p className="font-bold text-white mb-2">
              CODEL PARTS LTDA
            </p>
            <p className="mb-1">RUA JOÃO GRUMICHE, ROÇADO, Nº 1418 - SÃO JOSÉ/SC</p>
            <p>CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;