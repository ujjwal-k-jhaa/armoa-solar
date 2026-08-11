import { motion } from 'motion/react';
import { ArrowRight, Sun, Play, Activity, Battery, Zap, ChevronRight, TrendingUp } from 'lucide-react';

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
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl w-full z-20">
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
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-light text-gray-900 leading-[1.05] mb-8 tracking-tight"
          >
            <span className="xl:whitespace-nowrap">Powering tomorrow,</span> <br />
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

        {/* Modern Premium Data Visualization Hub */}
        <div className="hidden lg:block relative w-[450px]">
          {/* Background Decorative Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-[400px] h-[400px] rounded-full border border-gray-200/50 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] rounded-full border border-gray-200/40"
            />
          </div>

          <div className="relative z-10 h-[500px] flex flex-col justify-between py-6">
            {/* Top Card: Efficiency */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="glass p-5 rounded-2xl w-64 shadow-[0_20px_40px_rgb(0,0,0,0.05)] border-white/80 self-end mr-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full text-xs font-medium border border-emerald-100">
                  <TrendingUp className="w-3 h-3" />
                  +2.4%
                </div>
              </div>
              <p className="text-2xl font-display font-semibold text-gray-900">99.8%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mt-1">Grid Uptime</p>
            </motion.div>

            {/* Connecting Lines and Arrows Center piece */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-2xl z-20 border-4 border-white/50 backdrop-blur-sm relative"
              >
                <Zap className="w-6 h-6 text-amber-400" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border border-amber-400"
                />
              </motion.div>

              {/* Connecting animated paths */}
              <svg className="absolute w-[450px] h-[500px] z-10 pointer-events-none" viewBox="0 0 450 500">
                {/* Arrow to Top Card */}
                <motion.path
                  d="M225 250 L 350 120"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.6 }}
                />
                {/* Arrow to Bottom Card */}
                <motion.path
                  d="M225 250 L 150 380"
                  stroke="url(#gradient2)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 1.8 }}
                />
                
                {/* Moving dots on paths */}
                <circle r="3" fill="#FBBF24">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M225 250 L 350 120"
                  />
                </circle>
                <circle r="3" fill="#34D399">
                  <animateMotion
                    dur="2.5s"
                    repeatCount="indefinite"
                    path="M225 250 L 150 380"
                  />
                </circle>

                <defs>
                  <linearGradient id="gradient1" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
                    <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.5" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Bottom Card: Output & Storage */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="glass p-6 rounded-3xl w-72 shadow-[0_20px_40px_rgb(0,0,0,0.06)] border-white/80 self-start ml-4 mt-auto z-20"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">Live Output</p>
                  <p className="text-3xl font-display font-semibold text-gray-900">14.2 <span className="text-lg text-gray-500 font-medium">kW</span></p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
                  <Activity className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <div className="h-10 w-full flex items-end gap-1 mb-4">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 1.5 + (i * 0.1) }}
                    className="flex-1 bg-gradient-to-t from-gray-900 to-gray-500 rounded-t-sm opacity-20 hover:opacity-40 transition-opacity" 
                  />
                ))}
              </div>

              <div className="pt-4 border-t border-gray-200/50 flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-emerald-500" />
                  <span className="text-sm font-medium text-gray-900">Storage at 84%</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          </div>
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
