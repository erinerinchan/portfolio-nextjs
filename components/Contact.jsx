/* eslint-disable no-shadow */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import { sendContactForm } from '../lib/api'

const initValues = { name: '', number: '', email: '', subject: '', message: '' }
const initState = { isLoading: false, error: '', values: initValues }

const Contact = () => {
  const toast = useToast()
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading, error } = state

  const onBlur = ({ target }) => setTouched((prev) => ({ ...prev, [target.name]: true }))

  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value
    }
  }))

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true
    }))
    try {
      await sendContactForm(values)
      setTouched({})
      setState(initState)
      toast({
        title: 'Message sent.',
        status: 'success',
        duration: 2000,
        position: 'top'
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message
      }))
    }
  }

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

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img className="rounded-xl hover:scale-105 ease-in duration-300" src="https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="/" />
              </div>
              <div>
                <h2 className="py-2">Erin Chan</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I am available for freelance gigs. Contact me and let&apos;s talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p4">
            <div className="p-4" />
            {error && (
            <Text color="red.300" my={4} fontSize="xl">
              {error}
            </Text>
            )}
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">

              <FormControl isRequired isInvalid={touched.name && !values.name}>
                <div className="flex flex-col">
                  <FormLabel className="uppercase text-sm py-2">Name</FormLabel>
                  <Input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-900" type="text" name="name" value={values.name} onChange={handleChange} onBlur={onBlur} />
                  <FormErrorMessage>
                    Required
                  </FormErrorMessage>
                </div>
              </FormControl>

              <FormControl isRequired isInvalid={touched.number && !values.number}>
                <div className="flex flex-col">
                  <FormLabel className="uppercase text-sm py-2">Phone Number</FormLabel>
                  <Input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-900" type="text" name="number" value={values.number} onChange={handleChange} onBlur={onBlur} />
                  <FormErrorMessage>
                    Required
                  </FormErrorMessage>
                </div>
              </FormControl>

            </div>

            <FormControl isRequired isInvalid={touched.email && !values.email}>
              <div className="flex flex-col py-2">
                <FormLabel className="uppercase text-sm py-2">Email</FormLabel>
                <Input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-900" type="email" name="email" value={values.email} onChange={handleChange} onBlur={onBlur} />
                <FormErrorMessage>
                  Required
                </FormErrorMessage>
              </div>
            </FormControl>

            <FormControl isRequired isInvalid={touched.subject && !values.subject}>
              <div className="flex flex-col py-2">
                <FormLabel className="uppercase text-sm py-2">Subject</FormLabel>
                <Input className="border-2 rounded-lg p-3 flex border-gray-300 bg-gray-900" type="text" name="subject" value={values.subject} onChange={handleChange} onBlur={onBlur} />
                <FormErrorMessage>
                  Required
                </FormErrorMessage>
              </div>
            </FormControl>

            <FormControl isRequired isInvalid={touched.message && !values.message}>
              <div className="flex flex-col py-2">
                <FormLabel className="uppercase text-sm py-2">Message</FormLabel>
                <Textarea className="border-2 rounded-lg p-3 border-gray-300 bg-gray-900" rows="10" type="text" name="message" value={values.message} onChange={handleChange} onBlur={onBlur} />
                <FormErrorMessage>
                  Required
                </FormErrorMessage>
              </div>
            </FormControl>
            <Button
              className="w-full p-4 text-gray-100 mt-4 border-2 border-gray-300 bg-gray-900"
              type="button"
              colorScheme="blue"
              variant="outline"
              isLoading={isLoading}
              disabled={!values.name || !values.number || !values.email || !values.subject || !values.message}
              onClick={onSubmit}
            >
              Send Message
            </Button>

          </div>
        </div>

        <div>
          <Link href="flex justify-center py-12" />
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-black-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
