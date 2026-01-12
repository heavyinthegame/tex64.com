import { useState } from 'react';
import { useLanguage } from '../locales/LanguageContext';

const Download = ({ onOpenReleaseModal }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('mac');

  const handleDownloadClick = () => {
      if (onOpenReleaseModal) {
          onOpenReleaseModal();
      } else {
          alert('アプリ公開は二月予定です');
      }
  };

  return (
    <section id="download" style={styles.section}>
      <div className="container" style={styles.container}>
        <h2 style={styles.title}>{t('download.title')}</h2>
        <p style={styles.subtitle}>{t('download.subtitle')}</p>

        <div style={styles.tabs}>
            <button 
                onClick={() => setActiveTab('mac')}
                style={{...styles.tab, ...(activeTab === 'mac' ? styles.activeTab : {})}}
            >
                {t('download.mac')}
            </button>
            <button 
                onClick={() => setActiveTab('win')}
                style={{...styles.tab, ...(activeTab === 'win' ? styles.activeTab : {})}}
            >
                {t('download.win')}
            </button>
        </div>

        <div style={styles.card}>
            {activeTab === 'mac' ? (
                <div style={styles.content}>
                    <div style={styles.info}>
                        <h3>macOS</h3>
                        <p>{t('download.req_mac')}</p>
                        <p style={styles.version}>{t('download.version')}</p>
                    </div>
                    <div style={styles.buttons}>
                        <button style={styles.downloadBtn} onClick={handleDownloadClick}>
                            <span style={styles.icon}></span> 
                            {t('download.download_btn')} {t('download.silicon')}
                        </button>
                         <button style={styles.secondaryDownloadBtn} onClick={handleDownloadClick}>
                            {t('download.download_btn')} {t('download.intel')}
                        </button>
                    </div>
                </div>
            ) : (
                <div style={styles.content}>
                    <div style={styles.info}>
                        <h3>Windows</h3>
                        <p>{t('download.req_win')}</p>
                        <p style={styles.version}>{t('download.version')}</p>
                    </div>
                     <div style={styles.buttons}>
                        <button style={styles.downloadBtn} onClick={handleDownloadClick}>
                             <span style={styles.icon}>⊞</span> 
                            {t('download.download_btn')} {t('download.win')}
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: 'var(--spacing-xl) 0',
    background: 'var(--bg-main)'
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: 'var(--spacing-sm)',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 800
  },
  subtitle: {
    color: 'var(--text-secondary)',
    marginBottom: 'var(--spacing-lg)'
  },
  tabs: {
    display: 'flex',
    gap: '1rem',
    marginBottom: 'var(--spacing-md)',
    background: 'rgba(255,255,255,0.05)',
    padding: '4px',
    borderRadius: '12px'
  },
  tab: {
    padding: '0.5rem 1.5rem',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    fontWeight: 500,
    transition: 'all 0.2s'
  },
  activeTab: {
    background: 'rgba(255,255,255,0.1)',
    color: 'white',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
  },
  card: {
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '24px',
    padding: '3rem',
    border: '1px solid rgba(255,255,255,0.05)',
    width: '100%',
    maxWidth: '600px',
    backdropFilter: 'blur(10px)'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  info: {
    textAlign: 'center'
  },
  version: {
    fontSize: '0.9rem',
    color: 'var(--text-secondary)',
    marginTop: '0.5rem'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    alignItems: 'center'
  },
  downloadBtn: {
    background: 'var(--color-primary)',
    color: 'white',
    padding: '1rem 2rem',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 600,
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 15px rgba(233, 30, 99, 0.4)',
    transition: 'transform 0.2s'
  },
  secondaryDownloadBtn: {
    background: 'rgba(255,255,255,0.05)',
    color: 'var(--text-primary)',
    padding: '0.8rem 2rem',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 500,
    width: '100%',
    maxWidth: '300px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  icon: {
      fontSize: '1.2rem'
  }
};

export default Download;
