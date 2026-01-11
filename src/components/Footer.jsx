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
        <div style={styles.badge}>
          <a href="https://orynth.dev/projects/tex64" target="_blank" rel="noopener">
            <img src="https://orynth.dev/api/badge/tex64?theme=dark&style=default" alt="Featured on Orynth" width="260" height="80" />
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
  badge: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center'
  },
  link: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s'
  }
};

export default Footer;
