import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <motion.section
      className="card section-anchor"
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header">
        <div>
          <div className="card-title">Experience</div>
          <div className="card-subtitle">Industry background</div>
        </div>
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
            {item.bullets.map((bullet, idx) => (
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
    </motion.section>
  );
};

export default Experience;

