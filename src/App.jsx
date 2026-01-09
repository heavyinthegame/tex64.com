import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './locales/LanguageContext';
import Landing from './components/Landing';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Legal from './components/Legal';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
