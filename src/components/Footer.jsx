import { useLanguage } from '../locales/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.links}>
          <a href="/privacy" style={styles.link}>{t('footer.privacy')}</a>
          <a href="/terms" style={styles.link}>{t('footer.terms')}</a>
          <a href="/legal" style={styles.link}>{t('footer.legal')}</a>
        </div>

        <div style={styles.contact}>
            <a href="https://orynth.dev/projects/tex64" target="_blank" rel="noopener" style={{ marginBottom: '0.5rem' }}>
              <img src="https://orynth.dev/api/badge/tex64?theme=dark&style=default" alt="Featured on Orynth" width="260" height="80" />
            </a>
            <p style={styles.address}>CA: 6nLHtxBd8ZXuikf1URgfgcJMpAFx7FiYS7jQEdPkory</p>
            <a href="https://x.com/TeX64AI" target="_blank" rel="noopener" style={styles.xLink}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
         </div>

        <p style={styles.text}>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: 'var(--spacing-lg) 0',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    marginTop: 'auto'
  },
  container: {
    textAlign: 'center'
  },
  text: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem'
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    marginBottom: '1rem',
    flexWrap: 'wrap'
  },

  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s'
  },
  contact: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
  },
  address: {
      color: 'var(--text-secondary)',
      fontSize: '0.8rem',
      fontFamily: 'monospace',
      opacity: 0.8
  },
  xLink: {
    color: 'var(--text-secondary)',
    transition: 'color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    ':hover': {
      color: 'white',
      background: 'rgba(255,255,255,0.1)'
    }
  }

};

export default Footer;
