"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col sm:flex-row justify-center items-center -mt-10 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-reverse">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/aramis-soto.png"
            alt="Ricardo portrait"
            width={900}
            height="2000"
            quality="95"
            priority={true}
            className="mb-0 sm:mb-20 sm:mr-10"
          />
        </motion.div>
      </div>

      <div className="max-w-sm flex flex-col">
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Aramis Soto.</span> I'm a{" "}
          <span className="font-bold">Spanish and English tutor</span> with{" "}
          <span className="font-bold">10 years</span> of experience. I like{" "}
          <span className="font-bold">food, travelling and extreme sports</span>
          .
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-col items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-[#5e434a] text-white mr-2.5 px-7 py-3 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <div className="flex gap-2">
            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/aramis-soto-494b57272/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
