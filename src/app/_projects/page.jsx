"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { LuSquareArrowOutUpRight, LuX } from "react-icons/lu";

const projects = [
  {
    title: "SmartSLOT",
    subtitle: "Sistema de gestão e agendamento para clínicas.",
    description: "SmartSLOT surgiu visando otimizar o gerenciamento, agendamento e a administração geral. Com uma interface intuitiva e funcionalidades robustas, o SmartSLOT permite que profissionais das mais diversas áreas gerenciem seus clientes e horários de forma eficiente.",
    image: "/smartslot/smartslot1.png",
    technologies: ["Next.js", "React", "Typescript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "Stripe"],
    github: "#",
    deploy: "#",
  },
  {
    title: "BarbeariaPRO",
    subtitle: "Sistema de gestão para barbearias.",
    description: "O BarbeariaPRO é uma solução completa para barbearias que buscam otimizar suas operações diárias. Com funcionalidades que abrangem desde o agendamento de clientes até o controle financeiro, este sistema foi desenvolvido para facilitar a vida dos proprietários e melhorar a experiência dos clientes.",
    image: "/barbeariapro/barberpro-thumb.png",
    technologies: ["Next.js", "React", "Typescript", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "Stripe"],
    github: "https://github.com/diegoshpn/barber-frontend",
    deploy: "https://barber-frontend-delta.vercel.app/login",
  },
  {
    title: "Pizzaria Modelo - Admin",
    subtitle: "Sistema de gestão para pizzarias (projeto de estudo).",
    description: "O Pizzaria Modelo é um sistema desenvolvido para facilitar a gestão de pizzarias, permitindo o controle eficiente de pedidos. Este projeto de estudo visa oferecer uma solução prática e intuitiva para proprietários de pizzarias que desejam otimizar suas operações diárias.",
    image: "/pizzaria/pizzaria1.png",
    technologies: ["Typescript", "React", "Tailwind CSS"],
    github: "https://github.com/diegoshpn/pizzariafrontend",
    deploy: "https://pizzariafrontend.vercel.app",
  },
  {
    title: "Pizzaria Modelo",
    subtitle: "Sistema de pedidos online para pizzarias (projeto de estudo).",
    description: "O Pizzaria Modelo é uma plataforma de pedidos online desenvolvida para facilitar a experiência dos clientes ao encomendar suas pizzas favoritas. Este projeto de estudo foi criado para demonstrar como uma interface amigável e funcional pode melhorar o processo de pedido em pizzarias.",
    image: "/cardapio/cardapio1.png",
    technologies: ["Javascript", "Tailwind CSS"],
    github: "https://github.com/diegoshpn/cardapio-project",
    deploy: "https://cardapio-project-nine.vercel.app",
  },
  {
    title: "XPN Linktree",
    subtitle: "Gerenciador de links personalizado.",
    description: "XPN Linktree é uma aplicação web que permite aos usuários criar uma página personalizada para agrupar e compartilhar múltiplos links em um único local. Ideal para profissionais, criadores de conteúdo e qualquer pessoa que deseje simplificar a divulgação de seus perfis e projetos online.",
    image: "/xpnlink/xpnlink1.png",
    technologies: ["Vite", "React", "Tailwind CSS", "Firebase"],
    github: "https://github.com/diegoshpn/xpnlinks",
    deploy: "https://xpnlinks.vercel.app",
  },
  {
    title: "Petshop Virtual",
    subtitle: "LandingPage para petshops.",
    description: "Petshop Virtual é uma landing page moderna e atraente desenvolvida para petshops que desejam estabelecer uma presença online eficaz. Com um design responsivo e focado na experiência do usuário, esta página destaca os serviços oferecidos, promoções especiais e informações de contato para atrair e engajar clientes potenciais.",
    image: "/petshop/petshop1.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/diegoshpn/petshopdev",
    deploy: "https://petshopdev-nu.vercel.app",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-20 min-h-[900px] h-auto bg-radial from-gray-900 to-gray-800"
    >
      <div
        className="flex flex-col items-center justify-center gap-4"
        data-aos="flip-left"
      >
        <h1 className="text-4xl text-white font-bold mt-20">Projetos</h1>
        <div className="border border-b-2 rounded w-25 border-[#4c8faa]"></div>
        <p className="text-gray-400">
          Confira alguns projetos que desenvolvi.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-20 w-full px-4 max-w-7xl"
        data-aos="zoom-in"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 border-b-4 border-transparent bg-linear-to-r from-[#4c8faa] to-[#3a6d8c]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="object-cover w-full h-[300px] brightness-50 group-hover:brightness-75 transition-all duration-300 z-0"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300">
              <h2 className="text-xl text-white font-bold mb-2 drop-shadow-md">
                {project.title}
              </h2>
              <button
                onClick={() => setSelectedProject(project)}
                className="bg-[#4c8faa] text-white px-6 py-2 rounded-full font-bold hover:bg-[#3a6d8c] transition-all duration-300 opacity-100 translate-y-0 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 cursor-pointer"
              >
                Ver Mais
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-lg max-w-3xl h-auto max-h-[90vh] md:max-w-6xl md:h-3/5 w-full relative overflow-y-auto md:overflow-hidden flex flex-col justify-center md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-1 cursor-pointer"
            >
              <LuX size={24} />
            </button>
            
            <div className="hidden md:block w-full md:w-1/2 h-64 md:h-full relative bg-gray-900 ml-5">
               <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>
            
            <div className="w-full md:w-1/2 p-8 flex flex-col gap-4 items-center text-center md:items-start md:text-left">
              <h2 className="text-3xl font-bold text-[#4c8faa]">
                {selectedProject.title}
              </h2>
              <p className="text-gray-300 text-md">
                {selectedProject.subtitle}
              </p>
              <p className="text-gray-400 text-sm">
                {selectedProject.description}
              </p>
              
              <div className="w-full flex flex-col items-center md:items-start">
                <h3 className="font-semibold text-gray-200 mb-2">Tecnologias:</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center md:justify-end gap-4 mt-auto pt-4 w-full">
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    className="flex items-center gap-2 bg-[#4c8faa] text-white px-4 py-2 rounded-lg hover:bg-[#3a6d8c] transition-colors"
                  >
                    <SiGithub /> Repositório
                  </Link>
                )}
                {selectedProject.deploy && (
                  <Link
                    href={selectedProject.deploy}
                    target="_blank"
                    className="flex items-center gap-2 border-2 border-[#4c8faa] text-[#4c8faa] px-4 py-2 rounded-lg hover:bg-[#4c8faa] hover:text-white transition-colors"
                  >
                    <LuSquareArrowOutUpRight /> Live
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;