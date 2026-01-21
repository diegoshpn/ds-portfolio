"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { LuSquareArrowOutUpRight, LuX, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Tilt from "@/components/ui/Tilt";

const projects = [
  {
    title: "STACKON",
    subtitle: "Landing Page para empresa de tecnologia.",
    description: "Website desenvolvido para STACKON, empresa que oferece soluções de software, produtos digitais e consultoria em tecnologia.",
    image: "/stackon/1.png",
    images: [
      "/stackon/1.png",
      "/stackon/2.png",
      "/stackon/3.png",
      "/stackon/4.png",
    ],
    technologies: ["Typescript", "Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/diegoshpn/stackonweb",
    deploy: "https://stackonweb.vercel.app",
  },
  {
    title: "NEXLIN",
    subtitle: "Plataforma de agendamento e gestão de horários.",
    description: "NEXLIN é uma plataforma de agendamento e gestão de clientes desenvolvida para facilitar o processo de agendamento de serviços e o gerenciamento de clientes. Com uma interface intuitiva e funcionalidades robustas, a NEXLIN permite que profissionais das mais diversas áreas gerenciem seus clientes e horários de forma eficiente.",
    image: "/nexlin/1.png",
    images: [
      "/nexlin/1.png",
      "/nexlin/2.png",
      "/nexlin/3.png",
      "/nexlin/4.png",
    ],
    technologies: ["Next.js", "Node.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe"],
    github: "#",
    deploy: "#",
  },
  {
    title: "SmartSLOT",
    subtitle: "Sistema de gestão e agendamento para clínicas.",
    description: "SmartSLOT surgiu visando otimizar o gerenciamento, agendamento e a administração geral. Com uma interface intuitiva e funcionalidades robustas, o SmartSLOT permite que profissionais das mais diversas áreas gerenciem seus clientes e horários de forma eficiente.",
    image: "/smartslot/smartslot1.png",
    images: [
      "/smartslot/smartslot1.png",
      "/smartslot/smartslot2.png",
      "/smartslot/smartslot3.png",
      "/smartslot/smartslot4.png"
    ],
    technologies: ["Next.js", "React", "Typescript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "Stripe"],
    github: "#",
    deploy: "#",
  },
  {
    title: "BarbeariaPRO",
    subtitle: "Sistema de gestão para barbearias.",
    description: "O BarbeariaPRO é uma solução completa para barbearias que buscam otimizar suas operações diárias. Com funcionalidades que abrangem desde o agendamento de clientes até o controle financeiro, este sistema foi desenvolvido para facilitar a vida dos proprietários e melhorar a experiência dos clientes.",
    image: "/barbeariapro/barberpro-thumb.png",
    images: [
      "/barbeariapro/barberpro-thumb.png",
      "/barbeariapro/barberpro2.png",
      "/barbeariapro/barberpro3.png",
      "/barbeariapro/barberpro4.png",
    ],
    technologies: ["Next.js", "React", "Typescript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "Stripe"],
    github: "https://github.com/diegoshpn/barber-frontend",
    deploy: "https://barber-frontend-delta.vercel.app/login",
  },
  {
    title: "Spotify Clone",
    subtitle: "Clone do Spotify para estudos.",
    description: "Clone do Spotify para estudos. Este projeto foi criado para demonstrar como uma interface amigável e funcional pode melhorar o processo de reprodução de músicas.",
    image: "/spotify/1.png",
    images: [
      "/spotify/1.png",
      "/spotify/2.png",
      "/spotify/3.png",
    ],
    technologies: ["Next.js", "React", "Typescript", "Tailwind CSS" ],
    github: "#",
    deploy: "#",
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-20 min-h-[900px] h-auto bg-radial from-gray-900 to-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center gap-4"
      >
        <h1 className="text-4xl text-white font-bold mt-20">Projetos</h1>
        <div className="border border-b-2 rounded w-25 border-[#4c8faa]"></div>
        <p className="text-gray-400">
          Confira alguns projetos que desenvolvi.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-20 w-full px-4 max-w-7xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Tilt maxTilt={10} scale={1.02}>
              <div className="relative group overflow-hidden rounded-lg shadow-2xl cursor-pointer glass border border-white/10">
                <div className="absolute inset-0 bg-linear-to-br from-[#4c8faa]/20 to-[#3a6d8c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-[300px] brightness-75 group-hover:brightness-90 group-hover:scale-110 transition-all duration-500 z-0"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 z-20">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-xl text-white font-bold mb-4 drop-shadow-lg"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.button
                    onClick={() => handleProjectSelect(project)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-linear-to-r from-[#4c8faa] to-[#3a6d8c] text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/75 transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 cursor-pointer"
                  >
                    Ver Mais
                  </motion.button>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="rounded-xl max-w-3xl h-auto max-h-[90vh] md:max-w-6xl md:h-2/5 w-full relative overflow-y-auto md:overflow-hidden flex flex-col justify-center md:flex-row shadow-2xl border border-white/30"
              style={{
                background: 'rgba(30, 30, 30, 0.4)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/40 rounded-full p-2 cursor-pointer backdrop-blur-md border border-white/20"
              >
                <LuX size={24} />
              </motion.button>
              
              {/* Image Carousel */}
              <div className="hidden md:block w-full md:w-1/2 h-64 md:h-full relative ml-5 overflow-hidden">
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all cursor-pointer"
                    >
                      <LuChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 backdrop-blur-sm transition-all cursor-pointer"
                    >
                      <LuChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                      {selectedProject.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-[#4c8faa] w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={selectedProject.images?.[currentImageIndex] || selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain p-4"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 items-center text-center md:items-start md:text-left">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold bg-linear-to-r from-[#4c8faa] to-cyan-400 bg-clip-text text-transparent"
                >
                  {selectedProject.title}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-md"
                >
                  {selectedProject.subtitle}
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-sm"
                >
                  {selectedProject.description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="w-full flex flex-col items-center md:items-start"
                >
                  <h3 className="font-semibold text-gray-200 mb-2">Tecnologias:</h3>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                        className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/10 hover:border-[#4c8faa]/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-center md:justify-end gap-4 mt-auto pt-4 w-full"
                >
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={selectedProject.github}
                        target="_blank"
                        className="flex items-center gap-2 bg-linear-to-r from-[#4c8faa] to-[#3a6d8c] text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                      >
                        <SiGithub /> Repositório
                      </Link>
                    </motion.div>
                  )}
                  {selectedProject.deploy && selectedProject.deploy !== "#" && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href={selectedProject.deploy}
                        target="_blank"
                        className="flex items-center gap-2 border-2 border-[#4c8faa] text-[#4c8faa] px-4 py-2 rounded-lg hover:bg-[#4c8faa] hover:text-white transition-all"
                      >
                        <LuSquareArrowOutUpRight /> Live
                      </Link>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;