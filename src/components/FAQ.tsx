import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does the installation process typically take?",
    answer: "Our streamlined installation process usually takes 1-3 days, depending on the complexity of your roof and the size of the system. We handle all permits and inspections prior to arrival to minimize disruption to your home."
  },
  {
    question: "Are the solar panels resistant to extreme weather?",
    answer: "Yes. Our premium panels are engineered with tempered glass and reinforced frames, capable of withstanding heavy snow loads, hail, and high winds up to 140 mph. They consistently outperform standard panels in rigorous durability tests."
  },
  {
    question: "What maintenance is required for the system?",
    answer: "Armoa systems are largely maintenance-free. Occasional cleaning (once or twice a year) is recommended to ensure maximum efficiency. Our companion app monitors your system 24/7 and will alert you if performance drops, indicating a need for cleaning or service."
  },
  {
    question: "Do I still have power during a grid outage?",
    answer: "If you opt for our Intelligent Storage battery solution, your home will seamlessly transition to backup power during an outage. Without a battery, standard grid-tied solar systems automatically shut off during outages for the safety of utility workers."
  },
  {
    question: "How does the aesthetic integration work?",
    answer: "We use low-profile mounting hardware, skirtings, and strategically placed wiring conduits to ensure the panels look like a deliberate architectural feature rather than an afterthought. We also offer all-black panels that blend beautifully with dark roofing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Common <span className="font-semibold">Inquiries.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Everything you need to know about transitioning to Armoa Solar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleOpen(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900 pr-8">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 transition-transform duration-300">
                  {openIndex === index ? <Minus className="w-4 h-4 text-amber-500" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-gray-500 font-light leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
