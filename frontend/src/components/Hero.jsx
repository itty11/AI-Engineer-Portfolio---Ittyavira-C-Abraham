// components/Hero.jsx
import '../styles/Hero.scss';

const HERO_TAGS = [
  'Machine Learning', 'Deep Learning', 'NLP', 'Generative AI',
  'RAG', 'LangChain', 'FastAPI', 'React',
];

const Hero = ({ personal }) => {
  const initials = personal.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div>
            {personal.available && (
              <div className="hero__badge">Available for opportunities</div>
            )}

            <h1 className="hero__name">
              {personal.name.split(' ')[0]}{' '}
              <span>{personal.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <div className="hero__title">// {personal.title}</div>

            <p className="hero__bio">{personal.bio}</p>

            <div className="hero__tags">
              {HERO_TAGS.map((tag) => (
                <span key={tag} className="hero__tag">{tag}</span>
              ))}
            </div>

            <div className="hero__actions">
              <button
                className="hero__btn hero__btn--primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </button>
              <button
                className="hero__btn hero__btn--ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
              </button>
            </div>

            <div className="hero__socials">
              <a href={personal.github}  className="hero__social" target="_blank" rel="noreferrer">gh</a>
              <a href={personal.linkedin} className="hero__social" target="_blank" rel="noreferrer">in</a>
              <a href={`mailto:${personal.email}`} className="hero__social">@</a>
            </div>
          </div>

          <div className="hero__avatar">
            <div className="initials">{initials}</div>
            <div className="label">your photo</div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="line" />
        <span>scroll</span>
      </div>
    </section>
  );
};

export default Hero;
