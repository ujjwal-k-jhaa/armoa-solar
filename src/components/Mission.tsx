import { motion } from 'motion/react';
import { Leaf, Battery, Zap } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Zero Carbon Footprint",
    description: "Our advanced photovoltaic cells ensure maximum energy capture while completely eliminating your dependence on fossil fuels."
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: "Intelligent Storage",
    description: "Sleek, wall-mounted solid-state batteries store excess energy quietly, ensuring power continuity with zero aesthetic compromise."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Smart Grid Integration",
    description: "Proprietary AI dynamically balances your home's energy consumption, selling surplus back to the grid automatically."
  }
];

export default function Mission() {
  return (
    <section id="vision" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Design that respects <br/>
              <span className="font-semibold">the environment.</span>
            </h2>
            <p className="text-lg text-gray-500 font-light leading-relaxed mb-12">
              True sustainability shouldn't require compromising on aesthetics. We engineer solar solutions that elevate the architecture of your home while quietly reversing your carbon footprint.
            </p>

            <div className="space-y-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" 
              alt="Modern solar installation"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glass card overlay */}
            <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-1">Efficiency</p>
                  <p className="text-3xl font-display font-semibold text-gray-900">98.4%</p>
                </div>
                <div className="w-px h-12 bg-gray-300/50"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-1">Lifespan</p>
                  <p className="text-3xl font-display font-semibold text-gray-900">30 Yrs</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
