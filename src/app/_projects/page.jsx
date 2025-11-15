import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Button } from "../../components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

const projects = [
  {
    title: "SmartSLOT",
    description: "Sistema completo de gestão e agendamento para clínicas, salões e etc.",
    images: [
      "/smartslot/smartslot1.png",
      "/smartslot/smartslot2.png",
      "/smartslot/smartslot3.png",
      "/smartslot/smartslot4.png",
      "/smartslot/smartslot5.png",
      "/smartslot/smartslot6.png",
    ],
    github: "#",
    deploy: "#"
  },
  {
    title: "BarbeariaPRO",
    description: "Sistema de gestão para barbearias",
    images: [
      "/barbeariapro/barberpro-thumb.png",
      "/barbeariapro/barberpro2.png",
      "/barbeariapro/barberpro3.png",
      "/barbeariapro/barberpro4.png",
    ],
    github: "https://github.com/diegoshpn/barber-frontend",
    deploy: "https://barber-frontend-delta.vercel.app/login"
  },
  {
    title: "Pizzaria Modelo - Admin",
    description: "Sistema de gestão para pizzarias (projeto de estudo)",
    images: [
      "/pizzaria/pizzaria1.png",
      "/pizzaria/pizzaria2.png",
      "/pizzaria/pizzaria3.png",
      "/pizzaria/pizzaria4.png",
    ],
    github: "https://github.com/diegoshpn/pizzariafrontend",
    deploy: "https://pizzariafrontend.vercel.app"
  },
  {
    title: "Pizzaria Modelo",
    description: "Sistema para pedidos online de uma pizzaria (projeto de estudo)",
    images: [
      "/cardapio/cardapio1.png",
      "/cardapio/cardapio2.png",
      "/cardapio/cardapio3.png",
    ],
    github: "https://github.com/diegoshpn/cardapio-project",
    deploy: "https://cardapio-project-nine.vercel.app"
  },
  {
    title: "XPN Linktree",
    description: "Linktree personalizado para desenvolvedores",
    images: [
      "/xpnlink/xpnlink1.png",
      "/xpnlink/xpnlink2.png",
      "/xpnlink/xpnlink3.png",
      "/xpnlink/xpnlink4.png",
    ],
    github: "https://github.com/diegoshpn/xpnlinks",
    deploy: "https://xpnlinks.vercel.app"
  },
  {
    title: "Petshop Virtual",
    description: "LandingPage para petshops",
    images: [
      "/petshop/petshop1.png",
      "/petshop/petshop2.png",
      "/petshop/petshop3.png",
    ],
    github: "https://github.com/diegoshpn/petshopdev",
    deploy: "https://petshopdev-nu.vercel.app"
  }
]

function Projects(){
  return (
    <section id="projects" className="flex flex-col items-center gap-20 min-h-[900px] h-auto bg-radial from-gray-200 to-gray-300">      
      <div className="flex flex-col items-center justify-center gap-4" data-aos="flip-left">
        <h1 className="text-4xl text-[#4c8faa] font-bold mt-20">Projetos</h1>
        <p className="text-lg text-gray-500">Confira alguns projetos que desenvolvi</p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-20 pb-20" data-aos="zoom-in">
        {projects.map((project, index) => (
          <Card key={index} className="w-[400px] md:w-[500px] h-auto shadow-lg hover:border-[#4c8faa]">
            <CardHeader>
              <CardTitle className="text-[#4c8faa] text-2xl font-bold">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center mt-10">
              <Carousel>
                <CarouselContent className="w-[330px] md:w-[400px] h-[220px] md:h-[300px]">
                  {project.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex} className="flex items-center justify-center hover:scale-125 transition-transform duration-500 object-cover">
                      <Image 
                        src={image} 
                        width={350}
                        height={350}
                        alt={project.title} 
                        className="rounded" 
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer" />  
                <CarouselNext className="cursor-pointer" />
              </Carousel>
            </CardContent>
            <CardFooter className="flex flex-row mt-10 gap-4 justify-end">
              <Button className="bg-transparent text-[#4c8faa] hover:bg-[#4c8faa] hover:text-white cursor-pointer">
                <Link href={project.deploy} target="_blank" className="flex flex-row items-center gap-2">
                  <LuSquareArrowOutUpRight />
                  Live
                </Link>
              </Button>
              <Button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-300 text-white px-6 py-3 rounded-lg cursor-pointer">
                <Link href={project.github} target="_blank" className="flex flex-row items-center gap-2">
                  <SiGithub />
                  Repositório
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects;