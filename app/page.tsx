import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { FloatingNav } from '@/components/ui/FloatingNav';
import {
  FaLightbulb,
  FaUser,
  FaGraduationCap,
  FaFolderOpen,
  FaFlagCheckered,
} from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { BiSolidHome } from "react-icons/bi";

import Footer from "@/components/Footer";
import Experience from '@/components/Experience';
import AboutSection from '@/components/AboutSection';
import AcademicCredentials from '@/components/AcademicCredentials';
import AcademicSamples from '@/components/AcademicSamples';
import CapstoneHighlight from '@/components/CapstoneHighlight';

export default function Home() {
  return (
    <main className="relative bg-[var(--color-custom-white)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
         <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <BiSolidHome/>},
          {name: "About", link: "#about", icon: <FaUser/>},
          {name: "Credentials", link: "#credentials", icon: <FaGraduationCap/>},
          {name: "Samples", link: "#academic-samples", icon: <FaFolderOpen/>},
          {name: "Capstone", link: "#capstone", icon: <FaFlagCheckered/>},
          {name: "Skills", link: "#skills", icon: <FaLightbulb/>},
          {name: "Contact", link: "#contact", icon: <IoMailOpen/>},
         ]}/>
        <Hero/>
        <AboutSection/>
        <AcademicCredentials/>
        <AcademicSamples/>
        <Experience/>
        <CapstoneHighlight/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
