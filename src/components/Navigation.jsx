import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('top');
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'projects', 'about', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 120;
          if (scrollPos >= top) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      if (sectionId === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { id: '#top', label: 'Home' },
    { id: '#projects', label: 'Projects' },
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#experience', label: 'Experience' },
    { id: '#contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-inner">
        <div className="nav-left">
          <motion.div 
            className="nav-dot"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="nav-name">SONALI LONKAR</div>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <span>{theme === 'light' ? '🌞' : '🌙'}</span>
            <span>Theme</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

