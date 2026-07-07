import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

const Navigation = ({ onBookDemo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const routeLinks = [
    { name: 'Security', href: '/security' },
  ];

  const sectionLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Use Case', href: '/#use-case' },
  ];

  const resourceItems = [
    { name: 'Articles & Insights', href: 'https://signalshq.io/blog' },
    { name: 'Downloads', href: 'https://signalshq.io/resources' },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-[900px] transition-all duration-300 rounded-xl ${scrolled ? 'glassmorphism border border-gray-700/40 shadow-2xl' : 'bg-[#0A0A0D]/80 border border-white/[0.08]'}`}>
      <div className="rounded-xl">
        <div className="flex justify-between items-center h-[58px] px-5">
          {/* Logo */}
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
            className="flex items-center flex-shrink-0"
          >
            <img src="/logo.png" alt="SignalsHQ" className="h-7" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {sectionLinks.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => scrollToSection(item.href.replace('/#', ''))}
                  className="text-[#9b9ba3] hover:text-white transition-colors flex items-center text-sm font-medium font-inter"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}

            {routeLinks.map((item, index) => (
              <motion.div
                key={item.name}
                className="flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (sectionLinks.length + index) * 0.05 }}
              >
                <Link
                  to={item.href}
                  className="text-[#9b9ba3] hover:text-white transition-colors flex items-center text-sm font-medium font-inter"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="text-[#9b9ba3] hover:text-white transition-colors flex items-center text-sm font-medium font-inter">
                Resources
                <ChevronDown className={`w-3 h-3 ml-0.5 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-3 w-56 bg-[#111116] border border-[#2A2A32] rounded-xl shadow-2xl overflow-hidden"
                  >
                    {resourceItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-5 py-3 text-[#9b9ba3] hover:text-white hover:bg-white/[0.04] transition-colors text-sm font-inter"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact */}
            <Link
              to="/contact-us"
              className="text-[#9b9ba3] hover:text-white transition-colors text-sm font-medium font-inter"
            >
              Contact
            </Link>
          </div>
          <motion.button
            onClick={onBookDemo}
            className="hidden lg:flex bg-[#F5EDE7] text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-white transition-all items-center text-sm flex-shrink-0 font-inter"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Demo
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </motion.button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="lg:hidden glassmorphism border-t border-[#120E1A] rounded-b-2xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="px-5 py-4 space-y-3">
            {sectionLinks.map((item) => (
              <button
                key={item.name}
                className="block text-[#9b9ba3] hover:text-white py-2 text-sm font-inter text-left w-full"
                onClick={() => { setIsOpen(false); scrollToSection(item.href.replace('/#', '')); }}
              >
                {item.name}
              </button>
            ))}
            {routeLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-[#9b9ba3] hover:text-white py-2 text-sm font-inter"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Resources */}
            <div>
              <button
                className="flex items-center text-[#9b9ba3] hover:text-white py-2 text-sm font-inter w-full"
                onClick={() => setResourcesOpen(!resourcesOpen)}
              >
                Resources
                <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="pl-4 space-y-2 mt-1">
                  {resourceItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[#9b9ba3] hover:text-white py-1 text-sm font-inter"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/contact-us"
              className="block text-[#9b9ba3] hover:text-white py-2 text-sm font-inter"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => { setIsOpen(false); onBookDemo?.(); }}
              className="w-full bg-[#F5EDE7] text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center justify-center text-base font-inter"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
