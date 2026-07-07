import { motion } from 'framer-motion';
import { Check, ArrowRight, CheckCircle } from 'lucide-react';

const Pricing = ({ onBookDemo }) => {
  const plans = [
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: 'Tax Assist',
      description: 'AI-powered tax research and Q&A that gives you IRS-cited answers in seconds.',
      features: [
        'Instant tax research with direct IRS citations',
        'Federal & SALT coverage across all 50 states',
        'Court ruling references',
        'Context-aware answers',
        'Natural language queries',
        'Exportable memos'
      ],
      cta: 'Talk to Sales'
    },
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: 'Client Organizer',
      description: 'Automated document intake and extraction that turns stacks of PDFs into structured, searchable client data.',
      features: [
        'AI document intake; drag, drop, done',
        'K-1, 1099s, W-2 auto-extraction with 95%+ accuracy',
        'Automated binders',
        '360° client overview',
        'Smart categorization',
        'Audit-ready trail'
      ],
      cta: 'Talk to Sales'
    },
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: 'Client Review',
      description: 'Proactive advisory insights that surface tax savings, flag risks, and generate strategy.',
      features: [
        'Current-year category rollups',
        'Comprehensive schedule summaries',
        'Multi-entity support; 1040, 1065, 1120-S',
        'Anomaly alerts across client binder',
        'AI-drafted returns; 70% faster prep'
      ],
      cta: 'Talk to Sales',
      tag: 'Coming soon'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0D]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-4 font-mono">• Pricing</span>
          <h1 className="text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight">
            Simple Subscription to Scale your <span className="italic text-white">Practice</span>
          </h1>
          <p className="text-xl text-[#9b9ba3]">
            Choose the solution that fits your firm's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-[#111116] rounded-[20px] p-8 border border-[#2A2A32] hover:border-gray-600 transition-all flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-10 h-10 icon-accent-bg rounded-xl flex items-center justify-center mb-4">
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{plan.name}</h3>
              <p className="text-[#9b9ba3] text-sm mb-6 leading-relaxed">{plan.description}</p>

              <div className="border-t border-[#2A2A32] pt-6 mb-8 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-4 h-4 icon-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#9b9ba3] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.tag && (
                <span className="inline-block mb-4 px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full w-fit">
                  {plan.tag}
                </span>
              )}

              <motion.button
                onClick={onBookDemo}
                className="w-full bg-[#F5EDE7] text-gray-900 py-3 rounded-lg font-semibold hover:bg-white transition-all flex items-center justify-center text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
