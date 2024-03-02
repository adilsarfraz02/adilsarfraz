"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function WhatiKnowModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


  return (
    <>
      <Tooltip
        shadow="lg"
        content={
          <span>
            About me
          </span>
        }
      >
        <motion.span
          onClick={onOpen}
          whileTap={{ scale: 0.5 }}
          className="text-lg absolute max-md:mt-3 shadow-lg mt-5 select-none hover:bg-white/5 px-2  ml-4 cursor-pointer border-2 dark:border-default-100 border-default-400 rounded-2xl"
        >
          ?
        </motion.span>
      </Tooltip>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={true}
        placement="center"
        backdrop="blur"
      >
        <ModalContent className="">
          {(onClose) => (
            <>
              <ModalHeader className="text-2xl">
                What I Know <span className="text-purple-500 ml-1"> ?</span>
              </ModalHeader>
              <Divider />
              <ModalBody>
                <p>
                  I possess a versatile skill set in web development, covering{" "}
                  <span className="text-orange-500 underline">HTML 5</span>,{" "}
                  <span className="text-orange-500 underline">CSS</span>, and{" "}
                  <span className="text-orange-500 underline">JavaScript</span>{" "}
                  for creating engaging frontend interfaces. My proficiency
                  extends to{" "}
                  <span className="text-cyan-500 underline">React js</span>,{" "}
                  <span className="text-cyan-500 underline">Tailwind CSS</span>,{" "}
                  <span className="text-cyan-500 underline">Next js</span>, and{" "}
                  <span className="text-cyan-500 underline">TypeScript</span> ,
                  ensuring the development of scalable and interactive
                  applications. <br />
                  On the backend, I am adept with{" "}
                  <span className="text-pink-500 underline">Node js</span>,{" "}
                  <span className="text-pink-500 underline">Express js</span>,{" "}
                  <span className="text-pink-500 underline">Next-Auth</span>,{" "}
                  <span className="text-pink-500 underline">PHP</span>, and{" "}
                  <span className="text-pink-500 underline">Django</span>,
                  enabling me to build robust server-side logic and
                  authentication systems. <br />
                  Database management is a forte, with expertise in MySQL,
                  MongoDB, Firebase, and GraphQL. Additionally, I navigate the
                  DevOps landscape using{" "}
                  <span className="text-yellow-500 underline">Git</span>,{" "}
                  <span className="text-yellow-500 underline">AWS</span>, and{" "}
                  <span className="text-yellow-500 underline">Docker</span> for
                  efficient version control, cloud computing, and
                  containerization. In essence, I bring a holistic skill set to
                  the table, ensuring end-to-end development excellence.
                </p>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
