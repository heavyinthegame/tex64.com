import { useLanguage } from '../locales/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Legal = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="container" style={styles.container}>
          <h1>{t('legal.title')}</h1>
          <div style={styles.grid}>
             <div style={styles.row}>
                <div style={styles.label}>{t('legal.distributor')}</div>
                <div style={styles.value}>{t('legal.distributor_val')}</div>
             </div>
             <div style={styles.row}>
                <div style={styles.label}>{t('legal.manager')}</div>
                <div style={styles.value}>{t('legal.manager_val')}</div>
             </div>
             <div style={styles.row}>
                <div style={styles.label}>{t('legal.location')}</div>
                <div style={styles.value}>{t('legal.location_val')}</div>
             </div>
             <div style={styles.row}>
                <div style={styles.label}>{t('legal.contact')}</div>
                <div style={styles.value}>{t('legal.contact_val')}</div>
             </div>
             <div style={styles.row}>
                <div style={styles.label}>{t('legal.price')}</div>
                <div style={styles.value}>{t('legal.price_val')}</div>
             </div>
              <div style={styles.row}>
                <div style={styles.label}>{t('legal.payment')}</div>
                <div style={styles.value}>{t('legal.payment_val')}</div>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    paddingTop: 'calc(var(--header-height) + 2rem)',
    paddingBottom: '4rem',
    maxWidth: '800px'
  },
  grid: {
      display: 'grid',
      gap: '1.5rem',
      marginTop: '2rem'
  },
  row: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      paddingBottom: '1rem'
  },
  label: {
      fontWeight: 'bold',
      color: 'var(--text-secondary)'
  },
  value: {
      color: 'var(--text-primary)'
  }
};

export default Legal;
