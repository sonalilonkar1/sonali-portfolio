import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <motion.section
      className="card section-anchor"
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="card-header">
        <div>
          <div className="card-title">Contact</div>
          <div className="card-subtitle">Let&apos;s connect</div>
        </div>
      </div>
      <motion.div
        className="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p>
          Email:{' '}
          <a href="mailto:sonalilonkar0301@gmail.com">
            sonalilonkar0301@gmail.com
          </a>
        </p>
        <p>
          Phone: <a href="tel:+16692524239">+1-669-252-4239</a>
        </p>
        <p>Location: San Jose, CA</p>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
