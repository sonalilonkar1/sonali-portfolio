import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [openProject, setOpenProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend / Cloud' },
    { id: 'ml', label: 'AI / ML' }
  ];

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="page-header">
        <h1>My Projects</h1>
      </div>

      <div className="project-filters">
        {filters.map((f) => (
          <motion.button
            key={f.id}
            className={`filter-chip ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {f.label}
          </motion.button>
        ))}
      </div>

      <div className="project-list">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project ${openProject === project.id ? 'open' : ''}`}
              data-category={project.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setOpenProject(openProject === project.id ? null : project.id)}
              whileHover={{ scale: 1.01 }}
            >
              <div className="project-header-row">
                <div className="project-main">
                  <div className="project-name">{project.name}</div>
                  <div className="project-meta">{project.meta}</div>
                  <p className="project-tagline">{project.tagline}</p>
                </div>
                <div className="project-toggle">
                  Details <span className="project-toggle-arrow">▶</span>
                </div>
              </div>
              <AnimatePresence>
                {openProject === project.id && (
                  <motion.div
                    className="project-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="project-bullets">
                      {project.bullets.map((bullet, idx) => {
                        const colonIndex = bullet.indexOf(':');
                        const hasLabel = colonIndex > 0;

                        const label = hasLabel ? bullet.slice(0, colonIndex) : null;
                        const text = hasLabel ? bullet.slice(colonIndex + 1).trim() : bullet;

                        return (
                          <li key={idx}>
                            {hasLabel ? <strong>{label}:</strong> : null} {text}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="project-links">
                      {project.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Projects;

