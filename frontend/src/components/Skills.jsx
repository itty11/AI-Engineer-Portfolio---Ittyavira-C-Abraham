// components/Skills.jsx
import '../styles/Skills.scss';

const DOT_COLORS = {
  blue:   '#4f9ef8',
  purple: '#8b5cf6',
  amber:  '#f59e0b',
  green:  '#10b981',
  teal:   '#14b8a6',
  coral:  '#f97316',
};

const Skills = ({ skills }) => (
  <section id="skills" className="section">
    <div className="container">
      <div className="section-eyebrow">03 · Skills</div>
      <h2 className="section-title">Technical Expertise</h2>
      <p style={{ color: 'var(--text-muted, #5a6a8a)', maxWidth: 500, marginBottom: 0 }}>
        A full-stack AI skillset — from raw data to deployed intelligent systems.
      </p>

      <div className="skills__grid">
        {skills.map((group) => (
          <div key={group.category} className={`skills__card skills__card--${group.color}`}>
            <div className="skills__card-title">
              <span
                className="dot"
                style={{ background: DOT_COLORS[group.color] }}
              />
              {group.category}
            </div>
            <div className="skills__tags">
              {group.items.map((item) => (
                <span key={item} className={`skills__tag skills__tag--${group.color}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
