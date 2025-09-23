import React from 'react';

const Navigation = ({ mobile = false }) => {
  const navItems = [
    { icon: '/imagens/iconhwheel.png', label: 'PEÇAS EMPILHADEIRAS' },
    { icon: '/imagens/iconhtool.png', label: 'ACESSÓRIOS' }
  ];

  if (mobile) {
    return (
      <nav className="grid grid-cols-2 gap-4">
        {navItems.map((item, index) => (
          <a 
            key={index}
            href="#" 
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors py-2"
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </a>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex space-x-8">
      {navItems.map((item, index) => (
        <a 
          key={index}
          href="#" 
          className="flex items-center space-x-2 hover:text-yellow-400 transition-colors"
        >
          <img src={item.icon} alt={item.label} className="w-6 h-6" />
          <span className="text-xs">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
