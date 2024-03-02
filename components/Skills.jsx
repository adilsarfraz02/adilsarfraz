"use client";
import React from "react";
import { frontend, backend, database, devOps } from "./Skill";
import { motion } from "framer-motion";
import WhatiKnowModal from "./WhatiKnowModal";
const Skills = () => {
  return (
    <section id="skills" className="py-24 min-h-screen h-auto p-5">
      <h2 className="text-4xl py-12 text-center font-bold md:text-5xl relative items-center">
        What I Know <WhatiKnowModal />
      </h2>
      <div className="grid items-center gap-4 max-md:grid-cols-1 max-xl:grid-cols-2 relative grid-cols-4 py-2">
        <div className="p-4 pb-8 rounded-2xl dark:bg-white/5 bg-black/5 backdrop-blur-3xl border-2 dark:border-default-100 border-default-400">
          <h1 className="text-2xl px-2 py-4 font-bold">Frontend </h1>
          <div className=" flex p-3 py-6 dark:bg-white/5 bg-black/5 backdrop-blur-3xl place-content-center flex-wrap rounded-2xl text-center items-center gap-3  h-56">
            {frontend.map((skill, i) => (
              <motion.h2
                whileTap={{ scale: 0.8 }}
                className={`px-4 py-2 border-2 rounded-lg cursor-pointer
                  ${
                    i == 0
                      ? "border-orange-500"
                      : "" || i == 1
                      ? "border-pink-500"
                      : "" || i == 2
                      ? "border-yellow-500"
                      : "" || i == 3
                      ? "border-blue-500"
                      : "" || i == 4
                      ? "border-cyan-500 col-span-2"
                      : "" || i == 5
                      ? "border-red-500"
                      : "" || i == 6
                      ? "border-purple-500 col-span-1"
                      : ""
                  }`}
                transition={{ duration: 0.3, type: "spring" }}
              >
                {skill.name}
              </motion.h2>
            ))}
          </div>
        </div>
        <div className="p-4 pb-8 rounded-2xl dark:bg-white/5 bg-black/5 backdrop-blur-3xl border-2 dark:border-default-100 border-default-400">
          <h1 className="text-2xl px-2 py-4 font-bold">Backend </h1>
          <div className=" flex p-3 dark:bg-white/5 bg-black/5 backdrop-blur-3xl place-content-center flex-wrap rounded-2xl text-center items-center gap-3  h-48">
            {backend.map((skill, i) => (
              <motion.h2
                whileTap={{ scale: 0.8 }}
                className={`px-4 py-2 border-2 rounded-lg cursor-pointer
                  ${
                    i == 0
                      ? "border-orange-500"
                      : "" || i == 1
                      ? "border-pink-500"
                      : "" || i == 2
                      ? "border-yellow-500"
                      : "" || i == 3
                      ? "border-blue-500"
                      : "" || i == 4
                      ? "border-cyan-500 col-span-2"
                      : "" || i == 5
                      ? "border-red-500"
                      : "" || i == 6
                      ? "border-purple-500 col-span-1"
                      : ""
                  }`}

                transition={{ duration: 0.3, type: "spring" }}
              >
                {skill.name}
              </motion.h2>
            ))}
          </div>
        </div>
        <div className="p-4 pb-8 rounded-2xl dark:bg-white/5 bg-black/5 backdrop-blur-3xl border-2 dark:border-default-100 border-default-400">
          <h1 className="text-2xl px-2 py-4 font-bold">Database </h1>
          <div className=" flex p-3 dark:bg-white/5 bg-black/5 backdrop-blur-3xl place-content-center flex-wrap rounded-2xl text-center items-center gap-3  h-44">
            {database.map((skill, i) => (
              <motion.h2
                whileTap={{ scale: 0.8 }}
                className={`px-4 py-2 border-2 rounded-lg cursor-pointer
                  ${
                    i == 0
                      ? "border-orange-500"
                      : "" || i == 1
                      ? "border-pink-500"
                      : "" || i == 2
                      ? "border-yellow-500"
                      : "" || i == 3
                      ? "border-blue-500"
                      : "" || i == 4
                      ? "border-cyan-500 col-span-2"
                      : "" || i == 5
                      ? "border-red-500"
                      : "" || i == 6
                      ? "border-purple-500 col-span-1"
                      : ""
                  }`}

                transition={{ duration: 0.3, type: "spring" }}
              >
                {skill.name}
              </motion.h2>
            ))}
          </div>
        </div>
        <div className="p-4 pb-8 rounded-2xl dark:bg-white/5 bg-black/5 backdrop-blur-3xl border-2 dark:border-default-100 border-default-400">
          <h1 className="text-2xl px-2 py-4 font-bold">DevOps </h1>
          <div className=" flex p-3 dark:bg-white/5 bg-black/5 backdrop-blur-3xl place-content-center flex-wrap rounded-2xl text-center items-center gap-3  h-40">
            {devOps.map((skill, i) => (
              <motion.h2
                whileTap={{ scale: 0.8 }}
                className={`px-4 py-2 border-2 rounded-lg cursor-pointer
                  ${
                    i == 0
                      ? "border-orange-500"
                      : "" || i == 1
                      ? "border-pink-500"
                      : "" || i == 2
                      ? "border-yellow-500"
                      : ""
                  }`}

                transition={{ duration: 0.3, type: "spring" }}
              >
                {skill.name}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
