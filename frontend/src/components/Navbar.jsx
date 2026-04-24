// components/Navbar.jsx
import useScrollSpy from '../hooks/useScrollSpy';
import '../styles/Navbar.scss';

const SECTIONS = ['home', 'skills', 'projects', 'experience', 'contact'];

const Navbar = ({ name }) => {
  const { activeId, scrolled } = useScrollSpy(SECTIONS);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container">
        <div className="navbar__logo" onClick={() => scrollTo('home')}>
          {name.split(' ')[0]}<span>.</span>
        </div>

        <div className="navbar__links">
          {SECTIONS.filter(s => s !== 'home').map((id) => (
            <button
              key={id}
              className={`navbar__link ${activeId === id ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <a
            className="navbar__cta"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
