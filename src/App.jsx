import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navigation onBookDemo={openDemo} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onBookDemo={openDemo} />} />
            <Route path="/pricing" element={<Pricing onBookDemo={openDemo} />} />
            <Route path="/security" element={<Security onBookDemo={openDemo} />} />
            <Route path="/contact-us" element={<Contact onBookDemo={openDemo} />} />
          </Routes>
        </main>
        <Footer />
        <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />
      </div>
    </Router>
  );
}

export default App;
