import React from 'react';

const Banner = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const mobileBanner = "/imagens/banner2.png";
  const desktopBanner = "/imagens/banner1.png";

  return (
    <section className="relative w-full min-h-screen sm:min-h-[80vh] overflow-hidden pt-24 flex items-center justify-center text-center">
      {/* Background Images */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={mobileBanner}
          alt="Banner para mobile"
          className="block sm:hidden w-full h-full object-cover"
        />
        <img
          src={desktopBanner}
          alt="Banner para desktop"
          className="hidden sm:block w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white p-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Conectores de Potência e Acessórios
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          A solução completa para suas empilhadeiras.
        </p>
        <button
          onClick={() => scrollToSection('featured-products')}
          className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Ver Produtos
        </button>
      </div>
    </section>
  );
};

export default Banner;