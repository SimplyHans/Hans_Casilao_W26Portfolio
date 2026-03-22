import React from 'react'
import ProjectTag from "./ui/Tags";
import { FaHtml5, FaReact  } from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiDotnet, SiJavascript, SiBootstrap } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { DiCss3 } from 'react-icons/di';
import { TbBrandMysql, TbFileTypeSql, TbBrandCSharp } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { ImGit } from "react-icons/im";
import { MdPermIdentity } from "react-icons/md";

const Skills = () => {
  return (
    <div id="skills" className="mb-35 2xl:mb-40 w-4/5 max-w-5xl mx-auto">
        <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center pb-6">Technical Skills</h2>

        <div className="mx-6 lg:mx-60">

            <h3 className="font-mono text-2x1 text-darkend mb-1">Languages</h3>
            <div className="flex flex-wrap gap-2">
                <ProjectTag 
                name="HTML" 
                icon={<FaHtml5/>}
                type="skill"/>

                <ProjectTag 
                name="CSS" 
                icon={<DiCss3/>}
                type="skill"/>

                <ProjectTag 
                name="JavaScript" 
                icon={<SiJavascript/>}
                type="skill"/>

                <ProjectTag 
                name="C#" 
                icon={<TbBrandCSharp/>}
                type="skill"/>

                <ProjectTag 
                name="SQL" 
                icon={<TbFileTypeSql/>}
                type="skill"/>
            </div>

            <h3 className="font-mono text-2x1 text-darkend  mt-4 mb-1">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-2">
                <ProjectTag 
                name="ASP.NET Core" 
                icon={<SiDotnet/>}
                type="skill"/>

                <ProjectTag 
                name="React Native" 
                icon={<FaReact/>}
                type="skill"/>

                <ProjectTag 
                name="Microsoft Identity" 
                icon={<MdPermIdentity/>}
                type="skill"/>

                <ProjectTag    
                name="Bootstrap" 
                icon={<SiBootstrap/>}
                type="skill"/>

                <ProjectTag    
                name="Tailwind" 
                icon={<SiTailwindcss/>}
                type="skill"/>
            </div>

            <h3 className="font-mono text-2x1 text-darkend  mt-4 mb-1">Database</h3>
            <div className="flex flex-wrap gap-2">
                <ProjectTag 
                name="MySQL" 
                icon={<TbBrandMysql/>}
                type="skill"/>

                <ProjectTag 
                name="PostgreSQL" 
                icon={<BiLogoPostgresql/>}
                type="skill"/>

                <ProjectTag 
                name="Supabase" 
                icon={<SiSupabase/>}
                type="skill"/>
            </div>

            <h3 className="font-mono text-2x1 text-darkend  mt-4 mb-2">Other</h3>
            <div className="flex flex-wrap gap-2">
                <ProjectTag 
                name="Git" 
                icon={<ImGit/>}
                type="skill"/>

                <ProjectTag 
                name="Microsoft Azure" 
                icon={<VscAzure/>}
                type="skill"/>
            </div>





        </div>

    </div>
  )
}

export default Skills