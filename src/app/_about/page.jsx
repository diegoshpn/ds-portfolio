import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoMdDownload } from "react-icons/io";

function About(){
  return (    
    <section id="about" className="md:flex grid grid-cols-1 items-center justify-center bg-linear-to-r from-gray-200 to-gray-300 gap-32 w-full min-h-[800px]">
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
          <h1 className="text-[#4c8faa] text-4xl font-bold mb-2 uppercase">Sobre</h1>
          <p className="text-gray-400">Autodidata | Organizado | Comprometido | Flexível</p>
        </div>
        <p className="mt-10 text-justify max-w-lg text-wrap">
          Formado em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento fullstack, atuando em projetos que vão desde websites institucionais até aplicações web complexas. Apaixonado por tecnologia e sempre em busca de novos desafios para aprimorar minhas habilidades e contribuir para o sucesso dos projetos.
        </p>
        <div className="mt-10 gap-5 grid grid-cols-1 md:flex">
          <a href="#contacts">
            <Button className="uppercase cursor-pointer bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300">
              Vamos alavancar seu negócio
            </Button>
          </a>
          {/* <Button className="uppercase cursor-pointer ring-1 ring-[#4c8faa] bg-transparent text-[#4c8faa] hover:bg-[#4c8faa] hover:text-white">
            <IoMdDownload />
            Download CV
          </Button> */}
        </div>
      </div>
    </section>
  )
}

export default About;