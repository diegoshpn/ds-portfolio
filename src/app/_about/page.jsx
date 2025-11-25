import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

function About(){
  return (    
    <section id="about" className="md:flex grid grid-cols-1 items-center justify-center bg-radial from-gray-900 to-gray-800 gap-32 w-full min-h-[800px]">
      <div 
        className="p-10"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Image
          src="/photo.jpeg"
          alt="Foto perfil"
          width={500}
          height={500}
          className="rounded-full shadow-cyan-600 shadow-lg object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div 
        className="grid grid-cols-1 md:flex md:flex-col p-10 gap-5"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-4xl font-bold uppercase">Sobre</h1>
          <div className="border border-b-2 rounded w-15 border-[#4c8faa] mb-2"></div>
          <p className="text-gray-400">Autodidata | Organizado | Comprometido | Flexível</p>
        </div>
        <p className="mt-10 text-gray-400 text-justify max-w-lg text-wrap">
          Formado em Análise e Desenvolvimento de Sistemas e com foco em Desenvolvimento Fullstack, atuo em projetos que vão desde websites institucionais até aplicações web complexas sempre utilizando as tecnologias mais modernas e eficientes. Fascinado por tecnologia e sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para o sucesso dos clientes.
        </p>
        <div className="mt-10 gap-5 grid grid-cols-1 md:flex">
          <a href="#contacts">
            <Button className="uppercase font-semibold cursor-pointer bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300">
              Entrar em contato
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About;