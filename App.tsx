'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatedSection } from './components/AnimatedSection';
import { CountdownTimer } from './components/CountdownTimer';
import { 
  MarketingIcon, DesignIcon, FinanceIcon, AestheticsIcon, CodeIcon, EnglishIcon,
  InfinityIcon, NoMonthlyFeeIcon, CertificateIcon, UpdatesIcon, DevicesIcon,
  ShieldIcon, StarIcon 
} from './components/icons';

// URL base do checkout da Kiwify
const BASE_CHECKOUT_URL = "https://pay.kiwify.com.br/yhctuZz";
const BASE_SALESPAGE_URL = "https://kiwify.app/y0RbQfL";

// Componente do botão CTA (com suporte a afid)
interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-block px-8 py-4 text-lg font-bold text-white uppercase transition-all duration-300 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl ${className}`}
  >
    {children}
  </a>
);

const App: React.FC = () => {
  const searchParams = useSearchParams();
  const [checkoutUrl, setCheckoutUrl] = useState(BASE_CHECKOUT_URL);

  useEffect(() => {
    const afid = searchParams.get('afid');
    if (afid) {
      // salva e aplica o ID do afiliado
      const url = `${BASE_CHECKOUT_URL}?afid=${afid}`;
      setCheckoutUrl(url);
      localStorage.setItem('afid', afid);
    } else {
      // tenta recuperar do localStorage se o visitante já veio por um afiliado
      const savedAfid = localStorage.getItem('afid');
      if (savedAfid) {
        setCheckoutUrl(`${BASE_CHECKOUT_URL}?afid=${savedAfid}`);
      }
    }
  }, [searchParams]);

  return (
    <div className="bg-[#0D0518] text-gray-200 overflow-x-hidden">
      <main>
        {/* HERO */}
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 pt-20 pb-10 text-center bg-gradient-to-br from-[#0D0518] via-[#1b0a37] to-[#3a1675] animate-gradient-xy overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm"></div>
          <header className="absolute top-0 left-0 right-0 z-20 py-6">
            <div className="container mx-auto">
              <img src="https://i.imgur.com/Chx9K9m.png" alt="ACERVO NEWGEN Logo" className="w-56 mx-auto md:w-64" />
            </div>
          </header>

          <div className="z-10 flex flex-col items-center">
            <h1 className="text-4xl font-extrabold tracking-tighter text-transparent uppercase sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-glow">
              10 MIL CURSOS.<br />
              <span className="text-white">1 SÓ INVESTIMENTO.</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 md:text-xl">
              Aprenda qualquer coisa, quando quiser. Acesso vitalício por apenas <span className="font-bold text-white">R$29,90</span>.
            </p>
            <p className="mt-6 text-lg font-semibold text-green-400 text-glow">
              Mais de R$192.218.328,00 em cursos...
            </p>
            <div className="mt-10">
              <CTAButton href={checkoutUrl} className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 glow-shadow animate-pulse">
                QUERO O NEWGEN AGORA
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ... (todo o restante do conteúdo continua igual) ... */}

        {/* OFFERTA */}
        <section className="py-20">
          <div className="container px-4 mx-auto text-center">
            <AnimatedSection>
              <div className="max-w-3xl p-8 mx-auto border-2 border-dashed rounded-3xl border-pink-500/50 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg">
                <h3 className="text-sm font-bold tracking-widest text-pink-400 uppercase">OFERTA POR TEMPO LIMITADO</h3>
                <p className="my-4 text-4xl font-bold md:text-6xl">
                  <span className="text-gray-500 line-through">De R$79,90</span><br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">Por apenas R$29,90</span>
                </p>
                <p className="text-lg text-gray-300">Pagamento único, acesso vitalício.</p>
                <CountdownTimer />
                <div className="mt-8">
                  <CTAButton href={checkoutUrl} className="bg-gradient-to-r from-pink-600 to-purple-600 glow-shadow">
                    QUERO APROVEITAR A OFERTA
                  </CTAButton>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <div className="container px-4 mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-extrabold md:text-5xl text-glow">Pronto para a Nova Geração do Conhecimento?</h2>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
                Milhares de horas de conteúdo prático estão a um clique de distância. Não perca a chance de transformar sua carreira com um investimento mínimo.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="mt-10">
                <CTAButton href={checkoutUrl} className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 glow-shadow animate-pulse">
                  GARANTIR MEU ACESSO AGORA
                </CTAButton>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 border-t border-purple-900/50">
        <p>&copy; {new Date().getFullYear()} ACERVO NEWGEN. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">Acesso também via página da Kiwify: <a href={BASE_SALESPAGE_URL} target="_blank" className="underline text-purple-400">newgen.kiwify.app</a></p>
      </footer>
    </div>
  );
};

export default App;
