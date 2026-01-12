import { useLanguage } from '../locales/LanguageContext';

const Navbar = ({ onOpenReleaseModal }) => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
          <div style={styles.logoAndBadge}>
            <div style={styles.logo}>
              <img src="/logo.jpg" alt="TeX64" style={styles.logoImg} />
              TeX64
            </div>
            <a href="https://orynth.dev/projects/tex64" target="_blank" rel="noopener" style={styles.badgeLink}>
              <img src="https://orynth.dev/api/badge/tex64?theme=dark&style=default" alt="Featured on Orynth" height="32" />
            </a>
          </div>
        <div style={styles.links}>
          <a href="#features" style={styles.link}>{t('nav.features')}</a>
          <button onClick={toggleLanguage} style={styles.langBtn}>
            {language === 'en' ? 'JP' : 'EN'}
          </button>
          <a
            href="#download"
            style={styles.cta}
            onClick={(e) => {
              // e.preventDefault(); // Optional, if we want to stop scrolling
              if (onOpenReleaseModal) {
                 onOpenReleaseModal();
              } else {
                 alert('アプリ公開は二月予定です');
              }
            }}
          >
            {t('nav.download')}
          </a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    height: 'var(--header-height)',
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
    backdropFilter: 'blur(10px)',
    background: 'rgba(15, 5, 24, 0.8)',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoAndBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.05em'
  },
  logoImg: {
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    objectFit: 'cover'
  },
  badgeLink: {
    display: 'flex',
    alignItems: 'center',
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 0.8
    }
  },
  links: {
    display: 'flex',
    gap: 'var(--spacing-lg)',
    alignItems: 'center'
  },
  link: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem',
    fontWeight: 500
  },
  langBtn: {
    color: 'var(--text-primary)',
    border: '1px solid rgba(255,255,255,0.2)',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    transition: 'all 0.2s',
  },
  cta: {
    background: 'var(--color-primary)',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 600,
  }
};

export default Navbar;
