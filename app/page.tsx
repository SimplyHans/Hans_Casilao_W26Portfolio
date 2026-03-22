import Hero from '@/components/Hero';
import Project from '@/components/Project';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { FloatingNav } from '@/components/ui/FloatingNav';
import { FaLightbulb  } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";
import { FaTools } from "react-icons/fa";

import Footer from "@/components/Footer";
import Experience from '@/components/Experience';

export default function Home() {
  return (
    <main className="relative bg-[var(--color-custom-white)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        {/*<h1 className="text-4xl font-bold text-black">Test</h1>
         Example Image */}
         <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <BiSolidHome/>},
          {name: "Experience", link: "#experience", icon: <MdWork/>},
          {name: "Projects", link: "#projects", icon: <FaTools/>},
          {name: "Skills", link: "#skills", icon: <FaLightbulb/>},
          {name: "Contact", link: "#contact", icon: <IoMailOpen/>},
         ]}/>
        <Hero/>
        <Experience/>
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
