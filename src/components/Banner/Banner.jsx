import React from 'react';

const Banner = () => {
  return (
    <section className="w-full min-h-screen sm:min-h-[80vh] relative overflow-hidden">
      {/* Para mobile - foco no centro/direita onde está o produto */}
      <img 
        src="/imagens/banner2.png"
        alt="banner conector power anderson"
        className="block sm:hidden w-full h-full min-h-screen object-cover"
        />
      
      {/* Para desktop - imagem completa */}
      <img 
        src="/imagens/banner1.png"
        alt="banner conector power anderson"
        className="hidden sm:block w-full h-full min-h-[80vh] object-cover object-center"
        />
    </section>
  );
};

export default Banner;