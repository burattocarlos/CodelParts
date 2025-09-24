import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: '/imagens/iconfcartao.png',
      title: 'ATÉ 12X SEM JUROS',
      description: 'peças e acessórios'
    },
    {
      icon: '/imagens/iconfentrega.png',
      title: 'ENTREGA GARANTIDA',
      description: 'com total segurança'
    },
    {
      icon: '/imagens/iconfpecas.png',
      title: 'TUDO EM PEÇAS',
      description: 'para empilhadeiras'
    },
    {
      icon: '/imagens/iconfcompra.png',
      title: 'COMPRA SEGURA',
      description: 'ambiente protegido'
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 justify-items-center">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;