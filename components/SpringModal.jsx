"use client"
import { Button } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Link from "next/link";
import toast from "react-hot-toast";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-4 grid place-content-center">
      <Button
          onClick={() => setIsOpen(true)}
            className="mt-4 w-fit text-3xl flex shadow-xl  text-center dark:bg-white dark:text-black h-14 rounded-full bg-black/90 text-white focus:outline-2 focus:outline-default-100 border-2 border-default-400 dark:border-default-100"
>
        Let's Chat
      </Button>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen }) => {

  const form = useRef();
  const [btn,setBtn] = useState(false);
  const serviceID = 'default_service';
   const templateID = 'template_m5df4v2';
   const userID = '2KNToZlxErqVc9t2_';

  const sendEmail = (e) => {
    e.preventDefault();
    setBtn(true);
    try {
      toast.success('Message Sent Successfully');
      emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          setBtn(false);
      }, (error) => {
          setBtn(false);
          toast.error('Failed to send message');
      });
      form.current.reset();
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message');
      setBtn(false);
    }
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-hidden cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="dark:bg-white/90 dark:text-black flex flex-col gap-5 h-100vh bg-black/90 backdrop-blur-3xl text-white p-6 rounded-3xl w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
           <h1 className="text-5xl text-center py-3 dark:text-black font-bold text-white">
            Let's chat
            </h1>
            <form className="flex flex-col gap-3" ref={form} onSubmit={sendEmail}>
            <input type="text" name="to_name" id="to_name" placeholder="Name" required className="w-full  py-3 bg-transparent border-2 border-default-500 px-4 rounded-2xl"/>
            <input type="email" name="to_email" id="to_email" placeholder="Email" required className="w-full py-3 bg-transparent border-2 border-default-500 px-4 rounded-2xl"/>
            <textarea name="to_message" id="to_message" placeholder="Message" required className="w-full py-4 bg-transparent border-2 px-4 border-default-500 rounded-2xl"/>
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              disabled={btn}
              className={`disabled:opacity-50 w-full py-4 dark:bg-black bg-white text-black dark:text-white rounded-3xl`}
              onClick={(e) => {setBtn(true)}}
            >
                Send
            </motion.button>
            <Link href={`/`} className="text-center pt-2 text-lg underline">ADil Sarfraz </Link>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;