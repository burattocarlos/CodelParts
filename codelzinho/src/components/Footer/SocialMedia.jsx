import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  const socialNetworks = [
    { name: 'Instagram', href: '#', icon: <Instagram size={20} /> },
    { name: 'WhatsApp', href: '#', icon: <MessageCircle size={20} /> }
  ];

  return (
    <div className="text-center md:text-left">
      <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
      <div className="flex justify-center md:justify-start space-x-4">
        {socialNetworks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-400 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;