import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    { icon: <Phone size={16} />, text: '(48) 99177-3707' },
    { icon: <Mail size={16} />, text: 'contato@codelparts.com.br' },
    { icon: <Clock size={16} />, text: 'Segunda a Segunda - 8h às 18h' }
  ];

  return (
    <div className="text-center md:text-left">
      <h4 className="font-bold text-lg mb-4">Atendimento</h4>
      <div className="space-y-3">
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
            <span className="text-yellow-400">{item.icon}</span>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;