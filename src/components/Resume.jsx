import { motion } from 'framer-motion';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resume-container">
        <h1>Resume</h1>
        <p>Download my resume to learn more about my experience and qualifications.</p>
        <motion.a
          className="resume-download"
          href="/SonaliLonkar_Resume.docx"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume (DOCX)
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Resume;