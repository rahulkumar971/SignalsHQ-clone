import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Security from './pages/Security';
import Contact from './pages/Contact';

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  return (
    <Router>
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
