import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Armoa transformed our home's energy profile without compromising its mid-century modern aesthetic. The integration is practically invisible.",
    author: "Sarah Jenkins",
    role: "Homeowner, Palo Alto",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "Our energy bills have dropped to zero, and the sleek panels actually enhance the roofline. A true marvel of modern engineering.",
    author: "David Chen",
    role: "Architect, Austin",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "The smart grid integration is flawless. We're consistently selling power back to the grid, and the app makes tracking it beautifully simple.",
    author: "Elena Rodriguez",
    role: "Tech Executive, Seattle",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Trusted by <span className="font-semibold">visionaries.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Discover how we've helped homeowners and architects redefine what's possible with sustainable energy.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all border border-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 z-10 hidden sm:block">
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-all border border-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden rounded-3xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid md:grid-cols-2 gap-0 bg-gray-50"
              >
                <div className="relative h-[300px] md:h-[500px]">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt="Project"
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center relative bg-white md:rounded-l-3xl shadow-[-10px_0_30px_rgb(0,0,0,0.03)] z-10">
                  <Quote className="w-12 h-12 text-amber-500/20 mb-6" />
                  <p className="text-xl md:text-2xl font-light text-gray-900 leading-relaxed mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center items-center gap-4 mt-8">
            <button onClick={prev} className="sm:hidden p-2 text-gray-500 hover:text-gray-900"><ChevronLeft className="w-6 h-6"/></button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-amber-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className="sm:hidden p-2 text-gray-500 hover:text-gray-900"><ChevronRight className="w-6 h-6"/></button>
          </div>
        </div>
      </div>
    </section>
  );
}
