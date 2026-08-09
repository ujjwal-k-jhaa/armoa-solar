import { motion } from 'motion/react';
import { ArrowRight, Mail, MapPin, Phone, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function FooterContact() {
  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-light mb-6">
              Begin your <br />
              <span className="font-semibold text-amber-500">transition.</span>
            </h2>
            <p className="text-gray-400 font-light text-lg mb-12 max-w-md">
              Connect with our energy architects to design a bespoke solar solution for your property.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-light">100 Innovation Drive, Silicon Valley, CA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-light">architects@armoasolar.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-500" />
                </div>
                <span className="font-light">+1 (800) 555-0199</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="glass-dark p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Property Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-amber-500 text-gray-900 font-semibold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors">
                Request Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Newsletter Section */}
        <div className="mb-20 pb-20 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h3 className="text-2xl font-light mb-3">Stay illuminated.</h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Join our newsletter for the latest in sustainable energy architecture and Armoa updates.
            </p>
          </div>
          <form className="w-full max-w-md flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors text-sm"
            />
            <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/20 transition-colors text-sm whitespace-nowrap border border-white/10">
              Subscribe
            </button>
          </form>
        </div>

        {/* Portfolio Disclaimer */}
        <div className="mb-8 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-gray-400 text-sm font-light">
            <span className="font-medium text-gray-300">Portfolio Project:</span> This website is for demonstration purposes only and does not represent a real business.
          </p>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
          <div className="flex items-center gap-2">
             <span className="font-display font-semibold text-xl tracking-tight text-white">Armoa</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <p className="text-gray-500 text-sm font-light">© 2026 Armoa Solar. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500 font-light justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
