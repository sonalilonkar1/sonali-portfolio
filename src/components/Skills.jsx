import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import '../styles/Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 }
  };

  // Split each "row" string into individual skills so each becomes its own chip.
  // Supports comma-separated, middle-dot (·), or pipe-separated lists.
  const splitSkills = (items) =>
    items
      .flatMap((row) =>
        String(row)
          .split(/,|\u00B7|\|/g) // comma, ·, or |
          .map((s) => s.trim())
          .filter(Boolean)
      );

  return (
    <motion.div
      className="skills-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="page-header">
        <h1>My Skills</h1>
      </div>

      <motion.div className="skills-grid" variants={containerVariants}>
        {skills.map((group, index) => {
          const chips = splitSkills(group.items);

          return (
            <motion.div
              key={`${group.category}-${index}`}
              className="skills-group"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3>{group.category}</h3>

              <div className="skills-chips">
                {chips.map((skill, idx) => (
                  <span className="skill-chip" key={`${skill}-${idx}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Skills;