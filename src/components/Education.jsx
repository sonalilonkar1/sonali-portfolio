import { motion } from 'framer-motion';
import { education } from '../data/education';
import '../styles/Education.css';

const Education = () => {
  return (
    <motion.section
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header">
        <div>
          <div className="card-title">Education</div>
          <div className="card-subtitle">Academic background</div>
        </div>
      </div>
      {education.map((item, index) => (
        <motion.div
          key={index}
          className="edu-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="edu-degree">{item.degree}</div>
          <div className="edu-meta">{item.meta}</div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Education;

