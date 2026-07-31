import MediaGallery from "../components/MediaGallery.jsx";

// A full page for one domain (Software or Hardware), reached at #/software
// and #/hardware. Content comes entirely from src/constants/domains.js.

// `links` covers projects with more than one thing to open (a schematic and a
// layout, say); the older single `link`/`linkLabel` pair still works.
const projectLinks = (project) =>
  project.links ??
  (project.link
    ? [{ label: project.linkLabel ?? "Take a look", href: project.link }]
    : []);

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
                    <div
                      key={project.title}
                      className={`domain-project-card${
                        project.gallery?.length ? " domain-project-card-wide" : ""
                      }`}
                    >
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

                      {project.banner && (
                        <a
                          className="site-banner group"
                          href={project.banner.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            className="site-banner-image"
                            src={project.banner.image}
                            alt=""
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="site-banner-scrim" />
                          <span className="site-banner-content">
                            {project.banner.eyebrow && (
                              <span className="site-banner-eyebrow">{project.banner.eyebrow}</span>
                            )}
                            <span className="site-banner-title">{project.banner.title}</span>
                            {project.banner.description && (
                              <span className="site-banner-description">
                                {project.banner.description}
                              </span>
                            )}
                            <span className="site-banner-cta">
                              <span>{project.banner.url ?? "Visit site"}</span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" />
                                <polyline points="7 7 17 7 17 17" />
                              </svg>
                            </span>
                          </span>
                        </a>
                      )}

                      {project.gallery?.length > 0 && (
                        <MediaGallery items={project.gallery} />
                      )}

                      {projectLinks(project).length > 0 && (
                        <div className="domain-project-links">
                          {projectLinks(project).map(({ label, href }) => (
                            <a
                              key={href}
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="domain-project-link group"
                            >
                              <span>{label}</span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                              </svg>
                            </a>
                          ))}
                        </div>
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
