import React from 'react'
import Typewriter from 'typewriter-effect'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Link from 'next/link'

const onButtonClick = () => {
  // using Java Script method to get PDF file
  fetch('ErinChan_CV.pdf').then((response) => {
    response.blob().then((blob) => {
      // Creating new object of PDF file
      const fileURL = window.URL.createObjectURL(blob)
      // Setting various property values
      const alink = document.createElement('a')
      alink.href = fileURL
      alink.download = 'ErinChan_CV.pdf'
      alink.click()
    })
  })
}

const Main = () => (
  <div id="home" className="w-full h-screen text-center">
    <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
      <div>
        <p className="uppercase text-sm tracking-widest text-white-600">
          You ask, I code.
        </p>
        <h1 className="py-4 text-white-700">
          Hi, I&apos;m<span className="text-[#5651e5]"> Erin Chan</span>
        </h1>
        <h1 className="py-2 text-white-700">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('A Front-End Web Developer')
                .pauseFor(50)
                .start()
            }}
          />
        </h1>
        <p className="py-4 text-white-600 max-w-[70%] m-auto">
          I focus on building responsive and interactive front-end web applications.
        </p>
        <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
          <Link href="https://www.linkedin.com/in/erinchanhk/">
            <div className="rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </Link>
          <Link href="https://github.com/erinerinchan">
            <div className="rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
          </Link>
          <Link href="mailto:erinchanyh@gmail.com">
            <div className="rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </Link>
          <button type="button" onClick={onButtonClick}>
            <div className="rounded-full shadow-lg shadow-black-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default Main
