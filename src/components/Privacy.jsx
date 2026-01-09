import { useLanguage } from '../locales/LanguageContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="page-layout">
        <div className="container" style={styles.container}>
          <h1>{t('privacy.title')}</h1>
          <section style={styles.section}>
            <h2>{t('privacy.collection_title')}</h2>
            <p>{t('privacy.collection_text')}</p>
          </section>
          <section style={styles.section}>
            <h2>{t('privacy.usage_title')}</h2>
            <p>{t('privacy.usage_text')}</p>
          </section>
          <section style={styles.section}>
            <h2>{t('privacy.cookies_title')}</h2>
            <p>{t('privacy.cookies_text')}</p>
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

export default Privacy;
