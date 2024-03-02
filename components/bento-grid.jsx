"use client"
import { cn } from "@/utils/cn";
import { FaCircleArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className={cn(
        "grid md:auto-rows-[19rem] grid-cols-1 md:grid-cols-3 gap-4 h-auto mx-auto p-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}) => {
  return (
      <motion.div
    whileTap={{ scale: 0.9 }}
      className={cn(
        "row-span-1 bg-black h-auto text-white dark:text-black rounded-xl relative group/bento transition duration-200  dark:bg-white/80 justify-between flex flex-col",
        className
      )}
      >
      <Link href={href} className="px-4 space-y-5">
      <div className="group-hover/bento:translate-x-2 ml-2 top-2 animate-appearance-in ease-in-out transition-all duration-200 ">
      <FaCircleArrowRight  className="w-9 -mt-6 mr-1 h-9 arrowAnim max-md:group-focus:/bento:arrowAnim max-md:block -rotate-45 arrow transition duration-200 delay-200 hidden group-hover/bento:block right-0 absolute top-0 "/>
        <div className="mt-12">
        {icon}
        </div>
        <div className="font-sans font-bold mb-2 text-3xl">
          {title}
        </div>
        <div className=" description duration-200 transition-all block font-sans font-normal text-base">
          {description}
        </div>
      </div>
        {header}
        </Link>
    </motion.div>

  );
};
