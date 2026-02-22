import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Play, Mic } from 'lucide-react';
import { mockData } from '../data/mockData';

export default function Overview() {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white mb-2">Mission Control</h1>
          <p className="text-slate-400">AI-powered intelligence for high-stakes pharma projects</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="text-red-400" size={20} />
                </div>
                <h2 className="text-xl font-semibold text-white">The Radar</h2>
                <div className="ml-auto">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockData.radarAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`p-4 rounded-xl border ${
                      alert.severity === 'critical'
                        ? 'bg-red-500/10 border-red-500/30'
                        : 'bg-yellow-500/10 border-yellow-500/30'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{alert.icon}</span>
                      <p
                        className={`text-sm ${
                          alert.severity === 'critical' ? 'text-red-300' : 'text-yellow-300'
                        }`}
                      >
                        {alert.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
            >
              <h2 className="text-xl font-semibold text-white mb-4">Critical Action Required</h2>
              <div className="space-y-3">
                {mockData.criticalActions.map((action, index) => (
                  <motion.div
                    key={action.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          action.priority === 'critical'
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-orange-500/20 text-orange-400'
                        }`}
                      >
                        {action.priority.toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="text-white group-hover:text-cyan-400 transition-colors">
                          {action.title}
                        </p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400">
                          <span>{action.source}</span>
                          <span>•</span>
                          <span>{action.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Project Health Snapshot</h2>
              <div className="space-y-6">
                {mockData.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-white font-medium">{project.name}</h3>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            project.status === 'at-risk'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {project.status === 'at-risk' ? 'At Risk' : 'On Track'}
                        </span>
                      </div>
                      <span className="text-slate-400 text-sm">{project.progress}%</span>
                    </div>
                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-cyan-400" size={20} />
                <h2 className="text-lg font-semibold text-white">Timezone Watch</h2>
              </div>
              <div className="space-y-4">
                {mockData.timezones.map((tz) => (
                  <div
                    key={tz.id}
                    className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium text-sm">{tz.location}</p>
                        <p className="text-slate-400 text-xs mt-1">{tz.timezone}</p>
                      </div>
                      <div className="text-2xl font-bold text-cyan-400">{tz.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-950 to-blue-950 rounded-2xl border border-cyan-500/30 p-6 backdrop-blur-xl shadow-lg shadow-cyan-500/10"
            >
              <h2 className="text-lg font-semibold text-white mb-4">Voice Briefing</h2>

              <div className="flex items-center justify-center gap-3 h-20 mb-4">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-cyan-400 rounded-full"
                    animate={{
                      height: [8, Math.random() * 60 + 10, 8],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                  <Play size={18} />
                  Play Briefing
                </button>
                <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700">
                  <Mic size={18} />
                  Voice Command
                </button>
              </div>

              <p className="text-xs text-cyan-300/60 text-center mt-4">
                Last updated: 2 minutes ago
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
