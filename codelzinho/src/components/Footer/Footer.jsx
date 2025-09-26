import React from 'react';
import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logo = "/imagens/codelsite.png";

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Codel Parts" className="w-24 mb-4" />
            <p className="text-sm text-gray-400">
              CODEL PARTS LTDA <br />
              CNPJ: 00.000.000/0001-00
            </p>
          </div>

          {/* Contact Info */}
          <ContactInfo />

          {/* Social Media */}
          <SocialMedia />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>
            &copy; {currentYear} Codelzinho. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;