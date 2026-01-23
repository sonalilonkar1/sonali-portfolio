import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import '../styles/Hero.css';

const Hero = () => {
  const phrases = [
    "Building backend services in Java & Spring Boot",
    "Exploring ML for finance, NLP, Computer vision",
    "Designing scalable, reliable APIs",
    "Bridging software engineering & data"
  ];
  const typedText = useTypewriter(phrases);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="hero-section"
    >
      <div className="hero">
        <motion.div className="hero-row" variants={itemVariants}>
          <motion.div
            className="avatar"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="avatar-inner">SL</div>
          </motion.div>
          <div className="hero-title">
            <h1>Sonali Lonkar</h1>
            <div className="hero-sub">Software Engineer · Backend & ML/AI</div>
            <div className="typed-wrapper">
              <span>{typedText}</span>
              <span className="typed-cursor">|</span>
            </div>
          </div>
        </motion.div>
        <motion.p className="hero-body" variants={itemVariants}>
        Graduate Software Engineering student at San José State University (GPA 3.6) with 3+ years of experience building backend services, APIs, and automation in Java/Spring. Currently focused on ML projects in time-series forecasting, NLP, and AI assistants, with an emphasis on reproducible experiments and scalable systems.
        </motion.p>
        <motion.div className="hero-tags" variants={itemVariants}>
          <span className="hero-tag">Spring Boot & Java Backend</span>
          <span className="hero-tag">Scalable & Distributed Systems</span>
          <span className="hero-tag">ML & AI for Finance, NLP, Computer vision</span>
          <span className="hero-tag">AWS · Docker · CI/CD</span>
        </motion.div>
        <motion.div className="hero-links" variants={itemVariants}>
          <motion.a
            className="pill pill-primary"
            href="/SonaliLonkar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Résumé (PDF)
          </motion.a>
          <motion.a
            className="pill"
            href="https://github.com/sonalilonkar1"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            className="pill"
            href="https://www.linkedin.com/in/sonali-lonkar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            className="pill"
            href="mailto:sonalilonkar0301@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>
        </motion.div>
      </div>

      <motion.div className="hero-right" variants={itemVariants}>
        <motion.div
          className="hero-card"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="hero-card-title">Snapshot</div>
          <div className="hero-grid">
            <motion.div
              className="hero-metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero-metric-label">Experience</div>
              <div className="hero-metric-value">3+ years</div>
              <div className="hero-metric-sub">Backend systems & APIs</div>
            </motion.div>
            <motion.div
              className="hero-metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero-metric-label">Focus</div>
              <div className="hero-metric-value">Backend · ML · AI</div>
              <div className="hero-metric-sub">APIs, ML models, AI systems</div>
            </motion.div>
            <motion.div
              className="hero-metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero-metric-label">Currently</div>
              <div className="hero-metric-value">M.S. SJSU</div>
              <div className="hero-metric-sub">Software Engineering</div>
            </motion.div>
            <motion.div
              className="hero-metric"
              whileHover={{ scale: 1.05 }}
            >
              <div className="hero-metric-label">Location</div>
              <div className="hero-metric-value">San Jose, CA</div>
              <div className="hero-metric-sub">Open to roles</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;

