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
            <div style={styles.socials}>
              <a href="https://x.com/TeX64AI" target="_blank" rel="noopener" style={styles.socialLink}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://t.me/tex64ai" target="_blank" rel="noopener" style={styles.socialLink}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
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
  socials: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  socialLink: {
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
