// components/Publications.jsx
import '../styles/Publications.scss';
import { publications } from '../data/portfolioData';

const Publications = () => (
  <section id="publications" className="section">
    <div className="container">
      <div className="section-eyebrow">06 · Publications</div>
      <h2 className="section-title">Research</h2>
      <p style={{ color: 'var(--text-muted, #5a6a8a)', maxWidth: 500, marginBottom: '2rem' }}>
        Peer-reviewed research at the intersection of AI, Data Mining and Business Intelligence.
      </p>

      {publications.map((pub, i) => (
        
          key={i}
          href={pub.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none', display: 'block', maxWidth: '860px' }}
        >
          <div className="publications__card">

            {/* Badge + Date */}
            <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                color: '#4f9ef8',
                background: 'rgba(79,158,248,0.12)',
                border: '1px solid rgba(79,158,248,0.25)',
                padding: '0.2rem 0.65rem',
                borderRadius: '99px',
              }}>
                Journal Article
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.68rem',
                color: '#5a6a8a',
              }}>
                {pub.date}
              </span>
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: '0.4rem',
              color: '#e2e8f7',
            }}>
              {pub.title}
            </h3>

            {/* Journal */}
            <div style={{
              fontSize: '0.82rem',
              color: '#4f9ef8',
              fontWeight: 500,
              marginBottom: '0.75rem',
            }}>
              {pub.journal}
            </div>

            {/* Description */}
            <p style={{
              fontSize: '0.85rem',
              color: '#5a6a8a',
              lineHeight: 1.75,
              marginBottom: '1.25rem',
            }}>
              {pub.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    color: '#5a6a8a',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    padding: '0.18rem 0.6rem',
                    borderRadius: '99px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Publications;