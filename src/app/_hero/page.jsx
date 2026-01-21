"use client";

import { useState, useEffect } from "react";
import { Button } from '@/components/ui/button';
import { SlMenu } from "react-icons/sl";
import { IoCloseOutline } from "react-icons/io5";
import { HiArrowDown } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
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
      className="relative flex flex-col items-center justify-center h-screen w-full text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/bg-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: `center ${offsetY * 0.5}px`, // Parallax effect
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle Developer-themed Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-gray-900/50 to-gray-800/70">
        {/* Subtle tech accent */}
        <div className="absolute inset-0 bg-linear-to-r from-[#4c8faa]/10 via-transparent to-[#4c8faa]/10"></div>
        {/* Code-like grid pattern overlay (very subtle) */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(76, 143, 170, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(76, 143, 170, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
            }}
          ></div>
      </div>

      <div className="relative z-10 flex flex-col gap-5 text-center">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#4c8faa] font-bold shadow-amber-100 -mb-4 uppercase tracking-widest"
        >
          Portfolio
        </motion.p>
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

        {/* Refined CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-row items-center justify-center gap-4 mt-8"
        >
          <a href="https://api.whatsapp.com/send?phone=5585986998327&text=Olá, Diego. Gostei dos seus trabalhos e gostaria de conversar com você!" target="_blank">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button className="relative uppercase bg-[#4c8faa] hover:bg-[#3a6d8c] text-white font-semibold px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 border border-[#4c8faa]/30 hover:border-[#4c8faa]/50 shadow-md hover:shadow-lg">
                Contato
              </Button>
            </motion.div>
          </a>
          <a href="#projects">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Button className="relative uppercase bg-transparent border-2 border-[#4c8faa] hover:bg-[#4c8faa]/10 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#4c8faa]">
                Projetos
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <HiArrowDown className="w-6 h-6" />
        </motion.a>
      </motion.div>

      {/* Enhanced Menu Icon */}
      <div className="fixed top-8 right-4 md:right-20 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 bg-[#4c8faa] hover:bg-[#3a6d8c] rounded-full flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-all border border-[#4c8faa]/30"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? (
              <IoCloseOutline className='w-6 h-6 text-white' />
            ) : (
              <SlMenu className='w-6 h-6 text-white' />
            )}
          </motion.div>
        </motion.button>

        {/* Enhanced Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 right-14 w-[180px] glass border border-white/20 text-white rounded-xl shadow-2xl p-4 backdrop-blur-md"
            >
              <ul className="space-y-3">
                {[
                  { href: "#hero", label: "Início" },
                  { href: "#about", label: "Sobre" },
                  { href: "#projects", label: "Projetos" },
                  { href: "#contacts", label: "Contato" },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg hover:bg-white/10 hover:text-cyan-400 transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}