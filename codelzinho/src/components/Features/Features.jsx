import React from 'react';
import FeatureCard from './FeatureCard';
import { CreditCard, Truck, Wrench, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CreditCard size={40} className="text-yellow-400" />,
      title: 'ATÉ 12X SEM JUROS',
      description: 'Em peças e acessórios'
    },
    {
      icon: <Truck size={40} className="text-yellow-400" />,
      title: 'ENTREGA GARANTIDA',
      description: 'Com total segurança'
    },
    {
      icon: <Wrench size={40} className="text-yellow-400" />,
      title: 'TUDO EM PEÇAS',
      description: 'Para suas empilhadeiras'
    },
    {
      icon: <ShieldCheck size={40} className="text-yellow-400" />,
      title: 'COMPRA SEGURA',
      description: 'Em um ambiente protegido'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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