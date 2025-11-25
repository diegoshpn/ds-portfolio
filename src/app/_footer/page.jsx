import Link from "next/link";

function Footer(){
  return (
    <footer>
      <div className="w-full h-16 bg-linear-to-r from-gray-900 to-gray-800 border-t border-gray-700 flex items-center justify-center">
        <p className="text-gray-400 text-sm">
          Todos os direitos reservados &copy; {new Date().getFullYear()} -&nbsp;
          <Link href="https://www.diegosoaresdev.com.br" className="text-[#4c8faa] font-bold">
            Diego Soares
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer;