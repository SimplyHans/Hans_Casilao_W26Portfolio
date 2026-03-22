import React from 'react'
import { LiaLinkedinIn } from 'react-icons/lia'
import { VscGithub } from 'react-icons/vsc'
import MainButton from './ui/MainButton'

const Footer = () => {
  return (
    <div id="footer" className="my-4 w-4/5 max-w-5xl m-auto flex flex-row justify-between items-center text-white">
      <p className="font-mono text-base text-darkend">&copy; 2025 Hans Russell Casilao.</p>

      <div className="flex flex-row gap-2">
        <a href="https://www.linkedin.com/in/hans-russell-casilao-41107a31b/" title="Linkedin" target="_blank" rel="noopener noreferrer">
          <MainButton
            icon={<LiaLinkedinIn className="text-base" />}
            position="center"
            border="bg-white/5 rounded-xl border-white/20"
            otherClasses="w-10 h-10 hover:bg-amber-500/20"
          />
        </a>

        <a href="https://github.com/SimplyHans" title="Github" target="_blank" rel="noopener noreferrer"
        >
          <MainButton
            icon={<VscGithub className="text-base" />}
            position="center"
            border="bg-white/5 rounded-xl border-white/20"
            otherClasses="w-10 h-10 hover:bg-amber-500/20"
          />
        </a>
      </div>
    </div>
  )
}

export default Footer