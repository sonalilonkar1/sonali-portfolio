import { motion } from 'framer-motion';
import { education } from '../data/education';
import '../styles/Education.css';

const Education = () => {
  return (
    <motion.div
      className="education-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>My Academic background</h1>
      </div>
      {education.map((item, index) => (
        <motion.div
          key={index}
          className="edu-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="edu-degree">{item.degree}</div>
          <div className="edu-meta">{item.meta}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;

