import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '/#features' },
      { name: 'Use Case', href: '/#use-case' },
    ],
    Resources: [
      { name: 'Articles & Insights', href: '/blog' },
      { name: 'Downloads', href: '/resources' },
      { name: 'Security', href: '/security' },
      { name: 'Evaluate Your Firm', href: '/evaluate' },
    ],
    Company: [
      { name: 'Privacy policy', href: '/privacypolicies' },
      { name: 'Terms conditions', href: '/terms-of-service' },
      { name: 'Contact us', href: '/contact-us' },
    ],
  };

  return (
    <footer className="bg-[#0A0A0D] text-white py-10 border-t border-[#120E1A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-3">
              <img src="/logo.png" alt="SignalsHQ" className="h-6" />
            </div>
            <p className="text-[#A0A0AA] text-xs mb-3 max-w-xs">
              Smart Automation Built for Scaling Tax Firms.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/contact-us" className="text-[#A0A0AA] hover:text-white transition-colors text-xs">
                Contact
              </Link>
              <a href="#" className="text-[#A0A0AA] hover:text-white transition-colors text-xs">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Footer Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-3 text-xs uppercase tracking-wider">{category}</h3>
              <ul className="space-y-1.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-[#A0A0AA] hover:text-white transition-colors text-xs"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* SOC 2 Badge */}
          <motion.div
            className="flex flex-col items-center md:items-end justify-start md:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
              <ShieldCheck className="w-7 h-7 text-purple-400" />
            </div>
            <span className="text-[10px] text-[#A0A0AA] mt-1.5 uppercase tracking-wider">SOC 2</span>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-[#120E1A] mt-8 pt-5 text-center text-[#A0A0AA] text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© 2026 SignalsHQ.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
