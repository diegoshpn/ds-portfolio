"use client";

import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import SplitText from "@/components/ui/SplitText";
import TextType from '@/components/ui/TextType';

const handleAnimationComplete = () => {
  
};

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen w-full text-white"
      style={{
        backgroundImage: 'url(/background.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY * 0.5}px`, // Parallax effect
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col gap-5 text-center">
        <p className="text-[#4c8faa] font-bold shadow-amber-100 -mb-4 uppercase tracking-widest">Portfolio</p>
        <SplitText
          text="Diego Soares"
          className="text-4xl md:text-7xl uppercase font-semibold text-center"
          delay={100}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <TextType 
          text={["Desenvolvedor Fullstack", "Freelancer", "Analista de Sistemas", "Caçador de bugs", "Fazedor de cafés"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName='text-[#4c8faa]'
          className='text-gray-300 text-lg md:text-2xl'
        />

        {/* CTA Button */}
        <div className="flex flex-row items-center justify-center gap-4">
          <a href="https://api.whatsapp.com/send?phone=5585986998327&text=Olá, Diego. Gostei dos seus trabalhos e gostaria de conversar com você!" target="_blank">
            <Button data-aos="zoom-in" className="uppercase bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 mx-auto w-[120px] mt-20 text-white font-bold px-6 py-3 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-1000">
              Contato
            </Button>
          </a>
          <a href="#projects">
            <Button data-aos="zoom-in" className="uppercase bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 mx-auto w-[120px] mt-20 text-white font-bold px-6 py-3 rounded-lg cursor-pointer hover:scale-110 transition-transform duration-1000">
              Projetos
            </Button>
          </a>
        </div>
      </div>

      {/* Menu Icon */}
      <div className="fixed top-8 right-4 md:right-20 z-99">
        <button
          className="w-10 h-10 bg-[#4c8faa] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <IoCloseOutline className='w-6 h-6' />
          ) : (
            <SlMenu />
          )}
        </button>

        {/* Menu Dropdown */}
        <div
          className={`absolute top-0 right-12 w-[150px] bg-[#4c8faa] text-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-[#203D48]">Início</a></li>
            <li><a href="#about" className="hover:text-[#203D48]">Sobre</a></li>
            <li><a href="#projects" className="hover:text-[#203D48]">Projetos</a></li>
            <li><a href="#contacts" className="hover:text-[#203D48]">Contato</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}