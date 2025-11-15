import About from "./_about/page";
import Hero from "./_hero/page";
import Skills from "./_skills/page";
import Projects from "./_projects/page"
import Contact from "./_contact/page";

function Page(){
  return (
    <div className="flex flex-col w-full h-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Page;