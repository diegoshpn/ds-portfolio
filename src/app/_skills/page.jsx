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
  return (
    <section className="flex justify-center w-full min-h-[800px] bg-radial from-gray-900 to-gray-800">
      <div className="flex flex-col items-center justify-center mt-10 md:-mt-20 gap-20 w-full max-w-7xl">
        <p className="text-4xl text-gray-300 font-bold" data-aos="fade-down">Minhas Especialidades</p>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-20" data-aos="fade-up">
          {techSkills.map((skill, index) => (
            <Magnet padding={50} disabled={false} magnetStrength={5} key={index}>
              <div className="flex flex-col items-center justify-center gap-3 w-28 h-28 md:w-40 md:h-40 cursor-pointer bg-[#1c343d] border border-b-6 border-[#4c8faa] rounded-tr-4xl text-[#4c8faa] hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300">
                {skill.logo}
                <p className="font-bold">{skill.name}</p>
              </div>
            </Magnet>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills;