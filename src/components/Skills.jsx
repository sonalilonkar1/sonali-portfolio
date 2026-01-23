import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import '../styles/Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section
      className="card section-anchor"
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header">
        <div>
          <div className="card-title">Skills</div>
          <div className="card-subtitle">Core stack</div>
        </div>
      </div>
      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((group, index) => (
          <motion.div
            key={index}
            className="skills-group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;

