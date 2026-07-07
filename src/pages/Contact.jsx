import { motion } from 'framer-motion';

const Contact = ({ onBookDemo }) => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0D]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 ">
          {/* Left Column — Heading + Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
              Let's connect
            </h1>
            <p className="text-[#9b9ba3] text-base leading-relaxed mb-10 max-w-sm">
              Have questions? We're here to help. Reach out to us and our team will get back to you as soon as possible.
            </p>

            <div className="mb-8">
              <p className="text-[#9b9ba3] text-sm mb-1">Email</p>
              <a href="mailto:contact@signalshq.io" className="text-white font-medium hover:text-[#9b9ba3] transition-colors">
                contact@signalshq.io
              </a>
            </div>

            <div>
              <p className="text-[#9b9ba3] text-sm mb-2">Follow us</p>
              <a href="#" className="inline-flex items-center justify-center w-8 h-8 bg-white/10 rounded-md text-white hover:bg-white/20 transition-colors text-sm font-semibold">
                in
              </a>
            </div>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors text-white placeholder-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-5 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors text-white placeholder-gray-500 text-sm"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full px-5 py-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 transition-colors resize-none text-white placeholder-gray-500 text-sm"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-[#1a1a3e] text-white py-4 rounded-lg font-medium hover:bg-[#24244a] transition-colors text-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
