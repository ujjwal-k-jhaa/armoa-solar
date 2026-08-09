import { motion } from 'motion/react';
import { ArrowRight, Sun, Play, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop"
          alt="Solar energy landscape"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Subtle premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA]/95 via-[#FAFAFA]/80 to-transparent" />
        
        {/* Decorative glowing orb behind content for modern tech feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-2xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-amber-200/50 bg-white/60 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest text-amber-900 uppercase">
              Live Generation Active
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-light text-gray-900 leading-[1.05] mb-8 tracking-tight"
          >
            Powering tomorrow, <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                elegantly.
              </span>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 right-0 h-[6px] bg-amber-400 origin-left rounded-full z-0 opacity-80"
              />
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
                className="absolute -bottom-3 left-8 right-8 h-[2px] bg-amber-300 origin-right rounded-full z-0 opacity-60"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-12 max-w-lg"
          >
            We integrate high-efficiency solar architecture seamlessly into your property, blending uncompromising aesthetics with unparalleled sustainability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <button className="flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              Discover Armoa
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-3 px-6 py-4 text-gray-900 font-medium hover:text-gray-600 transition-colors group">
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform bg-white/50 backdrop-blur-sm">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              Watch Film
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 pt-8 border-t border-gray-200/50 hidden md:block"
          >
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-6">Recognized for excellence by</p>
            <div className="flex items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <span className="font-display font-bold text-xl tracking-tighter text-gray-900">WIRED</span>
              <span className="font-display font-semibold text-lg uppercase tracking-widest text-gray-900">Architectural Digest</span>
              <span className="font-display font-medium text-xl tracking-wide text-gray-900">Forbes</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Glassmorphic Badges */}
        <div className="hidden lg:flex flex-col gap-6 relative right-8">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="glass p-6 rounded-3xl w-72 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border-white/60 ml-12"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                <Sun className="w-6 h-6 text-amber-500" />
              </div>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <p className="text-3xl font-display font-semibold text-gray-900">99.8%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mt-1">Grid Uptime</p>
            </div>
            <p className="text-sm text-gray-500 font-light leading-relaxed mt-4 pt-4 border-t border-gray-200/50">
              Proprietary micro-inverter tech ensuring flawless delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 1.4 }}
            className="glass p-6 rounded-3xl w-72 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border-white/60 -ml-8"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Current Output</p>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-3xl font-display font-semibold text-gray-900 mb-4">14.2 <span className="text-lg text-gray-500 font-medium">kW</span></p>
            <div className="h-12 w-full flex items-end gap-1">
              {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-gray-900 to-gray-600 rounded-t-sm opacity-20" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
