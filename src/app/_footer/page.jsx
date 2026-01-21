"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Footer(){
  return (
    <footer className="relative">
      <div className="w-full h-16 bg-linear-to-r from-gray-900 to-gray-800 border-t border-gray-700/50 flex items-center justify-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-sm"
        >
          Todos os direitos reservados &copy; {new Date().getFullYear()} -&nbsp;
          <Link 
            href="https://www.diegosoaresdev.com.br" 
            className="text-[#4c8faa] font-bold hover:text-cyan-400 transition-colors duration-200"
          >
            Diego Soares
          </Link>
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer;