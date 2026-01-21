"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const contacts = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    info: "(85) 98699-8327",
    url: "https://api.whatsapp.com/send?phone=5585986998327&text=Olá, Diego. Gostei dos seus trabalhos e gostaria de conversar com você!",
    color: "from-green-500 to-green-600",
    iconColor: "text-green-500",
  },
  {
    name: "E-mail",
    icon: MdOutlineMail,
    info: "soares670@hotmail.com",
    url: "mailto:soares670@hotmail.com",
    color: "from-blue-500 to-blue-600",
    iconColor: "text-blue-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    info: "@diegoshpn",
    url: "https://instagram.com/diegoshpn",
    color: "from-pink-500 to-purple-600",
    iconColor: "text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    info: "@diegoshpn",
    url: "https://linkedin.com/in/diegoshpn/",
    color: "from-blue-600 to-blue-700",
    iconColor: "text-blue-600",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    info: "@diegoshpn",
    url: "https://github.com/diegoshpn",
    color: "from-gray-600 to-gray-800",
    iconColor: "text-gray-400",
  }
]

function Contact(){
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacts" className="relative flex justify-center w-full min-h-[600px] bg-radial from-gray-900 to-gray-800 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-800"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z;
                      M321.39,46.44c58-10.79,114.16-20.13,172-31.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,21,906.67,62,985.66,82.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,46.44Z;
                      M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            />
          </path>
        </svg>
      </div>

      <div ref={ref} className="relative z-10 flex flex-col items-center mt-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col text-center items-center justify-center gap-4"
        >
          <h1 className="text-4xl text-white font-bold">Contato</h1>
          <div className="border border-b-2 rounded w-25 border-[#4c8faa]"></div>
          <p className="text-md md:text-lg text-gray-400">Quer iniciar um projeto ou apenas trocar uma ideia? Será um prazer conversar com você.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-10 mt-10 w-full max-w-6xl px-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={contact.url}
                target="_blank"
                className="group relative"
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-3 text-white rounded-xl p-6 glass border border-white/10 hover:border-[#4c8faa]/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    <contact.icon className={`w-12 h-12 md:w-16 md:h-16 ${contact.iconColor} group-hover:drop-shadow-lg`} />
                  </div>
                  
                  <h1 className="text-sm md:text-base font-bold relative z-10">{contact.name}</h1>
                  <p className="text-gray-300 text-xs md:text-sm font-semibold relative z-10 text-center">{contact.info}</p>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact;