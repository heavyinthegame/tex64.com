import { useLanguage } from '../locales/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Terms = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
       <div className="page-layout">
        <div className="container" style={styles.container}>
          <h1>{t('terms.title')}</h1>
          <section style={styles.section}>
             <h2>{t('terms.intro_title')}</h2>
             <p>{t('terms.intro_text')}</p>
          </section>
          <section style={styles.section}>
             <h2>{t('terms.license_title')}</h2>
             <p>{t('terms.license_text')}</p>
          </section>
          <section style={styles.section}>
             <h2>{t('terms.liability_title')}</h2>
             <p>{t('terms.liability_text')}</p>
          </section>
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
  section: {
    margin: '2rem 0'
  }
};

export default Terms;
