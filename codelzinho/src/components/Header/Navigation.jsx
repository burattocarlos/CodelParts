import React from 'react';
import { Wrench, Cog } from 'lucide-react';

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
      icon: <Wrench size={20} />,
      label: 'PEÇAS EMPILHADEIRAS',
      action: () => scrollToSection('featured-products')
    },
    {
      icon: <Cog size={20} />,
      label: 'ACESSÓRIOS',
      action: () => scrollToSection('featured-products')
    }
  ];

  const navClass = mobile
    ? "grid grid-cols-2 gap-4"
    : "flex space-x-8";

  const buttonClass = "flex items-center space-x-2 hover:text-yellow-400 transition-colors cursor-pointer";

  return (
    <nav className={navClass}>
      {navItems.map((item, index) => (
        <button
          key={index}
          onClick={item.action}
          className={`${buttonClass} ${mobile ? 'py-2 text-left' : ''}`}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;