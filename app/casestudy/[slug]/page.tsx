"use client"

import React from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import MainButton from '@/components/ui/MainButton'
import { RiArrowLeftLine } from "react-icons/ri";
import Hero from '@/components/casestudy/Hero'

export default function CaseStudyPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const handleBackToProjects = () => {
    router.push('/#projects')
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  // You can add case study data here or fetch it based on the slug
  const caseStudies: Record<string, { imgUrl: string, secondaryClr: string, title: string; content: string }> = {
    'shift-flow': {
      imgUrl:"/ShiftFlowUI.png",
      secondaryClr: "text-[#6579FF]",
      title: 'Shift Flow (Capstone)',
      content: 'Case study not available at this time. Try again later.'
    }
    // Add more case studies as needed
  }

  const caseStudy = caseStudies[slug] || {
    imgUrl: "",
    secondaryClr: "bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent",
    title: 'ERROR 404',
    content: 'This case study doesnt exist'
  }

  return (
    <main className="relative bg-[var(--color-custom-white)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 min-h-screen">
      <div className=" w-full py-20">
        <div onClick={handleBackToProjects}>
          <MainButton
            title="Back to Projects"
            icon={<RiArrowLeftLine className="text-lg"/>}
            position="left"
            border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
            otherClasses="mb-8 w-40 h-10 hover:text-black cursor-pointer"
            clickFunction={handleBackToProjects}
          />
        </div>

        <Hero imgUrl={caseStudy.imgUrl}/>
        <div className="max-w-4xl mx-auto">
          <h1 className={`font-mono font-bold text-4xl lg:text-5xl mb-2 ${caseStudy.secondaryClr}`}>
            {caseStudy.title}
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-200/85 font-mono text-lg leading-relaxed">
              {caseStudy.content}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

