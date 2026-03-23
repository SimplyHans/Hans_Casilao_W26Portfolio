"use client"

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import MainButton from '@/components/ui/MainButton'
import { RiArrowLeftLine } from "react-icons/ri";
import Hero from '@/components/casestudy/Hero'
import CapstoneShiftFlow from '@/components/casestudy/CapstoneShiftFlow'

export default function CaseStudyPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string

  const handleBackToPortfolio = () => {
    router.push('/#academic-samples')
    setTimeout(() => {
      const section = document.getElementById('academic-samples')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const caseStudies: Record<string, { imgUrl: string; secondaryClr: string; title: string }> = {
    'shift-flow': {
      imgUrl: "/ShiftFlowUI.png",
      secondaryClr: "text-[#6579FF]",
      title: 'Shift Flow (Capstone)',
    },
  }

  const caseStudy = caseStudies[slug] || {
    imgUrl: "",
    secondaryClr: "bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent",
    title: 'ERROR 404',
  }

  const isShiftFlow = slug === 'shift-flow'

  return (
    <main className="relative bg-[var(--color-custom-white)] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 min-h-screen">
      <div className=" w-full py-20 px-2 sm:px-4">
        <div onClick={handleBackToPortfolio}>
          <MainButton
            title="Back to portfolio"
            icon={<RiArrowLeftLine className="text-lg"/>}
            position="left"
            border="bg-white/8 border-white/30 rounded-xl hover:bg-white/60 hover:border-white"
            otherClasses="mb-8 w-44 h-10 hover:text-black cursor-pointer"
            clickFunction={handleBackToPortfolio}
          />
        </div>

        <Hero imgUrl={caseStudy.imgUrl}/>
        <div className="max-w-4xl mx-auto px-2">
          <h1 className={`font-mono font-bold text-4xl lg:text-5xl mb-8 ${caseStudy.secondaryClr}`}>
            {caseStudy.title}
          </h1>

          {isShiftFlow ? (
            <CapstoneShiftFlow />
          ) : (
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200/85 font-mono text-lg leading-relaxed">
                This case study does not exist.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

