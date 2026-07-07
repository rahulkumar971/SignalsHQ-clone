import { motion } from 'framer-motion';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

const Security = ({ onBookDemo }) => {
  const trustBadges = [
    {
      icon: <Lock className="w-5 h-5 icon-accent" />,
      title: "End-to-end Encryption",
      description: "SOC 2 Type II"
    },
    {
      icon: <Eye className="w-5 h-5 icon-accent" />,
      title: "Monitoring Systems",
      description: "24/7 intrusion detection Quarterly scans & annual pen tests"
    },
    {
      icon: <Shield className="w-5 h-5 icon-accent" />,
      title: "Access Control",
      description: "Multi-Factor Authentication & Role-based permissions"
    },
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      title: "Regulation Compliant",
      description: "TLS 256-bit in transit & at rest"
    }
  ];

  const securityPolicies = [
    {
      title: "No AI Training on Your Data",
      description: "Your data and your clients' data is never used to train, fine-tune, or improve AI models. Period."
    },
    {
      title: "No Data Retention by Partners",
      description: "Our AI technology partners (OpenAI, Anthropic, Google) never store or train on your client data."
    },
    {
      title: "No 'Humans in the Loop'",
      description: "Only your team has access to your data. We never use manual review on our side."
    },
    {
      title: "Secure Document Processing",
      description: "Documents are processed through our proprietary server, redacted, and securely stored within AWS infrastructure."
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0D]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight">
            Security & Compliance You Can Trust
          </h1>
          <p className="text-xl text-[#9b9ba3]">
            We safeguard your clients' most sensitive financial data with enterprise-grade security and rigorous compliance protocols.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="bg-[#120E1A]/30 rounded-2xl p-6 border border-gray-700/50 text-center hover:border-gray-600 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className="mb-3 flex justify-center">{badge.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-1">{badge.title}</h3>
              <p className="text-xs text-[#9b9ba3] leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 2x2 Security Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {securityPolicies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-3">{policy.title}</h3>
              <p className="text-[#9b9ba3] leading-relaxed">{policy.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
