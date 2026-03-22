import React from 'react'
import { RiArrowRightUpLine } from "react-icons/ri";
import MainButton from './ui/MainButton';


const Contact = () => {
  return (
    <div id="contact" className="mb-20 2xl:mb-25 w-4/5 max-w-5xl mx-auto">

        <div className="relative rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-600 border-amber-300 border-3 px-8 py-10 mx-auto font-mono flex flex-col md:flex-row justify-between gap-8">
            <div className="">
                <h2 className="text-black font-black text-3xl mb-2">Let&apos;s create something amazing!</h2>
                <p className="text-black text-xl font-medium">Connect with me through email and discuss how I can help achieve your goals!</p>
            </div>


            <div className="">
                <a href="mailto:hans.casilao@gmail.com" title='Contact Me'>
                    <MainButton 
                    title="Contact Me" 
                    icon={<RiArrowRightUpLine className="text-lg"/>}  
                    position="right" 
                    border="rounded-2xl bg-darkend border-transparent"
                    otherClasses="mt-6 w-44 h-14 text-white hover:text-amber-300"
                />
                </a>
            </div>

        </div>
    </div>
  )
}

export default Contact