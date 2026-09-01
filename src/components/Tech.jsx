import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTechnologies, setMobileTechnologies] = useState([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const shuffleTechnologies = () => {
      const shuffled = [...technologies].sort(
        () => Math.random() - 0.5
      );

      setMobileTechnologies(shuffled.slice(0, 6));
    };

    shuffleTechnologies();

    const interval = setInterval(shuffleTechnologies, 7000);

    return () => clearInterval(interval);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {mobileTechnologies.map((technology, index) => (
          <div
            className="w-28 h-28"
            key={index}
          >
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
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