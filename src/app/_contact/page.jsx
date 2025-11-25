import Link from "next/link";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGithub } from "react-icons/si";

const contacts = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-12 h-12 md:w-18 md:h-18 text-[#4c8faa]" />,
    info: "(85) 98699-8327",
    url: "https://api.whatsapp.com/send?phone=5585986998327&text=Olá, Diego. Gostei dos seus trabalhos e gostaria de conversar com você!"
  },
  {
    name: "E-mail",
    icon: <MdOutlineMail className="w-12 h-12 md:w-18 md:h-18 text-[#4c8faa]" />,
    info: "soares670@hotmail.com",
    url: "mailto:soares670@hotmail.com"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="w-12 h-12 md:w-18 md:h-18 text-[#4c8faa]" />,
    info: "@diegoshpn",
    url: "https://instagram.com/diegoshpn"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-12 h-12 md:w-18 md:h-18 text-[#4c8faa]" />,
    info: "@diegoshpn",
    url: "https://linkedin.com/in/diegoshpn/"
  },
  {
    name: "GitHub",
    icon: <SiGithub className="w-12 h-12 md:w-18 md:h-18 text-[#4c8faa]" />,
    info: "@diegoshpn",
    url: "https://github.com/diegoshpn"
  }
]

function Contact(){
  return (
    <section id="contacts" className="flex justify-center w-full min-h-[600px] bg-radial from-gray-900 to-gray-800">
      <div className="flex flex-col items-center mt-20 w-full">
        <div className="flex flex-col text-center items-center justify-center gap-4" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h1 className="text-4xl text-white font-bold">Contato</h1>
          <div className="border border-b-2 rounded w-25 border-[#4c8faa]"></div>
          <p className="text-md md:text-lg text-gray-400">Quer iniciar um projeto ou apenas trocar uma ideia? Será um prazer conversar com você.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 md:gap-20 mb-10" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          {contacts.map((contact, index) => (
            <Link
              href={contact.url}
              className="flex flex-col items-center gap-2 text-white rounded-lg p-6 hover:bg-white/10 hover:scale-120 transition-transform duration-500 cursor-pointer mt-30"
              key={index}
              target="_blank"
            >
              {contact.icon}
              <h1 className="text-sm md:text-lg font-bold">{contact.name}</h1>
              <p className="text-gray-300 text-sm md:text-lg font-semibold">{contact.info}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact;