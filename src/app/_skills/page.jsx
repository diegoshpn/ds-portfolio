"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiGithub, SiGit, SiPostgresql, SiPrisma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Magnet from "@/components/Magnet";

const techSkills = [
  {
    logo: <SiJavascript className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "JavaScript",
  },
  {
    logo:<SiTypescript className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "TypeScript",
  },
  {
    logo: <SiReact className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "React",
  },
  {
    logo: <SiNextdotjs className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "Next.js",
  },
  {
    logo: <FaNodeJs className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "Node.js",
  },
  {
    logo: <SiTailwindcss className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "TailwindCSS",
  },
  {
    logo: <SiPostgresql className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "PostgreSQL",
  },
  {
    logo: <SiPrisma className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "Prisma",
  },
  {
    logo: <SiGithub className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "GitHub",
  },
  {
    logo: <SiGit className="w-14 h-14 md:w-24 md:h-24 p-2" />,
    name: "Git",
  }
]

function Skills(){
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="flex justify-center w-full min-h-[800px] bg-radial from-gray-900 to-gray-800">
      <div ref={ref} className="flex flex-col items-center justify-center mt-10 md:-mt-20 mb-20 md:mb-2 gap-20 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-4xl text-gray-300 font-bold text-center">Minhas Especialidades</h1>
          <div className="border border-b-2 rounded w-44 border-[#4c8faa]"></div>
          <p className="text-gray-400 text-center max-w-2xl">Busco sempre usar as principais tecnologias do mercado para entregar soluções eficientes e modernas.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 w-full px-4">
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <Magnet padding={50} disabled={false} magnetStrength={5}>
                <div className="flex flex-col items-center justify-center gap-3 w-28 h-28 md:w-40 md:h-40 cursor-pointer bg-[#1c343d] border-2 border-[#4c8faa] rounded-xl text-[#4c8faa] hover:shadow-2xl hover:shadow-cyan-500/50 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#4c8faa]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">{skill.logo}</div>
                  <p className="font-bold relative z-10 text-sm md:text-base">{skill.name}</p>
                </div>
              </Magnet>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;