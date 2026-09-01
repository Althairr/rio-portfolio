import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTechnologies, setMobileTechnologies] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const updateMobile = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Shuffle technologies dan ambil 6 secara random
      const shuffled = [...technologies].sort(() => Math.random() - 0.5);
      setMobileTechnologies(shuffled.slice(0, 6));
    }
  }, [isMobile]);

  const displayedTechnologies = isMobile
    ? mobileTechnologies
    : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {displayedTechnologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");