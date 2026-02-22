import { motion } from 'framer-motion';
import { TrendingUp, Activity } from 'lucide-react';
import { mockData } from '../data/mockData';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
        <p className="text-white font-semibold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function KPIIntelligence() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Activity className="text-cyan-400" size={28} />
            <h1 className="text-3xl font-bold text-white">KPI Intelligence</h1>
          </div>
          <p className="text-slate-400">Autonomous Data Extraction Analytics</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-cyan-400" size={20} />
              <h2 className="text-xl font-semibold text-white">
                Sprint Velocity vs. Reported Blockers
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={mockData.velocityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  dataKey="sprint"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                  tickLine={{ stroke: '#334155' }}
                />
                <YAxis
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                  tickLine={{ stroke: '#334155' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ color: '#94a3b8' }}
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-slate-300">{value}</span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="velocity"
                  name="Sprint Velocity"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={{ fill: '#38bdf8', r: 5 }}
                  activeDot={{ r: 7 }}
                />
                <Line
                  type="monotone"
                  dataKey="blockers"
                  name="Blockers"
                  stroke="#ef4444"
                  strokeWidth={3}
                  dot={{ fill: '#ef4444', r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p className="text-sm text-slate-300">
                <span className="text-red-400 font-semibold">AI Insight:</span> Strong inverse
                correlation detected. Sprint 24 shows 11 blockers with velocity at 28 points —
                lowest in 6 sprints. Current sprint trending similar. Recommend immediate
                blocker resolution session.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-cyan-400" size={20} />
              <h2 className="text-xl font-semibold text-white">
                Bug Reports via Client Email
              </h2>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={mockData.bugReportData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis
                  dataKey="week"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                  tickLine={{ stroke: '#334155' }}
                />
                <YAxis
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8' }}
                  tickLine={{ stroke: '#334155' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ color: '#94a3b8' }}
                  iconType="square"
                  formatter={(value) => (
                    <span className="text-slate-300">{value}</span>
                  )}
                />
                <Bar
                  dataKey="critical"
                  name="Critical"
                  stackId="a"
                  fill="#ef4444"
                  radius={[0, 0, 4, 4]}
                />
                <Bar
                  dataKey="major"
                  name="Major"
                  stackId="a"
                  fill="#f97316"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p className="text-sm text-slate-300">
                <span className="text-red-400 font-semibold">AI Insight:</span> Week 4 spike
                coincides with Pharma client UAT session. 7 critical bugs reported directly via
                email, bypassing Jira. Suggests QA process gap. 22 total issues in Week 4 — 73%
                above baseline.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                label: 'Avg Response Time',
                value: '2.4h',
                change: '+12%',
                status: 'warning',
              },
              {
                label: 'Client Satisfaction',
                value: '87%',
                change: '-5%',
                status: 'warning',
              },
              {
                label: 'Code Review Velocity',
                value: '4.2h',
                change: '-18%',
                status: 'good',
              },
            ].map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 p-6 backdrop-blur-xl"
              >
                <p className="text-slate-400 text-sm mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold text-white">{metric.value}</p>
                  <span
                    className={`text-sm font-semibold ${
                      metric.status === 'good' ? 'text-green-400' : 'text-orange-400'
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
