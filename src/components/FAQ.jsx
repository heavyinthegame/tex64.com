import { useLanguage } from '../locales/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [1, 2, 3];

  return (
    <section id="faq" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.title}>{t('faq.title')}</h2>
        <div style={styles.grid}>
          {faqs.map((i) => (
             <div key={i} style={styles.card}>
               <h3 style={styles.question}>{t(`faq.q${i}`)}</h3>
               <p style={styles.answer}>{t(`faq.a${i}`)}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: 'var(--spacing-xl) 0',
    background: 'var(--bg-surface)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '2rem',
    marginBottom: 'var(--spacing-lg)',
    color: 'var(--text-primary)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--spacing-lg)',
    width: '100%',
    maxWidth: '800px'
  },
  card: {
    background: 'rgba(255,255,255,0.02)',
    borderRadius: '16px',
    padding: '1.5rem',
    border: '1px solid rgba(255,255,255,0.05)'
  },
  question: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
    color: 'var(--color-accent)'
  },
  answer: {
    color: 'var(--text-secondary)',
    lineHeight: 1.6
  }
};

export default FAQ;
