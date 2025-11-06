'use client';
import React, { useEffect, useState } from 'react';

// URL base do checkout da Kiwify
const BASE_CHECKOUT_URL = "https://pay.kiwify.com.br/yhctuZz";

const App: React.FC = () => {
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    // Captura o parâmetro afid da URL (ex: ?afid=123)
    const params = new URLSearchParams(window.location.search);
    const afid = params.get('afid');

    if (afid) {
      const url = `${BASE_CHECKOUT_URL}?afid=${afid}`;
      setCheckoutUrl(url);
      localStorage.setItem('afid', afid);
    } else {
      const savedAfid = localStorage.getItem('afid');
      if (savedAfid) {
        setCheckoutUrl(`${BASE_CHECKOUT_URL}?afid=${savedAfid}`);
      }
    }
  }, []);

  return (
    <div className="bg-[#0D0518] text-gray-200 overflow-x-hidden">
      <main>
        {/* Hero */}
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 pt-20 pb-10 text-center bg-gradient-to-br from-[#0D0518] via-[#1b0a37] to-[#3a1675] overflow-hidden">
          <header className="absolute top-0 left-0 right-0 z-20 py-6">
            <div className="container mx-auto">
              <img src="https://i.imgur.com/Chx9K9m.png" alt="ACERVO NEWGEN Logo" className="w-56 mx-auto md:w-64" />
            </div>
          </header>

          <div className="z-10 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              10 MIL CURSOS.<br />
              <span className="text-white">1 SÓ INVESTIMENTO.</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 md:text-xl">
              Aprenda qualquer coisa, quando quiser. Acesso vitalício por apenas <span className="font-bold text-white">R$29,90</span>.
            </p>
            <div className="mt-10">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-lg font-bold text-white uppercase transition-all duration-300 rounded-full shadow-lg transform bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:scale-105 hover:shadow-2xl"
              >
                QUERO O NEWGEN AGORA
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
