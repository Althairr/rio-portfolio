import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { github, linkedin, instagram } from "../assets";

const socials = [
  {
    name: "Instagram",
    icon: instagram,
    url: "https://instagram.com/ikadekrioo",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/i-kadek-rio-ap",
  },
  {
    name: "GitHub",
    icon: github,
    url: "https://github.com/althairr",
  },
];

const Socials = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Let's connect</p>
          <h2 className={styles.sectionHeadText}>Find me online.</h2>
        </motion.div>
      </div>

      <div className={`-mt-16 pb-14 ${styles.paddingX}`}>
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn("", "spring", index * 0.2, 0.75)}
              whileHover={{ y: -5 }}
              className="
                group relative
                flex items-center
                gap-5
                w-full md:w-[280px]
                px-6 py-5
                rounded-2xl
                bg-black-200/80
                border border-white/10
                overflow-hidden
                transition-all duration-300
                hover:border-[#915EFF]/40
              "
            >
              {/* Purple glow */}
              <div
                className="
                  absolute -right-10 -top-10
                  w-24 h-24
                  bg-[#915EFF]/10
                  rounded-full
                  blur-2xl
                  group-hover:bg-[#915EFF]/25
                  transition-all duration-500
                "
              />

              <div className="
                relative z-10
                flex items-center justify-center
                w-12 h-12
                rounded-xl
                bg-white/5
                border border-white/10
                group-hover:border-[#915EFF]/40
                transition-all duration-300
              ">
                <img
                  src={social.icon}
                  alt={social.name}
                  className="object-contain w-6 h-6"
                />
              </div>

              <div className="relative z-10 flex-1">
                <p className="text-white font-semibold text-[16px]">
                  {social.name}
                </p>

                <p className="mt-1 text-secondary text-[12px]">
                  {social.name === "Instagram" && "@ikadekrioo"}
                  {social.name === "LinkedIn" && "I Kadek Rio Arta Putra"}
                  {social.name === "GitHub" && "@althairr"}
                </p>
              </div>

              <span
                className="
                  relative z-10
                  text-secondary
                  text-xl
                  group-hover:text-[#A78BFA]
                  group-hover:translate-x-1
                  transition-all duration-300
                "
              >
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(Socials, "");