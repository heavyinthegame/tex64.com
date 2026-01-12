import { useEffect } from 'react';
import { useLanguage } from '../locales/LanguageContext';

const ReleaseModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
        <div style={styles.content}>
          <div style={styles.icon}>🚀</div>
          <h3 style={styles.title}>{t('modal.release_title') || 'Coming Soon'}</h3>
          <p style={styles.message}>
            {t('modal.release_message') || 'アプリ公開は二月予定です'}
          </p>
          <button style={styles.okBtn} onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(5px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
    padding: '1rem'
  },
  modal: {
    background: '#1a1a1a', // Dark theme background
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    padding: '2rem',
    width: '100%',
    maxWidth: '400px',
    position: 'relative',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
    animation: 'modalFadeIn 0.3s ease-out'
  },
  closeBtn: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    color: 'var(--text-secondary)',
    fontSize: '1.5rem',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background 0.2s',
    ':hover': {
      background: 'rgba(255, 255, 255, 0.1)'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem'
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '0.5rem'
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    margin: 0
  },
  message: {
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0
  },
  okBtn: {
    marginTop: '1rem',
    background: 'var(--color-primary)', // Assuming this css var exists
    color: 'white',
    border: 'none',
    padding: '0.8rem 2rem',
    borderRadius: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    transition: 'opacity 0.2s',
    ':hover': {
      opacity: 0.9
    }
  }
};

// Add keyframes for animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes modalFadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`;
document.head.appendChild(styleSheet);

export default ReleaseModal;
