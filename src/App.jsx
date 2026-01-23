import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const [theme] = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navigation />
      <div className="page section-anchor" id="top">
        <Hero />
        <main>
          <div>
            <Projects />
            <AboutMe />
          </div>
          <div>
            <Skills />
            <Experience />
            <Education />
            <Awards />
            <Contact />
          </div>
        </main>
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} Sonali Lonkar · Built with React, Vite & Framer Motion.
        </motion.footer>
      </div>
    </div>
  );
}

export default App;

