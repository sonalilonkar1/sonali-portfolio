import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import '../styles/Hero.css';

const Hero = () => {
  const phrases = [
    "Building end-to-end AI/ML systems",
    "From data pipelines to model deployment",
    "Exploring applied machine learning",
    "Bridging AI and software engineering"
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
    <motion.div
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-content">
        <motion.div className="hero-profile" variants={itemVariants}>
          <img src="/profile.png" alt="Sonali Lonkar" className="profile-image" />
        </motion.div>
        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi, I'm <span className="name-glow">
            <span>S</span><span>o</span><span>n</span><span>a</span><span>l</span><span>i</span><span>&nbsp;</span><span>L</span><span>o</span><span>n</span><span>k</span><span>a</span><span>r</span>
          </span>
        </motion.h1>
        <motion.div className="typed-wrapper" variants={itemVariants}>
          <span>{typedText}</span>
          <span className="typed-cursor">|</span>
        </motion.div>
        <motion.p className="hero-description" variants={itemVariants}>
          <p>I’m an AI/ML-focused software engineer exploring applied machine learning across domains, working on data pipelines, modeling, evaluation, and deployment.</p>
          <p>I enjoy building practical projects and bringing strong engineering fundamentals, including backend development with Java/Spring Boot.</p>
          <p>Currently pursuing my M.S. in Software Engineering at SJSU.</p>
        </motion.p>
        <motion.div className="hero-links" variants={itemVariants}>
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
            Email
          </motion.a>
          <motion.a
            className="pill pill-primary"
            href="/SonaliLonkar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;