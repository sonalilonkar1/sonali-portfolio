import { motion } from 'framer-motion';
import '../styles/Awards.css';

const Awards = () => {
  const awards = [
    { title: 'Best Developer Award', org: 'Gromor Finance', year: '2019' },
    { title: 'Stay Lean to Go Fast Award', org: 'GE India', year: '2016' }
  ];

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
          <div className="card-title">Awards</div>
          <div className="card-subtitle">Recognition</div>
        </div>
      </div>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <strong>{award.title}</strong> – {award.org} ({award.year})
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Awards;

