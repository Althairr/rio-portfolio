import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Socials, StarsCanvas } from "./components";
import Certificates from "./components/Certificates";

const App = () => {
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
        {/* <Feedbacks /> */}
        <Certificates />
        <div className='relative z-0'>
          <Contact />
          <Socials />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;