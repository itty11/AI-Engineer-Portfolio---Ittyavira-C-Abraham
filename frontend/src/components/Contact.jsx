// components/Contact.jsx
import { useState } from 'react';
import '../styles/Contact.scss';

const Contact = ({ personal }) => {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // 'sent' | 'error' | null

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to your backend / EmailJS / Formspree here
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <>
      <section id="contact" className="section">
        <div className="container">
          <div className="section-eyebrow">06 · Contact</div>
          <h2 className="section-title">Let's Build Together</h2>

          <div className="contact__layout">

            {/* ── Left: info ── */}
            <div>
              <p className="contact__intro">
                Open to full-time AI / ML engineering roles, freelance projects,
                and research collaborations. Feel free to reach out via any channel below.
              </p>

              <div className="contact__links">
                <a href={`mailto:${personal.email}`} className="contact__link">
                  <span className="link-icon">@</span>
                  {personal.email}
                </a>
                <a href={personal.github} className="contact__link" target="_blank" rel="noreferrer">
                  <span className="link-icon">gh</span>
                  GitHub
                </a>
                <a href={personal.linkedin} className="contact__link" target="_blank" rel="noreferrer">
                  <span className="link-icon">in</span>
                  LinkedIn
                </a>
                <a href="/resume.pdf" className="contact__link" target="_blank" rel="noreferrer">
                  <span className="link-icon">cv</span>
                  Download Resume
                </a>
              </div>
            </div>

            {/* ── Right: form ── */}
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  placeholder="Tell me about the project or opportunity…"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                className="contact__submit"
                type="submit"
                disabled={!form.name || !form.email || !form.message}
              >
                {status === 'sent' ? '✓ Message sent!' : 'Send Message'}
              </button>
            </form>

          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__copy">
            © {new Date().getFullYear()} {personal.name} · Built with React + SCSS
          </div>
          <div className="footer__links">
            <a href={personal.github}  className="footer__link" target="_blank" rel="noreferrer">GitHub</a>
            <a href={personal.linkedin} className="footer__link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/resume.pdf"       className="footer__link" target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
