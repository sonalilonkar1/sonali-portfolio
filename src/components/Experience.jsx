import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <motion.div
      className="experience-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>Experience</h1>
        <p>AI/ML · Research · Software Engineering</p>
      </div>

      {experience.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="timeline-header">
            <div>
              <div className="timeline-role">{item.role}</div>
              <div className="timeline-org">{item.org}</div>
            </div>
            <div className="timeline-dates">{item.dates}</div>
          </div>
          <ul className="timeline-bullets">
            {(item.bullets ?? (item.description ? [item.description] : [])).map((bullet, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
              >
                {bullet}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
