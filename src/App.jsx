import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Socials, StarsCanvas } from "./components";
import Certificates from "./components/Certificates";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1025px)");

    setIsDesktop(mediaQuery.matches);

    const handleChange = (e) => setIsDesktop(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-center bg-no-repeat bg-cover bg-hero-pattern'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Certificates />
        <div className='relative z-0'>
          <Contact />
          <Socials />
           {isDesktop && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;