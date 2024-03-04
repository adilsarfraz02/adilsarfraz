"use client";
import { items } from "@/components/ProjectItems";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Head from "next/head";
const SingleProject = ({ params }) => {
  if (params.slug === items[0].slug) {
    return (
      <div className="flex max-md:flex-col flex-row z-50 px-4 gap-6 mt-16">
        <Head>
          <title>{items[0].title}</title>
        </Head>
        <div className="z-50 md:w-1/3 w-full px-2">
          <div className="flex gap-3 m flex-wrap">
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              2023
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              ChatGPT
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              Text to speech
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              Image  Generator
            </span>
          </div>
          <h1 className="text-3xl my-2 mt-12 md:text-5xl font-bold">
            {items[0].title}
          </h1>
          <p className="text-xl flex flex-wrap mb-12">{items[0].description}</p>
          <Link
            href={items[0].link}
            target="_blank"
            className="w-fit group transition"
          >
            <span className="underline transition group-active:scale-85 text-primary-500 text-2xl flex gap-2 items-center">
              View Project{" "}
              <FaArrowLeft className="rotate-[130deg] transition group-hover:rotate-[180deg] mt-2" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 w-full ">
          <Image
            
            src="/codemint/2.svg"
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/codemint/aboutdark.svg"
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src={items[0].img}
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/codemint/3.svg"
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/codemint/4.svg"
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/codemint/about.svg"
            alt={items[0].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
        </div>
      </div>
    );
  }
  if (params.slug === items[1].slug) {
    return (
      <div className="flex max-md:flex-col flex-row z-50 px-4 gap-6 mt-16">
        <Head>
          <title>{items[0].title}</title>
        </Head>
        <div className="z-50 md:w-1/3 w-full px-2">
          <div className="flex gap-3 m flex-wrap">
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              2023
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              Gallery
            </span>
          </div>
          <h1 className="text-3xl my-2 mt-6 md:text-5xl font-bold">
            {items[1].title}
          </h1>
          <p className="text-xl flex flex-wrap mb-2">{items[1].description}</p>
          <Link
            href={items[1].link}
            target="_blank"
            className="w-fit group transition"
          >
            <span className="underline transition group-active:scale-85 text-primary-500 text-2xl flex gap-2 items-center">
              View Project{" "}
              <FaArrowLeft className="rotate-[130deg] transition group-hover:rotate-[180deg] mt-2" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 w-full ">
          <Image
            
            src={items[1].img}
            alt={items[1].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bandbaja/singlePhoto.svg"
            alt={items[1].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bandbaja/servic.svg"
            alt={items[1].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bandbaja/service.svg"
            alt={items[1].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bandbaja/about.svg"
            alt={items[1].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
        </div>
      </div>
    );
  }
  if (params.slug === items[2].slug) {
    return (
      <div className="flex max-md:flex-col flex-row z-50 px-4 gap-6 mt-16">
        <div className="z-50 md:w-1/3 w-full px-2">
          <div className="flex gap-3 m flex-wrap">
            <span className="text-xl border-2 border-default-500 px-4 py-2 rounded-full">
              2023
            </span>
            <span className="text-xl border-2 border-default-500 px-4 py-2 rounded-full">
              Movies
            </span>
            <span className="text-xl border-2 border-default-500 px-4 py-2 rounded-full">
              Ticket Generator
            </span>
          </div>
          <h1 className="text-3xl my-2 mt-6 md:text-5xl font-bold">
            {items[2].title}
          </h1>
          <p className="text-xl flex flex-wrap mb-2">{items[2].description}</p>
          <Link
            href={items[2].link}
            target="_blank"
            className="w-fit group transition"
          >
            <span className="underline transition group-active:scale-85 text-primary-500 text-2xl flex gap-2 items-center">
              View Project{" "}
              <FaArrowLeft className="rotate-[130deg] transition group-hover:rotate-[180deg] mt-2" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 w-full ">
          <Image
            
            src="/bookmyseat/screen.svg"
            alt={items[2].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bookmyseat/singleMovie.svg"
            alt={items[2].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bookmyseat/movie.svg"
            alt={items[2].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src={items[2].img}
            alt={items[2].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
          <Image
            
            src="/bookmyseat/home.svg"
            alt={items[2].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
        </div>
      </div>
    );
  }
  if (params.slug === items[3].slug) {
    return (
      <div className="flex max-md:flex-col flex-row z-50 px-4 gap-6 mt-16">
        <div className="z-50 md:w-1/3 w-full px-2">
          <div className="flex gap-3 m flex-wrap">
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              2024
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              LLMS
            </span>
            <span className="text-xl border-2  border-default-500 px-4 py-2 rounded-full">
              Pharmacy Education
            </span>
          </div>
          <h1 className="text-3xl my-2 mt-12 md:text-5xl font-bold">
            {items[3].title}
          </h1>
          <p className="text-xl flex flex-wrap mb-12">{items[3].description}</p>
          <Link
            href={items[3].link}
            target="_blank"
            className="w-fit group transition"
          >
            <span className="underline transition group-active:scale-85 text-primary-500 text-2xl flex gap-2 items-center">
              View Project{" "}
              <FaArrowLeft className="rotate-[130deg] transition group-hover:rotate-[180deg] mt-2" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-6 md:w-3/4 w-full ">
          <Image
            
            src={items[3].img}
            alt={items[3].title}
            className="border border-default-100/50 shadow rounded-2xl"
          />
        </div>
      </div>
    );
  }
};
import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";
import Footer from "@/components/Footer";


export default function SingleProjects({ params }) {
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="md:py-6 px-6 !z-30"
      >
        <Link
          href={`/projects`}
          className="my-6 mx-4 hover:pl-6 text-xl shadow-xl group z-50 active:scale-85 absolute top-2 py-2 rounded-full dark:bg-white/50 text-white dark:text-black bg-black/50 hover:dark:bg-white/80 hover:bg-black/80 px-3 gap-2 flex items-center transition-all"
        >
          <FaArrowLeft className="group-hover:-translate-x-3 transition" /> Go
          Back
        </Link>
        <SingleProject params={params} />
      </motion.div>
      <div className="flex-col items-center justify-center flex">
        <Footer />
      </div>
    </>
  );
}
