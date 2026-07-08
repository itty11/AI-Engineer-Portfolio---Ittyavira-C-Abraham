import React from 'react';
import { publications } from '../data/portfolioData';

const Publications = () => {
  return (
    <section id="publications" style={{ padding: '6rem 0' }}>
      <div className="container">

        <div className="eyebrow" style={{ fontFamily: 'monospace', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4f9ef8', marginBottom: '0.75rem' }}>
          06 · Publications
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
          Research
        </h2>

        <p style={{ color: '#5a6a8a', maxWidth: 500, marginBottom: '2rem', fontWeight: 300 }}>
          Peer-reviewed research at the intersection of AI, Data Mining and Business Intelligence.
        </p>

        {publications.map(function(pub, i) {
          return (
            <div key={i} style={{ background: '#0e1220', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '1.75rem', maxWidth: '860px', marginBottom: '1rem' }}>

              <div style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#4f9ef8', background: 'rgba(79,158,248,0.12)', border: '1px solid rgba(79,158,248,0.25)', padding: '0.2rem 0.65rem', borderRadius: '99px' }}>
                  Journal Article
                </span>
                <span style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#5a6a8a' }}>
                  {pub.date}
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '0.4rem', color: '#e2e8f7' }}>
                {pub.title}
              </h3>

              <div style={{ fontSize: '0.82rem', color: '#4f9ef8', fontWeight: 500, marginBottom: '0.5rem' }}>
                {pub.journal}
              </div>

              <a href={pub.link} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: '#5a6a8a', display: 'inline-block', marginBottom: '0.75rem' }}>
                View Paper ↗
              </a>

              <p style={{ fontSize: '0.85rem', color: '#5a6a8a', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {pub.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {pub.tags.map(function(tag) {
                  return (
                    <span key={tag} style={{ fontFamily: 'monospace', fontSize: '0.68rem', color: '#5a6a8a', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '0.18rem 0.6rem', borderRadius: '99px' }}>
                      {tag}
                    </span>
                  );
                })}
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Publications;