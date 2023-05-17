import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Profile from '../public/assets/Profile.jpeg'

const About = () => (
  <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
    <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
        <h2 className="py-4">Who I Am</h2>
        <p className="py-2 text-white-600">After graduating with a degree in Journalism in 2019, I had worked as a reporter for 3 years. Despite my major at university, I had the chance to learn surface level coding there due to some of the courses I took - such as Data Visualization - where I learned to turn data into charts with codes.</p>
        <p className="py-2 text-white-600">Years later, I became enthused with learning how to make interactive websites - that&apos;s when I realised my passion for coding is much bigger than I thought.</p>
        <p className="py-2 text-white-600">In December 2021, I quitted my job, joining a full-stack web development bootcamp the following year in order to make a career transition into the IT industry. </p>
        <p className="py-2 text-white-600">Apart from working as a full-time front-end developer at the moment, I am also building projects - from front-end to back-end to full-stack - with technologies such as React and Next.js in my spare time.</p>
        <p className="py-2 text-white-600 underline cursor-pointer">
          <Link href="/#projects">Check out some of my latest projects.</Link>
        </p>
      </div>
      <div className="w-full h-auto m-auto shadow-xl shadow-black-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
        <Image className="rounded-xl" src={Profile} width="500" height="500" alt="" />
      </div>
    </div>
  </div>
)

export default About
