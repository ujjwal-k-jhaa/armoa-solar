import { motion, AnimatePresence } from 'motion/react';
import { Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? 'top-4 px-4' : 'top-0 px-6 md:px-12 py-6'
      }`}
    >
      <div 
        className={`flex items-center justify-between w-full transition-all duration-500 ${
          scrolled 
            ? 'max-w-4xl glass px-6 py-3.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60' 
            : 'max-w-7xl'
        }`}
      >
        <div className="flex items-center gap-2">
          <Sun className="w-6 h-6 text-amber-500" />
          <span className="font-display font-semibold text-xl tracking-tight text-gray-900">
            Armoa
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Vision', 'Impact', 'Technology', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            Get an Estimate
          </button>
        </div>

        <div className="md:hidden">
          <button 
            className="p-2 flex flex-col justify-center items-end gap-1.5 group"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="block w-6 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover:w-4"></span>
            <span className="block w-4 h-[1.5px] bg-gray-900 transition-all duration-300 group-hover:w-6"></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#FAFAFA]/90 flex flex-col justify-center items-center"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full bg-white shadow-sm border border-gray-100 text-gray-900 hover:scale-105 transition-transform"
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <div className="flex flex-col items-center gap-10">
              {['Vision', 'Impact', 'Technology', 'Contact'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 hover:text-amber-500 transition-colors inline-block"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <button className="bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                  Get an Estimate
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
