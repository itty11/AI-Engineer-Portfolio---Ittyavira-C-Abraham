// components/Projects.jsx
import '../styles/Projects.scss';

const ICON_LABELS = {
  amber:  'RAG',
  blue:   'AI',
  green:  'ML',
  purple: 'NLP',
};

const Projects = ({ projects }) => (
  <section id="projects" className="section">
    <div className="container">
      <div className="section-eyebrow">04 · Projects</div>
      <h2 className="section-title">Featured Work</h2>
      <p style={{ color: 'var(--text-muted, #5a6a8a)', maxWidth: 500, marginBottom: 0 }}>
        End-to-end AI systems built and deployed in production environments.
      </p>

      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.title} className={`projects__card projects__card--${project.color}`}>

            <div className="projects__card-header">
              <div className={`projects__card-icon projects__card-icon--${project.color}`}>
                {ICON_LABELS[project.color] || 'AI'}
              </div>
              <div className="projects__card-links">
                <a href={project.github} className="projects__card-link" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} className="projects__card-link" target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>

            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-desc">{project.description}</p>

            <div className="projects__card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="projects__card-tag">{tag}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
