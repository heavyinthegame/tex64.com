import { useLanguage } from '../locales/LanguageContext';
import katex from 'katex';

const Features = () => {
  const { t } = useLanguage();

  const renderMath = (latex) => {
    return { __html: katex.renderToString(latex, { throwOnError: false }) };
  };

  return (
    <section id="features" style={styles.section}>
      <div className="container">
        <h2 style={styles.mainTitle}>{t('features.title')}</h2>
        
        {/* Feature 1: GUI Input */}
        <div style={styles.featureBlock}>
          <div style={styles.textSide}>
            <div style={styles.badge}>{t('features.gui.badge')}</div>
            <h3 style={styles.title}>{t('features.gui.title')}</h3>
            <p style={styles.description}>{t('features.gui.description')}</p>
          </div>
          <div style={styles.visualSide}>
            <div style={styles.mockWindow}>
               <div style={styles.mockMathPalette}>
                  <div style={styles.key}>∫</div>
                  <div style={styles.key}>∑</div>
                  <div style={styles.key}>√</div>
                  <div style={styles.key}>π</div>
                  <div style={styles.key}>∞</div>
                  <div style={styles.key}>θ</div>
               </div>
               {/* Visual Editor (Not Code) */}
                 <div style={styles.mockDocument}>
                  <span dangerouslySetInnerHTML={renderMath("\\int_{-\\infty}^{\\infty} e^{-x^2} dx")} />
                  <span style={styles.cursor}></span>
               </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Vision (Reversed Layout) */}
        <div style={{...styles.featureBlock, flexDirection: 'row-reverse'}}>
          <div style={styles.textSide}>
            <div style={{...styles.badge, background: 'var(--color-secondary)'}}>{t('features.vision.badge')}</div>
            <h3 style={styles.title}>{t('features.vision.title')}</h3>
            <p style={styles.description}>{t('features.vision.description')}</p>
          </div>
          <div style={styles.visualSide}>
             <div style={styles.mockDropZone}>
                <div style={styles.mockImage}>
                   <div style={styles.imgPlaceholder}>IMG</div>
                </div>
                <div style={styles.arrow}>➡</div>
                {/* Visual Result (Not Code) */}
                <div style={styles.mockDocumentMini}>
                   <div style={{display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start'}}>
                      <div dangerouslySetInnerHTML={renderMath("\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}")} />
                      <div dangerouslySetInnerHTML={renderMath("\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}")} />
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Feature 3: AI Copilot */}
        <div style={styles.featureBlock}>
          <div style={styles.textSide}>
             <div style={{...styles.badge, background: 'linear-gradient(45deg, #4285F4, #AA00FF)'}}>{t('features.ai.badge')}</div>
            <h3 style={styles.title}>{t('features.ai.title')}</h3>
            <p style={styles.description}>{t('features.ai.description')}</p>
          </div>
          <div style={styles.visualSide}>
            <div style={styles.mockChat}>
               <div style={styles.chatBubbleUser}>Explain compilation error at line 42</div>
               <div style={styles.chatBubbleAi}>
                  Detected unclosed <code>\begin&#123;equation&#125;</code>.
                  <br/>
                  <span style={{opacity:0.8, fontSize:'0.85em'}}>Auto-closing and optimizing layout... Done.</span>
               </div>
               {/* Advanced Practical Visual: Diff/Fix representation */}
                <div style={{
                    marginTop: '10px', 
                    background: '#1A0B2E', 
                    color: '#4CAF50', 
                    padding: '8px', 
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    ✓ \end&#123;equation&#125; added.
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
  
const styles = {
  section: {
    padding: '6rem 0',
    background: 'rgba(0,0,0,0.2)'
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '4rem',
    background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  featureBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '6rem',
    gap: '4rem',
    flexWrap: 'wrap'
  },
  textSide: {
    flex: 1,
    minWidth: '300px'
  },
  visualSide: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center'
  },
  badge: {
    display: 'inline-block',
    padding: '0.4rem 1rem',
    background: 'var(--color-primary)',
    color: 'white',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'var(--text-primary)'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: 'var(--text-secondary)'
  },
  // Mock Visual Styles
  mockWindow: {
    background: '#1E1E1E',
    borderRadius: '12px',
    padding: '20px',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(255,255,255,0.1)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
  },
  mockMathPalette: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '8px',
    marginBottom: '15px'
  },
  key: {
    background: '#333',
    color: '#fff',
    borderRadius: '4px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  mockDocument: {
    background: '#0F0518', // Navy/Black theme bg (var(--bg-main) approx)
    color: '#FFF',
    padding: '15px 20px',
    borderRadius: '8px', // Slightly rounded
    fontFamily: 'serif',
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    minHeight: '60px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  mockDocumentMini: {
    background: '#0F0518', // Navy/Black
    color: '#FFF',
    padding: '12px',
    borderRadius: '8px',
    fontFamily: 'serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minWidth: '80px',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  cursor: {
    display: 'inline-block',
    width: '2px',
    height: '1.2em',
    background: '#E91E63',
    animation: 'blink 1s infinite'
  },
  mockDropZone: {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '30px',
    width: '100%',
    maxWidth: '400px',
    border: '2px dashed rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mockImage: {
    width: '60px',
    height: '80px',
    background: '#DDD',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgPlaceholder: { color: '#555', fontWeight: 'bold' },
  arrow: { fontSize: '1.5rem', color: '#888' },
  codeSnippet: {
    background: '#1E1E1E',
    padding: '10px',
    borderRadius: '4px',
    color: '#4CAF50',
    fontFamily: 'monospace'
  },
  mockChat: {
    background: '#1E1E1E',
    borderRadius: '12px',
    padding: '20px',
    width: '100%',
    maxWidth: '400px',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  chatBubbleUser: {
    alignSelf: 'flex-end',
    background: '#333',
    padding: '8px 12px',
    borderRadius: '12px 12px 0 12px',
    color: '#fff',
    fontSize: '0.9rem'
  },
  chatBubbleAi: {
    alignSelf: 'flex-start',
    background: '#2D0A31',
    border: '1px solid #E91E63',
    padding: '8px 12px',
    borderRadius: '12px 12px 12px 0',
    color: '#fff',
    fontSize: '0.9rem'
  }
};

export default Features;
