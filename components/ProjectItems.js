"use client"
import { motion } from "framer-motion";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
const ImageContainer = ({img}) => {
    return (
      <motion.div className="w-full h-full bg-cover rounded-t-xl border-x border-t transition-all ease-in delay-200 duration-250 border-white/[0.2] bg-no-repeat" style={{ backgroundImage: `url(${img})` }} />
    );
  }
export
const items = [
  {
    title: "Codemint-Ai",
    description: "The Codemint Project about Ai Tools : ChatGPT ✨,Image Generator🙈, Text to Speech👻.",
    header:  <ImageContainer img='/codemint/1.svg'/>,
    img:'/codemint/1.svg',
    link:'https://codemint-ai.vercel.app/',
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    href:'/projects/codemint-ai',
    slug:'codemint-ai'
  },
  {
    title: "The Band Baja",
    description: "The beauty of thoughtful and functional design.",
    header:  <ImageContainer img='/bandbaja/main.svg'/>,
    img:'/bandbaja/main.svg',
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link:'https://thebandbaja.live/',
    href:'/projects/the-band-baja',
    slug:'the-band-baja'
  },


  {
    title: "Book My Seat",
    description:
      "A Movies Ticket app for booking seats in a cinema.",
      header:  <ImageContainer img='/bookmyseat/main.svg'/>,
      link:'https://bookmy-seat.vercel.app/',
      img:'/bookmyseat/main.svg',
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    href:"/projects/book-my-seat",
    slug:'book-my-seat'
  },
  {
    title: "Pu Pharma",
    description: "This Project is about Pharmacy Management System for Pu Pharma.",
    header:  <ImageContainer img='/pupharma/main.svg'/>,
    img:'/pupharma/main.svg',
    link:'https://pupharma.vercel.app',
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    href:'/projects/pu-pharma',
    slug:'pu-pharma'
  },

];

