"use client"
/* eslint-disable */

import React from 'react'
import { motion } from 'framer-motion'
import ContactModal from './SpringModal'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
function Contact() {
  return (
    <motion.div
    className='min-h-[60vh] flex flex-col items-center py-12'
        initial={{ opacity: 0, }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl pt-20 pb-6 text-center font-bold md:text-8xl relative items-center">
        Contact me
      </h1>
      <Link
      href='mailto:adilsarfr00@gmail.com'
            className="mt-4 px-6 w-fit text-3xl flex shadow-xl  text-center dark:bg-white dark:text-black h-14 rounded-full bg-black/90 text-white focus:outline-2 focus:outline-default-100 border-2 border-default-400 dark:border-default-100"
            >
        Let's Chat
      </Link>
    </motion.div>
  )
}

export default Contact
