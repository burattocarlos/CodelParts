import React from 'react';

const SocialMedia = () => {
  const socialNetworks = [
    { name: 'Instagram', color: 'bg-black', icon: '/imagens/iconfinsta.png' },
    { name: 'WhatsApp', color: 'bg-black', icon: '/imagens/iconfwhats.png' }
  ];

  return (
    <div className="text-center md:text-left">
      <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Redes Sociais</h4>
      <div className="flex justify-center ml-2 md:ml-4 md:justify-start space-x-2">
        {socialNetworks.map((social, index) => (
          <div 
            key={index}
            className={`${social.color} w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer hover:opacity-80 transition-opacity`}
          >
            <img src={social.icon} alt={social.name} className="w-7 h-7" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;