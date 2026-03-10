import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import '../styles/Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [theme, toggleTheme] = useTheme();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' }
  ];

  return (
    <motion.nav 
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-inner">
        <div className="nav-left">
          <motion.div 
            className="nav-dot"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="nav-name">SONALI LONKAR</div>
        </div>
        <div className="nav-links">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path}>{item.label}</Link>
            </motion.div>
          ))}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            <span>{theme === 'light' ? '🌞' : '🌙'}</span>
            <span>Theme</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

