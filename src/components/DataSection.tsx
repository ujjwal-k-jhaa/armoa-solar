import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2020', savings: 4000, cost: 2400 },
  { year: '2021', savings: 3000, cost: 1398 },
  { year: '2022', savings: 2000, cost: 9800 },
  { year: '2023', savings: 2780, cost: 3908 },
  { year: '2024', savings: 1890, cost: 4800 },
  { year: '2025', savings: 2390, cost: 3800 },
  { year: '2026', savings: 3490, cost: 4300 },
];

const customTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-xl shadow-xl">
        <p className="text-sm font-medium text-gray-500 mb-2">{label}</p>
        <p className="text-lg font-semibold text-gray-900">
          Energy Savings: <span className="text-amber-500">{payload[0].value} kWh</span>
        </p>
      </div>
    );
  }
  return null;
};

export default function DataSection() {
  return (
    <section id="impact" className="py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Measurable <span className="font-semibold">impact.</span>
          </h2>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Track your contribution to a sustainable future. Our systems provide real-time telemetry on energy generation, consumption, and grid independence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 mb-2">Energy Independence Over Time</h3>
              <p className="text-gray-500 font-light">Average household cumulative savings (kWh)</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-gray-600 font-medium">Generation</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="year" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false}
                  tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 500 }}
                  dx={-10}
                />
                <Tooltip content={customTooltip} />
                <Area 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#F59E0B" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorSavings)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
