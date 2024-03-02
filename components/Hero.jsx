"use client";
import React, { useEffect } from "react";
import { Button, Image, Link } from "@nextui-org/react";
import { motion, stagger, useAnimate } from "framer-motion";
import { GithubIcon } from "./icons";

const words = `ADil sarfraz`;
let wordsArray = words.split(" ");

function Hero() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [scope.current]);

  return (
    <section
      id="Hero"
      className="h-screen mt-12 flex flex-col gap-6 max-md:px-3 items-center text-center"
    >
      <Image  src="/adil.svg" alt="ADil Sarfraz"

      width={400} className="rounded-3xl bg-gray-500/50" />
      <div>
        <motion.div ref={scope} className="text-7xl leading-10 max-md:leading-[3.6rem] mb-6 font-extrabold">
          {wordsArray.map((word, idx) => {
            return (
              <motion.span key={word + idx} className={`opacity-0  `} >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-xl mt-2 text-default-500"
        >
          I&#39;m a full stack developer, I love to build things and solve
          problems.
        </motion.p>
        <div className="flex justify-center gap-8  transition-all">
          <Link
            showAnchorIcon
            className={`mt-4 cursor-pointer group focus:outline-2 shadow-lg shadow-purple-900/50 focus:outline-default-100 hover:bg-pink-600 bg-purple-600 text-white rounded-3xl px-4`}
            target="_blank"
            download="ADIL Sarfraz"
            href="/adil-cv.pdf"
            as={Link}
            color="secondary"
            title="CV"
          >
            Resume
          </Link>
          <Button
            className="mt-4 w-fit rounded-3xl flex shadow-xl  focus:outline-2 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-default-100 border-2 border-default-400 dark:border-default-100"
            variant="bordered"
            href="https://github.com/adilsarfraz02"
            as={Link}
            target="_blank"
            title="Github"
          >
            <GithubIcon className="cursor-pointer" /> Github
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
