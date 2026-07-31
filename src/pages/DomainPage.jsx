// A full page for one domain (Software or Hardware), reached at #/software
// and #/hardware. Content comes entirely from src/constants/domains.js.
const DomainPage = ({ domain }) => {
  return (
    <div className="domain-page">
      <header className="domain-page-topbar">
        <div className="domain-page-shell domain-page-topbar-inner">
          <a href="#/" className="domain-back group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back home</span>
          </a>
          <a href="#/" className="domain-page-name">
            Areg Hovumyan
          </a>
        </div>
      </header>

      <div className="domain-page-shell">
        <div className="domain-page-intro">
          <p className="domain-page-eyebrow">{domain.tagline}</p>
          <h1 className="domain-page-title">{domain.label}</h1>
          <p className="domain-page-description">{domain.description}</p>
        </div>

        <main className="domain-page-sections">
          {domain.sections.map((section) => (
            <article key={section.id} id={section.id} className="domain-section">
              <div className="domain-section-head">
                <div className="domain-section-figure">
                  <img
                    src={section.image}
                    alt={section.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="domain-section-heading">
                  <h2 className="domain-section-title">{section.title}</h2>
                  <p className="domain-section-blurb">{section.blurb}</p>
                </div>
              </div>

              {section.projects.length > 0 ? (
                <div className="domain-project-grid">
                  {section.projects.map((project) => (
                    <div key={project.title} className="domain-project-card">
                      {project.image && (
                        <div className="domain-project-image-wrapper">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="domain-project-image"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      )}

                      <h3 className="domain-project-title">{project.title}</h3>
                      <p className="domain-project-description">{project.description}</p>

                      {project.tags?.length > 0 && (
                        <ul className="domain-tag-row">
                          {project.tags.map((tag) => (
                            <li key={tag} className="domain-tag">
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="domain-project-link group"
                        >
                          <span>{project.linkLabel ?? "Take a look"}</span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="domain-empty">More work landing in this section soon.</p>
              )}
            </article>
          ))}
        </main>

        <footer className="domain-page-footer">
          <a href="#/" className="domain-back group">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back home</span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default DomainPage;
