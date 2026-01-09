import { useLanguage } from '../locales/LanguageContext';
import katex from 'katex';

const Hero = () => {
  const { t } = useLanguage();

  const renderMath = (latex) => {
    return { __html: katex.renderToString(latex, { throwOnError: false, displayMode: true }) };
  };

  return (
    <section style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title} className="text-gradient">{t('hero.title')}</h1>
          <p style={styles.subtitle}>{t('hero.subtitle')}</p>
          <div style={styles.actions}>
            <a href="#download" style={styles.primaryBtn}>{t('hero.cta_download')}</a>
            <a href="#features" style={styles.secondaryBtn}>{t('hero.cta_learn')}</a>
          </div>
        </div>
        <div style={styles.visual}>
           {/* Abstract visual representation of math */}
           <div style={styles.orb}></div>
           <div style={styles.card}>
              <div style={styles.cardHeader}>
                <span style={styles.dot}></span>
                <span style={styles.dot}></span>
              </div>
              <div style={styles.cardBody}>
                  <div style={styles.mathLine} dangerouslySetInnerHTML={renderMath("\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}")} />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 'var(--header-height)',
    position: 'relative',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: 'var(--spacing-xl)'
  },
  content: {
    flex: 1,
    minWidth: '300px'
  },
  title: {
    fontSize: '4rem',
    lineHeight: 1.1,
    marginBottom: 'var(--spacing-md)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-lg)',
    maxWidth: '500px'
  },
  actions: {
    display: 'flex',
    gap: 'var(--spacing-md)'
  },
  primaryBtn: {
    background: 'var(--gradient-hero)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 600,
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.4)',
    transition: 'transform 0.2s',
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer'
  },
  secondaryBtn: {
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'var(--text-primary)',
    padding: '1rem 2rem',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'none',
    display: 'inline-block',
    cursor: 'pointer'
  },
  visual: {
    flex: 1,
    height: '400px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orb: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    background: 'var(--color-secondary)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.3,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1
  },
  card: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    width: '320px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    transform: 'rotate(-5deg) translateY(-20px)',
    animation: 'float 6s ease-in-out infinite'
  },
  cardHeader: {
    display: 'flex',
    gap: '8px',
    marginBottom: '1rem'
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)'
  },
  cardBody: {
    color: 'var(--text-primary)',
    fontSize: '1.2rem',
    textAlign: 'center',
    fontFamily: 'serif'
  },
  mathLine: {
    background: 'rgba(0,0,0,0.2)',
    padding: '1rem',
    borderRadius: '8px'
  }
};

export default Hero;
