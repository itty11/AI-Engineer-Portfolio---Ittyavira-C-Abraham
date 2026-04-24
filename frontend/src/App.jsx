// App.jsx — Root component

import { personal, skills, projects, experience, education, certifications } from './data/portfolioData';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Contact    from './components/Contact';

import './styles/global.scss';

const App = () => (
  <>
    <Navbar name={personal.name} />
    <Hero       personal={personal} />
    <Skills     skills={skills} />
    <Projects   projects={projects} />
    <Experience
      experience={experience}
      education={education}
      certifications={certifications}
    />
    <Contact personal={personal} />
  </>
);

export default App;
