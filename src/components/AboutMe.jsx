import { motion } from 'framer-motion';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <motion.section
      className="card section-anchor"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header">
        <div>
          <div className="card-title">About Me</div>
          <div className="card-subtitle">Who I am</div>
        </div>
      </div>

      <div className="about-content">
        <p>
        I'm a software engineer who enjoys working at the intersection of backend systems and applied machine learning. I started my career in manufacturing as a Quality Engineer at GE India, where I spent a lot of time thinking about reliability, process, and data. That pushed me toward software and automation, and I eventually moved into backend engineering roles at Gromor Finance and Agnie Media Software.
        </p>
        <p>
        At Gromor and Agnie I built and maintained Java Spring Boot microservices and MySQL-backed APIs for financial workflows. I liked the mix of business rules, data modeling, and performance tuning, but I wanted to go deeper into ML and system design, which led me to the M.S. in Software Engineering program at San José State University.
        </p>
        <p>
        Recently I've been working on projects in volatility forecasting, toxic comment classification, and AI assistants, with a strong focus on clean experimentation, walk-forward validation, and making models practical enough to deploy. I enjoy problems where I have to think about both the model and the system it runs in.
        </p>
        <p>
        <strong>I'm currently looking for opportunities where I can contribute as a backend / ML engineer and keep growing my skills in scalable systems and applied ML.</strong>
        </p>
      </div>

      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="about-section-title">Currently Exploring</div>
          <ul className="about-list">
            <li>Deep learning for volatility & forecasting</li>
            <li>ML & AI for finance, NLP, and computer vision</li>
            <li>Cloud-native backend design with AWS</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="about-section-title">Outside of Work</div>
          <ul className="about-list">
            <li>Reading about system design & quant finance</li>
            <li>Experimenting with new dev tools & ML frameworks</li>
            <li>Walks, music, and exploring new places in the Bay Area</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
