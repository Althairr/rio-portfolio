import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { certifications } from "../constants";
import { toeic } from "../assets";

const CertificationCard = ({ index, title, issuer, date, pdf, score }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    whileHover={{
      y: -8,
      rotateX: 2,
      rotateY: -2,
      scale: 1.02,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
    className="
      relative
      bg-black-200/80
      p-6
      rounded-3xl
      xs:w-[320px]
      w-full
      border border-[#915EFF]/20
      shadow-[0_0_30px_rgba(145,94,255,0.08)]
      backdrop-blur-sm
      overflow-hidden
      group"
    >
      
    <div className="
      absolute
      -top-20
      -right-20
      w-40
      h-40
      bg-[#915EFF]/10
      rounded-full
      blur-3xl
      group-hover:bg-[#915EFF]/20
      transition-all
      duration-500
    " />
  
    <div className="
      relative
      z-10
      w-full
      h-[200px]
      rounded-2xl
      overflow-hidden
      bg-black-100
      border border-white/10
      shadow-inner
    ">  
    
      {pdf ? (
        <iframe
          src={pdf}
          title={title}
          className="w-full h-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full overflow-hidden bg-white rounded-2xl">
          <img
            src={toeic}
            alt="TOEIC Score Report"
            className="object-contain max-w-full max-h-full"
          />
        </div>
      )}
      
    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-[20px]">
        {title}
      </h3>

      <p className="mt-2 text-secondary text-[14px]">
        {issuer}
      </p>

      <p className="mt-1 text-secondary text-[12px]">
        {date}
      </p>

      {score && (
        <p className="mt-2 text-white font-bold text-[16px]">
          Score: {score}
        </p>
      )}

      {pdf && (
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-[#A78BFA] font-semibold text-[14px]"
        >
          View Certificate →
        </a>
      )}
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My credentials</p>
          <h2 className={styles.sectionHeadText}>
            Certifications.
          </h2>
        </motion.div>
      </div>

      <div
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {certifications.map((certification, index) => (
          <CertificationCard
            key={certification.title}
            index={index}
            {...certification}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "");