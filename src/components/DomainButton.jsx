// One of the two front-page entry points (Software / Hardware).
// Opens its page in a new tab, so the front page stays where it is.
// Stays put on hover — it just lifts a little and warms up its border.
const DomainButton = ({ domain }) => {
  return (
    <a
      href={`#/${domain.id}`}
      target="_blank"
      rel="noreferrer"
      className="domain-button group"
    >
      <span className="domain-button-sheen" aria-hidden="true" />

      <span className="domain-button-icon">
        <img src={domain.icon} alt="" aria-hidden="true" />
      </span>

      <span className="domain-button-body">
        <span className="domain-button-label">{domain.label}</span>
        <span className="domain-button-tagline">{domain.short}</span>
      </span>

      <span className="domain-button-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </a>
  );
};

export default DomainButton;
