import { Card } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight,FaXTwitter,FaFacebook, FaLinkedinIn,FaGithub } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='grid grid-cols-2 py-2 md:grid-cols-4 md:gap-6 gap-3 text-center'>
        <Link href="https://github.com/adilsarfraz02" target='_blank'>
            <Card  isBlurred isPressable  className='flex flex-row justify-center py-2 px-4 gap-2 hover:dark:bg-white hover:!bg-black hover:text-white transition items-center bg-black/10 dark:bg-white/5'>
                <FaGithub /> Github <FaArrowRight className='-rotate-[60deg] hidden'/>
            </Card>
        </Link>
        <Link href="https://www.linkedin.com/in/adilsarfraz02/" target='_blank'>
            <Card  isBlurred isPressable  className='flex flex-row  justify-center py-2 hover:!bg-primary-500 hover:!text-white transition px-4 gap-2 items-center bg-black/10 dark:bg-white/5'>
                <FaLinkedinIn /> Linkedin <FaArrowRight className='-rotate-[60deg] hidden'/>
            </Card>
        </Link>
        <Link href="https://www.facebook.com/adilsarfraz02" target='_blank'>
            <Card  isBlurred isPressable  className='flex flex-row  justify-center py-2 px-4 gap-2 hover:!bg-primary-400 hover:text-white transition items-center bg-black/10 dark:bg-white/5'>
                <FaFacebook/> Facebook <FaArrowRight className='-rotate-[60deg] hidden '/>
            </Card>
        </Link>
        <Link href="">
        <Card isBlurred isPressable  className='flex flex-row justify-center py-2 px-4 gap-2 hover:!bg-black hover:text-white transition items-center bg-black/10 dark:bg-white/5'>
            <FaXTwitter /> Twitter <FaArrowRight className='-rotate-[60deg] hidden'/>
        </Card>
        </Link>
    </footer>
  )
}

export default Footer
