import React from 'react'
import XpCards from './ui/XpCards'

const Experience = () => {
  return (
    <div id="experience" className="mb-15 2xl:mb-20 w-4/5 max-w-5xl mx-auto">
        <h2 className="font-mono bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent font-bold text-3xl lg:text-3xl text-center mb-6">Professional work experience</h2>


        
        <XpCards 
        pos="Mobile App Developer" 
        company="Enactus George Brown" 
        startDate="May 2025" 
        endDate="Aug. 2025"
        desc={[
          "Accelerated development speed and ensured UI consistency by translating Figma prototypes into responsive, cross-platform interfaces using React Native and TypeScript.",
          "Improved mobile UX by designing and refining intuitive React Native screens based on user testing and team feedback, increasing user satisfaction.",
          "Reduced code duplication and simplified future development by building reusable React Native components for common UI patterns.",
        ]}
        />

        <XpCards 
        pos="Game UI Designer" 
        company="Freelancer" 
        startDate="Dec. 2021" 
        endDate="Mar. 2024"
        desc={[
          "Delivered responsive UI/UX designs for 23+ clients by translating business needs into functional layouts, achieving consistently high client satisfaction.",
          "Increased user retention and visual appeal by designing over 250 custom game icons using Krita and Pixlr Editor.",
          "Contributed to a game with 1.2B+ user visits by designing user interfaces that enhanced gameplay experience and visual consistency."
        ]}
        imgs={[
          "/uicommissionshowcase1.png",
          "/uicommissionshowcase2.png",
          "/uicommissionshowcase3.png",
          "/uicommissionshowcase4.png",
          "/uicommissionshowcase5.png",
          "/uicommissionshowcase6.png",
        ]}
        />

        {/* <XpCards 
        pos="Web Developer" 
        company="Enactus GBC" 
        startDate="May 2025" 
        endDate="Present"
        desc={[
          "Coming Soon",
        ]}/> */}
        
    </div>
  )
}

export default Experience