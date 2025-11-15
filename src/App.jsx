import { useEffect, useState } from "react";
import { Loader } from "./Components/Partials/Loader";
import { Navbar } from "./Components/Partials/Navbar";
import { About } from "./Section/About";
import { Hero } from "./Section/Hero";
import { Skills } from "./Section/Skills";
import { Projects } from "./Section/Projects";
import { Formation } from "./Section/Formation";
import { Contact } from "./Section/Contact";
import { Footer } from "./Section/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
