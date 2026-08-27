import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { useEffect, useState } from "react";

const Hero = () => {
const texts = [
  "I build web experiences",
  "I create digital solutions",
  "I develop interactive applications",
  "I test and improve software",
];

const [text, setText] = useState("");
const [textIndex, setTextIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

useEffect(() => {
  const currentText = texts[textIndex];

  const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentText.substring(0, text.length + 1));

        if (text.length + 1 === currentText.length) {
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setText(currentText.substring(0, text.length - 1));

        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, textIndex]);


  return (
    <section className="relative w-full h-screen mx-auto bg-[#050816]">
      <div className={` ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

       <div>
          <h1 className={styles.heroHeadText}>
            Hi, I'm <span className="text-[#7C3AED]">Rio</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <span className="block whitespace-nowrap">
              {text}
              <span className="animate-pulse">|</span>
            </span>

            <span className="block whitespace-nowrap">
              with curiosity and a passion for learning.
            </span>
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute left-0 z-10 flex justify-center w-full bottom-2">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero