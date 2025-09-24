import React from 'react';

const Navigation = ({ mobile = false }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const navItems = [
    { 
      icon: '/imagens/iconhwheel.png', 
      label: 'PEÇAS EMPILHADEIRAS',
      action: () => scrollToSection('featured-products')
    },
    { 
      icon: '/imagens/iconhtool.png', 
      label: 'ACESSÓRIOS',
      action: () => scrollToSection('featured-products')
    }
  ];

  if (mobile) {
    return (
      <nav className="grid grid-cols-2 gap-4">
        {navItems.map((item, index) => (
          <button 
            key={index}
            onClick={item.action}
            className="flex items-center space-x-2 hover:text-yellow-400 transition-colors py-2 cursor-pointer text-left"
          >
            <img src={item.icon} alt={item.label} className="w-5 h-5" />
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex space-x-8">
      {navItems.map((item, index) => (
        <button 
          key={index}
          onClick={item.action}
          className="flex items-center space-x-2 hover:text-yellow-400 transition-colors cursor-pointer"
        >
          <img src={item.icon} alt={item.label} className="w-6 h-6" />
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;