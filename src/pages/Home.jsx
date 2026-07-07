import { motion } from 'framer-motion';
import { ArrowRight, Lock, Wifi, Shield, CheckCircle, Quote, Check } from 'lucide-react';

const Home = ({ onBookDemo }) => {
  const securityCards = [
    {
      icon: <Lock className="w-5 h-5" />,
      title: "End-to-end Encryption",
      description: "SOC 2 Type II"
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Monitoring Systems",
      description: "24/7 intrusion detection Quarterly scans & annual pen tests"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Access Control",
      description: "Multi-Factor Authentication Role-based permissions"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Regulation Compliant",
      description: "TLS 256-bit in transit & at rest"
    }
  ];

  const problemCallouts = [
    "Review queue is jammed again",
    "W-2s and 1099s everywhere – help!",
    "K-1s are slowing everything down",
    "What's the nexus rule in California?",
    "We're double-entering the same data!"
  ];

  const featureBlocks = [
    {
      label: "TAX ASSIST",
      title: "Instant, reliable answers to your tax questions.",
      points: [
        "Direct IRS citations & court ruling references",
        "Federal & SALT coverage across all 50 states",
        "Context-aware answers",
        "Exportable memos for client-ready documentation"
      ]
    },
    {
      label: "CLIENT ORGANIZER",
      title: "Client Data in One Place. Structured. Searchable.",
      points: [
        "AI document intake; drag, drop, done",
        "K-1, 1099s, W-2s auto-extraction at 95%+ accuracy",
        "360° client overview with smart categorization",
        "Automated binders"
      ]
    },
    {
      label: "CLIENT REVIEW",
      title: "Get workpaper insight. Zero Manual Grind.",
      points: [
        "Current-year category rollups",
        "Multi-entity support for 1040, 1065, 1120-S",
        "Auto-Generated Workpapers",
        "AI-drafted first-pass returns; 70% faster prep"
      ],
      tag: "Coming soon"
    }
  ];

  const pricingCards = [
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: "Tax Assist",
      description: "AI-powered tax research and Q&A that gives you IRS-cited answers in seconds.",
      features: [
        "Instant tax research with direct IRS citations",
        "Federal & SALT coverage across all 50 states",
        "Court ruling references",
        "Context-aware answers",
        "Natural language queries",
        "Exportable memos"
      ],
      cta: "Talk to Sales"
    },
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: "Client Organizer",
      description: "Automated document intake and extraction that turns stacks of PDFs into structured, searchable client data.",
      features: [
        "AI document intake; drag, drop, done",
        "K-1, 1099s, W-2 auto-extraction with 95%+ accuracy",
        "Automated binders",
        "360° client overview",
        "Smart categorization",
        "Audit-ready trail"
      ],
      cta: "Talk to Sales"
    },
    {
      icon: <CheckCircle className="w-5 h-5 icon-accent" />,
      name: "Client Review",
      description: "Proactive advisory insights that surface tax savings, flag risks, and generate strategy.",
      features: [
        "Current-year category rollups",
        "Comprehensive schedule summaries",
        "Multi-entity support; 1040, 1065, 1120-S",
        "Anomaly alerts across client binder",
        "AI-drafted returns; 70% faster prep"
      ],
      cta: "Talk to Sales",
      tag: "Coming soon"
    }
  ];

  const useCases = [
    {
      title: "Always Current on Tax Rules",
      description: "Delivers the latest updates across SALT and Federal taxes directly in your workflow."
    },
    {
      title: "Turn Raw Data into Insight",
      description: "Uses AI to locate, organize, and surface client insights hidden in client documents."
    },
    {
      title: "Surface Savings & Risks",
      description: "Analyze your client data to unlock opportunities and spot risks proactively."
    }
  ];

  const testimonials = [
    {
      quote: "Research used to be a black hole. Now, I just type the question and get a citable IRS answer in seconds.",
      author: "ST",
      title: "Tax Manager",
      company: "Sama Tributa"
    },
    {
      quote: "80% faster first drafts. What used to take us two days is now done in two hours.",
      author: "NT",
      title: "Managing Partner",
      company: "Northbridge Tax Advisory"
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
    <div className="min-h-screen bg-[#0A0A0D]">
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section className="min-h-[90vh] flex flex-col justify-end relative overflow-hidden pb-20">
        {/* Wave background video — low opacity */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-35"
            style={{ willChange: 'transform' }}
          >
            <source src="/wave-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0A0A0D]/50"></div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-6 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              • AI Infrastructure for Tax
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-[62px] font-semibold text-white mb-6 leading-[1.1] tracking-tight">
              Powering Tax Experts.
              <br />
              Fueling Firm Growth.
            </h1>
            <p className="text-xl text-[#9b9ba3] mb-10 max-w-2xl mx-auto font-light">
              Smart Automation Built for Scaling Tax Firms
            </p>
            <motion.button
              onClick={onBookDemo}
              className="bg-[#F5EDE7] text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-white transition-all flex items-center mx-auto text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — PRODUCT VIDEO SHOWCASE
      ═══════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-[#120E1A] px-4 py-2.5 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-gray-700/50 rounded-md px-3 py-0.5 text-[10px] text-gray-400">
                    app.signalshq.io/dashboard
                  </div>
                </div>
              </div>
              {/* Video Content */}
              <div className="relative bg-black overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — STATS + PROBLEM CALLOUTS
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 wave-bg relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight text-left">
                Cut research and preparation hours with <span className="italic text-white">AI-driven automation.</span>
              </h2>
              <p className="text-[#9b9ba3] mb-8 text-lg leading-relaxed text-left">
                One reliable layer for <span className="text-white font-medium">authoritative answers</span>, <span className="text-white font-medium">automated intake and extraction</span>, and <span className="text-white font-medium">streamlined prep</span> to help your firm cut busy-season grind and redirect time to advisory.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-left">
                  <div className="text-3xl font-semibold text-white mb-1">4+ hrs</div>
                  <div className="text-sm text-[#9b9ba3]">Time saved</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-semibold text-white mb-1">2X</div>
                  <div className="text-sm text-[#9b9ba3]">Advisory Revenue</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-semibold text-white mb-1">95%+</div>
                  <div className="text-sm text-[#9b9ba3]">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative min-h-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Fresnel diffraction image - blended with background */}
                <div 
                  className="relative w-[130%] h-[130%]"
                  style={{
                    maskImage: 'radial-gradient(ellipse 75% 75% at center, black 35%, transparent 65%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 35%, transparent 65%)'
                  }}
                >
                  <img 
                    src="/fresnel-pattern.png" 
                    alt="" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              {problemCallouts.map((callout, index) => {
                const isLeft = index % 2 === 0;
                const positions = [
                  { top: 8, left: 5 },
                  { top: 22, left: 55 },
                  { top: 38, left: 2 },
                  { top: 54, left: 50 },
                  { top: 70, left: 8 },
                ];
                const pos = positions[index] || { top: 10 + index * 18, left: isLeft ? 5 : 50 };
                return (
                  <motion.div
                    key={index}
                    className={`absolute flex items-center gap-2 px-4 py-2 rounded-full text-[13px] text-white/90 font-medium border border-white/10 ${isLeft ? '' : 'ml-auto'}`}
                    style={{
                      top: `${pos.top}%`,
                      left: `${pos.left}%`,
                      backgroundColor: '#1C1C22'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ 
                        backgroundColor: isLeft ? '#9b8ec4' : '#7eb8e8' 
                      }}
                    />
                    {callout}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5-6 — PRODUCT FEATURE TABS (static)
      ═══════════════════════════════════════════ */}
      <section id="features" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-4 font-mono">• Product</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight whitespace-nowrap">
              Cut research and preparation hours with AI-driven automation.
            </h2>
          </div>

          {/* Feature Block 1 — TAX ASSIST */}
          <div className="mb-6 rounded-2xl border border-[#2A2A32] overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] mx-auto" style={{ width: '960px', height: '280px', borderWidth: '0.889px', maxWidth: '100%' }}>
            <div className="grid grid-cols-2 h-full">
              {/* Left — Text (slightly lighter dark) */}
              <div className="p-5 flex flex-col justify-center bg-[#16161C]">
                <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-1.5 font-mono">• Tax Assist</span>
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 leading-tight">Instant, reliable answers to your tax questions.</h3>
                <ul className="space-y-2">
                  {["Direct IRS citations & court ruling references", "Federal & SALT coverage across all 50 states", "Context-aware answers", "Exportable memos for client-ready documentation"].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-3.5 h-3.5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#9b9ba3] text-[12px] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right — Mockup (darker) */}
              <div className="p-4 flex items-center justify-center relative overflow-hidden bg-[#111116]">
                {/* Floating tags */}
                <div className="absolute top-4 right-8 px-2 py-0.5 border border-gray-600 rounded text-[10px] text-gray-300 bg-[#120E1A]">Federal</div>
                <div className="absolute top-1/2 right-3 px-2 py-0.5 border border-gray-600 rounded text-[10px] text-gray-300 bg-[#120E1A]">State</div>
                <div className="absolute bottom-4 left-6 px-2 py-0.5 border border-gray-600 rounded text-[10px] text-gray-300 bg-[#120E1A]">Local</div>
                {/* Main card */}
                <div className="relative w-full max-w-[260px] bg-[#120E1A]/70 rounded-xl p-3 border border-gray-700/50 backdrop-blur-sm z-10">
                  <p className="text-gray-300 text-[11px] leading-snug mb-2">Can an S corporation hold QSBS stock under § 1202, and how does an ownership change affect available exclusion?</p>
                  <div className="flex items-center gap-2 border-t border-gray-700/50 pt-2">
                    <span className="text-[9px] text-gray-500">IRC § 63(c)...</span>
                    <span className="text-[9px] text-gray-500">Rev...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Block 2 — CLIENT ORGANIZER */}
          <div className="mb-6 rounded-2xl border border-[#2A2A32] overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] mx-auto" style={{ width: '960px', height: '280px', borderWidth: '0.889px', maxWidth: '100%' }}>
            <div className="grid grid-cols-2 h-full">
              {/* Left — Mockup (slightly lighter dark) */}
              <div className="p-4 flex items-center justify-center relative overflow-hidden bg-[#16161C]">
                {/* Overlapping avatars */}
                <div className="relative w-full h-full">
                  {/* Vertex Tax avatar */}
                  <div className="absolute top-0 left-1/2 -translate-x-8 z-20">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/50">
                        <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">V</div>
                      </div>
                      <span className="absolute -top-1 -left-1 bg-green-500 text-white text-[7px] px-1 py-0.5 rounded-full font-semibold">+26</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 ml-1">
                      <span className="w-3 h-3 bg-purple-500 rounded-full flex items-center justify-center text-white text-[7px] font-semibold">V</span>
                      <span className="text-white text-[9px] font-medium bg-[#120E1A]/80 px-1 py-0.5 rounded">Vertex Tax</span>
                    </div>
                  </div>
                  {/* Samantha avatar */}
                  <div className="absolute top-12 left-0 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-400/50">
                        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-purple-300 flex items-center justify-center text-white text-xs font-semibold">S</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-3 h-3 bg-pink-500 rounded-full flex items-center justify-center text-white text-[7px] font-semibold">S</span>
                      <span className="text-white text-[9px] font-medium bg-[#120E1A]/80 px-1 py-0.5 rounded">Samantha</span>
                    </div>
                  </div>
                  {/* Document stack */}
                  <div className="absolute top-8 left-1/2 -translate-x-1 z-30">
                    <div className="w-10 h-12 bg-gray-700/80 rounded border border-gray-600/50 flex flex-col items-center justify-center">
                      <div className="w-6 h-0.5 bg-gray-500/60 rounded mb-0.5"></div>
                      <div className="w-6 h-0.5 bg-gray-500/60 rounded mb-0.5"></div>
                      <div className="w-6 h-0.5 bg-gray-500/60 rounded mb-0.5"></div>
                      <span className="text-[6px] text-gray-400 mt-0.5 font-mono">1040</span>
                    </div>
                  </div>
                  {/* Elevare & Co avatar */}
                  <div className="absolute bottom-0 right-4 z-20">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400/50">
                        <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-xs font-semibold">E</div>
                      </div>
                      <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[7px] px-1 py-0.5 rounded-full font-semibold">+45</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 ml-1">
                      <span className="w-3 h-3 bg-gray-500 rounded-full flex items-center justify-center text-white text-[7px] font-semibold">E</span>
                      <span className="text-white text-[9px] font-medium bg-[#120E1A]/80 px-1 py-0.5 rounded">Elevare & Co.</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right — Text (darker) */}
              <div className="p-5 flex flex-col justify-center bg-[#111116]">
                <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-1.5 font-mono">• Client Organizer</span>
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 leading-tight">Client Data in One Place. Structured. Searchable.</h3>
                <ul className="space-y-2">
                  {["AI document intake; drag, drop, done", "K-1, 1099s, W-2s auto-extraction at 95%+ accuracy", "360° client overview with smart categorization", "Automated binders"].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-3.5 h-3.5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#9b9ba3] text-[12px] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Block 3 — CLIENT REVIEW */}
          <div className="rounded-2xl border border-[#2A2A32] overflow-hidden hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.10)] mx-auto" style={{ width: '960px', height: '280px', borderWidth: '0.889px', maxWidth: '100%' }}>
            <div className="grid grid-cols-2 h-full">
              {/* Left — Text (slightly lighter dark) */}
              <div className="p-5 flex flex-col justify-center bg-[#16161C]">
                <span className="inline-block text-[9px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-1.5 font-mono">• Client Review</span>
                <h3 className="text-lg md:text-xl font-medium text-white mb-3 leading-tight">Get workpaper insight. Zero Manual Grind.</h3>
                <ul className="space-y-2">
                  {["Current-year category rollups", "Multi-entity support for 1040, 1065, 1120-S", "Auto-Generated Workpapers", "AI-drafted first-pass returns; 70% faster prep"].map((point, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-3.5 h-3.5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-[#9b9ba3] text-[12px] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="inline-block mt-3 px-3 py-1 bg-gray-700/40 text-gray-300 text-[10px] rounded-lg border border-gray-700/50 w-fit">
                  Coming soon
                </span>
              </div>
              {/* Right — Mockup (darker) */}
              <div className="p-4 flex items-center justify-center bg-[#111116]">
                <div className="relative w-full max-w-[180px]">
                  {/* Photo oval */}
                  <div className="relative w-24 h-24 mx-auto mb-2 rounded-full overflow-hidden border-2 border-gray-600/30">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 to-[#120E1A] flex items-center justify-center">
                      <div className="flex -space-x-1.5">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-[#111116]"></div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 border-2 border-[#111116]"></div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-[#111116]"></div>
                      </div>
                    </div>
                    <div className="absolute -top-0.5 -left-0.5 w-5 h-5 bg-pink-500/80 rounded flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
                    </div>
                  </div>
                  {/* Savings card */}
                  <div className="bg-white rounded-lg p-2 ml-auto max-w-[140px]">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-gray-500 text-[7px] leading-tight">Suggested<br/>Tax Savings</span>
                      <span className="text-gray-900 text-xs font-semibold">$700-2000</span>
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1">
                        <Check className="w-2 h-2 text-green-500" />
                        <span className="text-gray-700 text-[8px]">Child Tax Credit</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="w-2 h-2 text-green-500" />
                        <span className="text-gray-700 text-[8px]">Healthcare Savings</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 flex items-center justify-center text-red-400 text-[7px]">✕</span>
                        <span className="text-gray-700 text-[8px]">Oil & Gas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5b — PRICING
      ═══════════════════════════════════════════ */}
      <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 wave-bg relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-4 font-mono">• Pricing</span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Simple Subscription to Scale your <span className="italic text-white">Practice</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingCards.map((plan, index) => (
              <motion.div
                key={plan.name}
                className="bg-[#111116] rounded-[20px] p-8 border border-[#2A2A32] hover:border-gray-600 transition-all flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7 — USE CASE
      ═══════════════════════════════════════════ */}
      <section id="use-case" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-4 font-mono">• Use Case</span>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Focus on <span className="italic text-white">high-value</span> client outcomes.
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-[#120E1A] rounded-2xl p-5 border border-gray-700/50 hover:border-gray-600 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 icon-accent-bg rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <ArrowRight className="w-5 h-5 icon-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 text-center">{useCase.title}</h3>
                <p className="text-[#9b9ba3] text-[13px] leading-relaxed text-center">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8 — TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 wave-bg relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#9b9ba3] mb-4 font-mono">• Customer Stories</span>
            <h2 className="text-3xl md:text-[38px] font-semibold text-white leading-tight">
              Trusted by firms <span className="italic text-white">across the board</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#120E1A] rounded-2xl p-6 border border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="w-7 h-7 icon-accent mb-3.5 mx-auto" />
                <p className="text-[#9b9ba3] text-sm italic mb-5 leading-relaxed text-center">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center">
                  <div className="w-11 h-11 icon-accent-bg rounded-full flex items-center justify-center mr-3.5">
                    <span className="icon-accent font-semibold text-sm">{testimonial.author}</span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-[15px]">{testimonial.author}</div>
                    <div className="text-[#9b9ba3] text-[13px]">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10 — CLOSING CTA / BOOK DEMO
      ═══════════════════════════════════════════ */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0D] via-[#1a1a2e] to-[#0A0A0D]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#F5EDE7]/8 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-10 leading-tight">
              Get hands-on with <span className="italic text-white">AI-powered tax automation</span> today.
            </h2>
            <motion.button
              onClick={onBookDemo}
              className="bg-[#F5EDE7] text-gray-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-white transition-all text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WAVE VIDEO SECTION (above footer)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full aspect-video overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        >
          <source src="/wave-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0A0A0D]/30"></div>
      </section>
    </div>
  );
};

export default Home;
