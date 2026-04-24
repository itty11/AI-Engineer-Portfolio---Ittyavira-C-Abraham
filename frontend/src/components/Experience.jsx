// components/Experience.jsx
import '../styles/Experience.scss';

const Experience = ({ experience, education, certifications }) => (
  <section id="experience" className="section">
    <div className="container">
      <div className="section-eyebrow">05 · Experience</div>
      <h2 className="section-title">Background</h2>

      <div className="experience__layout">

        {/* ── Work Experience ── */}
        <div>
          <div className="experience__col-title">Work Experience</div>
          <div className="experience__timeline">
            {experience.map((job, i) => (
              <div key={i} className="experience__item">
                <div className="experience__line-col">
                  <div className={`experience__dot ${job.current ? '' : 'experience__dot--dim'}`} />
                  {i < experience.length - 1 && <div className="experience__connector" />}
                </div>
                <div className="experience__content">
                  <div className="experience__role">{job.role}</div>
                  <div className="experience__meta">
                    <span className="experience__company">{job.company}</span>
                    <span className="experience__period">{job.period}</span>
                    {job.current && <span className="experience__current">Current</span>}
                  </div>
                  <div className="experience__points">
                    {job.points.map((point, j) => (
                      <div key={j} className="experience__point">{point}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Education & Certs ── */}
        <div>
          <div className="experience__col-title">Education</div>
          {education.map((edu, i) => (
            <div key={i} className="experience__edu-item">
              <div className="experience__edu-degree">{edu.degree}</div>
              <div className="experience__edu-meta">{edu.school} · {edu.year}</div>
            </div>
          ))}

          <div className="experience__col-title" style={{ marginTop: '2rem' }}>
            Certifications
          </div>
          {certifications.map((cert, i) => (
            <div key={i} className="experience__cert">
              <span className="experience__cert-name">{cert.name}</span>
              <span className={`experience__cert-tag experience__cert-tag--${cert.color}`}>
                {cert.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default Experience;
