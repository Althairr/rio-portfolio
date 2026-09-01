import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="w-full">
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 px-2">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              whileTap={{ scale: 0.96 }}
              className="relative p-5 overflow-hidden border rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#915EFF]/20 blur-2xl" />

              <div className="relative flex flex-col items-center justify-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#050816]/80 p-4 shadow-lg">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="object-contain w-full h-full"
                  />
                </div>

                <p className="text-sm font-medium text-center text-white/80">
                  {technology.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div className="h-28 w-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");