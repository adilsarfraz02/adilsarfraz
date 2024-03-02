"use client";
import Footer from "@/components/Footer";
import { items } from "@/components/ProjectItems";
import { motion, spring } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - </title>
      </Head>
      <motion.div className="py-6 px-6 !z-30">
        <Link
          href={`/`}
          className="my-6 mx-4 hover:pl-6 text-xl shadow-xl active:scale-85 group z-50 absolute top-2 py-2 rounded-full dark:bg-white/50 text-white dark:text-black bg-black/50 hover:dark:bg-white/80 hover:bg-black/80 px-3 gap-2 flex items-center transition-all"
        >
          <FaArrowLeft className="group-hover:-translate-x-3  transition" />
          Home
        </Link>
        <h1 className="text-3xl md:text-7xl pb-12 text-center font-bold relative items-center">
          Projects
        </h1>
        <motion.div
          initial={{ opacity: 0, translateY: 28 }}
          animate={{ opacity: 1, translateY: 0 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-6"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="border-2 z-30 border-default-500/20 active:scale-90 hover:border-default-500/40 transition-all p-2 rounded-2xl shadow-xl backdrop-blur-xl"
            >
              <Link href={item.href}>
                <div
                  className="h-52 bg-cover bg-gray-500 bg-center rounded-2xl"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="p-4">
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="text-default-500">{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <div className="flex-col items-center justify-center flex">
        <Footer />
      </div>
    </>
  );
}
