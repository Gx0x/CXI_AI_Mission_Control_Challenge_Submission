import { motion } from 'framer-motion';
import { Users, AlertCircle, CheckCircle, TrendingDown, Zap } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useState } from 'react';

export default function TeamWorkspaces() {
  const [isSendingNudge, setIsSendingNudge] = useState(false);

  const handleSendNudge = () => {
    setIsSendingNudge(true);
    setTimeout(() => setIsSendingNudge(false), 3000);
  };

  const getMoraleIcon = (morale: string) => {
    switch (morale) {
      case 'High':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'Medium':
        return <AlertCircle className="text-yellow-400" size={20} />;
      case 'Low':
        return <TrendingDown className="text-red-400" size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-cyan-400" size={28} />
                <h1 className="text-3xl font-bold text-white">Team Workspaces</h1>
              </div>
              <p className="text-slate-400">Monitor pod performance and team health</p>
            </div>
            <button
              onClick={handleSendNudge}
              disabled={isSendingNudge}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-cyan-500/50 disabled:to-blue-500/50 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
            >
              {isSendingNudge ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Zap size={20} />
                  </motion.div>
                  Drafting Nudges...
                </>
              ) : (
                <>
                  <Zap size={20} />
                  Send Mass AI Nudge
                </>
              )}
            </button>
          </div>
        </motion.div>

        {isSendingNudge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Zap className="text-cyan-400" size={20} />
              </motion.div>
              <div className="flex-1">
                <p className="text-cyan-300 font-semibold">AI is drafting personalized nudges...</p>
                <p className="text-cyan-400/70 text-sm mt-1">
                  Analyzing pod performance, identifying blockers, and crafting contextual messages
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockData.teamPods.map((pod, index) => (
            <motion.div
              key={pod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${pod.color}20` }}
                  >
                    <Users style={{ color: pod.color }} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{pod.name}</h3>
                    <p className="text-slate-400 text-sm">Lead: {pod.lead}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getMoraleIcon(pod.moraleIndicator)}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 text-xs mb-1">Open Tickets</p>
                  <p className="text-2xl font-bold text-white">{pod.openTickets}</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 text-xs mb-1">Active Blockers</p>
                  <p
                    className="text-2xl font-bold"
                    style={{
                      color: pod.activeBlockers > 3 ? '#ef4444' : '#10b981',
                    }}
                  >
                    {pod.activeBlockers}
                  </p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-slate-400 text-xs mb-1">Morale</p>
                  <p
                    className="text-sm font-bold"
                    style={{
                      color:
                        pod.moraleIndicator === 'High'
                          ? '#10b981'
                          : pod.moraleIndicator === 'Medium'
                          ? '#f59e0b'
                          : '#ef4444',
                    }}
                  >
                    {pod.moraleIndicator}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {pod.activeBlockers > 0 && (
                  <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle className="text-red-400" size={14} />
                      <span className="text-xs font-semibold text-red-400">ACTIVE ISSUES</span>
                    </div>
                    <p className="text-red-300 text-sm">
                      {pod.activeBlockers === 1
                        ? '1 critical blocker'
                        : `${pod.activeBlockers} blockers`}{' '}
                      preventing progress on key deliverables
                    </p>
                  </div>
                )}

                {pod.moraleIndicator === 'Low' && (
                  <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingDown className="text-yellow-400" size={14} />
                      <span className="text-xs font-semibold text-yellow-400">MORALE ALERT</span>
                    </div>
                    <p className="text-yellow-300 text-sm">
                      Team showing signs of burnout. Consider workload rebalancing.
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-colors border border-slate-700">
                    View Details
                  </button>
                  <button
                    className="flex-1 py-2 text-white rounded-lg text-sm font-semibold transition-colors"
                    style={{ backgroundColor: `${pod.color}40`, border: `1px solid ${pod.color}60` }}
                  >
                    Send Update Request
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Cross-Pod Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p className="text-slate-400 text-sm mb-2">High-Risk Dependencies</p>
              <p className="text-white">
                Offshore QA Pod blocked on Pharma Frontend Pod API specs
              </p>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
              <p className="text-slate-400 text-sm mb-2">Resource Optimization</p>
              <p className="text-white">
                HR Backend Pod has capacity to assist with Pharma critical path
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
