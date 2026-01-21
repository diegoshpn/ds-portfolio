"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const stats = [
  { value: 10, suffix: "+", label: "Projetos" },
  { value: 8, suffix: "+", label: "Anos de Experiência" },
  { value: 15, suffix: "+", label: "Clientes Satisfeitos" },
  { value: 100, suffix: "%", label: "Dedicação" },
];

function About(){
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (    
    <section id="about" className="flex flex-col items-center justify-center bg-radial from-gray-900 to-gray-800 w-full min-h-[800px] py-20">
      <div ref={ref} className="w-full max-w-7xl px-4 md:px-8">
        {/* Main Content - Photo and Text Side by Side */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
          {/* Photo Section - Reduced Glow */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="shrink-0"
          >
            <div className="relative">
              {/* Reduced Glow - Much Subtler */}
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-[#4c8faa] via-cyan-400 to-[#4c8faa] animate-gradient-x opacity-30 blur-md"></div>
              <div className="relative rounded-full p-[2px] bg-linear-to-r from-[#4c8faa]/50 via-cyan-400/50 to-[#4c8faa]/50">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full overflow-hidden bg-gray-900"
                >
                  <Image
                    src="/photo.jpeg"
                    alt="Foto perfil"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-[250px] h-[250px] md:w-[300px] md:h-[300px]"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex flex-col gap-6 text-center md:text-left"
          >
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-4xl md:text-5xl font-bold uppercase">Sobre</h1>
              <div className="border border-b-2 rounded w-20 border-[#4c8faa] mx-auto md:mx-0"></div>
              <p className="text-gray-400 text-sm md:text-base">Autodidata | Organizado | Comprometido | Flexível</p>
            </div>
            
            <p className="text-gray-400 text-justify md:text-left leading-relaxed max-w-2xl mx-auto md:mx-0">
              Formado em Análise e Desenvolvimento de Sistemas e com foco em Desenvolvimento Fullstack, atuo em projetos que vão desde websites institucionais até aplicações web complexas sempre utilizando as tecnologias mais modernas e eficientes. Fascinado por tecnologia e sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para o sucesso dos clientes.
            </p>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 mx-auto md:mx-0"
            >
              <a href="#contacts">
                <Button className="uppercase font-semibold cursor-pointer bg-linear-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all px-8 py-3">
                  Entrar em contato
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Statistics Section - Integrated Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center glass rounded-xl p-4 md:p-6 border border-white/10 hover:border-[#4c8faa]/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#4c8faa] to-cyan-400 bg-clip-text text-transparent">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2}
                      delay={index * 0.2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-gray-400 mt-2 text-xs md:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About;