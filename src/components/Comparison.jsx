import { useLanguage } from '../locales/LanguageContext';

const Comparison = () => {
  const { t } = useLanguage();

  const features = [
    { key: 'setup', en: 'Setup Difficulty', ja: 'セットアップ難易度' },
    { key: 'offline', en: 'Offline Support', ja: 'オフライン対応' },
    { key: 'ai', en: 'AI Integration', ja: 'AI連携' },
    { key: 'gui', en: 'GUI Math Input', ja: 'GUI数式入力' },
    { key: 'preview', en: 'Real-time Preview', ja: 'リアルタイムプレビュー' },
    { key: 'price', en: 'Price', ja: '価格' },
  ];

  const tools = [
    {
      name: 'TeX64',
      highlight: true,
      setup: { en: 'One-click', ja: 'ワンクリック' },
      offline: '✓',
      ai: 'Gemini 2.5',
      gui: '✓',
      preview: '✓',
      price: { en: 'Free (Beta)', ja: '無料 (ベータ)' },
    },
    {
      name: 'Overleaf',
      highlight: false,
      setup: { en: 'Account required', ja: 'アカウント必須' },
      offline: '✗',
      ai: '✗',
      gui: '✗',
      preview: '✓',
      price: { en: 'Freemium', ja: 'フリーミアム' },
    },
    {
      name: 'VSCode + LaTeX',
      highlight: false,
      setup: { en: 'Manual config', ja: '手動設定' },
      offline: '✓',
      ai: { en: 'Copilot (Extra)', ja: 'Copilot (別途)' },
      gui: '✗',
      preview: { en: 'Plugin needed', ja: '要プラグイン' },
      price: { en: 'Free', ja: '無料' },
    },
  ];

  const lang = t('nav.features') === 'Features' ? 'en' : 'ja';

  const getValue = (val) => {
    if (typeof val === 'object' && val !== null) {
      return val[lang] || val.en;
    }
    return val;
  };

  return (
    <section id="comparison" style={styles.section}>
      <div className="container">
        <h2 style={styles.title}>
          {lang === 'ja' ? '他ツールとの比較' : 'Compare with Others'}
        </h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}></th>
                {tools.map((tool) => (
                  <th
                    key={tool.name}
                    style={{
                      ...styles.th,
                      ...(tool.highlight ? styles.highlight : {}),
                    }}
                  >
                    {tool.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.key}>
                  <td style={styles.td}>{lang === 'ja' ? feature.ja : feature.en}</td>
                  {tools.map((tool) => (
                    <td
                      key={tool.name}
                      style={{
                        ...styles.td,
                        ...(tool.highlight ? styles.highlightCell : {}),
                      }}
                    >
                      {getValue(tool[feature.key])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '4rem 0',
    background: 'rgba(0,0,0,0.3)',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    color: 'var(--text-primary)',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '0.95rem',
  },
  th: {
    padding: '1rem',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--text-secondary)',
    fontWeight: 600,
  },
  td: {
    padding: '1rem',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    color: 'var(--text-secondary)',
  },
  highlight: {
    background: 'linear-gradient(135deg, rgba(233,30,99,0.2), rgba(156,39,176,0.2))',
    color: 'var(--color-accent)',
    borderRadius: '8px 8px 0 0',
  },
  highlightCell: {
    background: 'rgba(233,30,99,0.05)',
    color: 'var(--text-primary)',
    fontWeight: 500,
  },
};

export default Comparison;
