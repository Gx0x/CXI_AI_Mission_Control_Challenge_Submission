import { motion } from 'framer-motion';
import { Mail, MessageSquare, CheckSquare, ExternalLink, Sparkles } from 'lucide-react';
import { mockData } from '../data/mockData';
import { useState } from 'react';

const sourceIcons = {
  Outlook: Mail,
  Slack: MessageSquare,
  Jira: CheckSquare,
};

export default function AITriage() {
  const [draftingId, setDraftingId] = useState<string | null>(null);

  const handleDraftReply = (id: string) => {
    setDraftingId(id);
    setTimeout(() => setDraftingId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="text-cyan-400" size={28} />
            <h1 className="text-3xl font-bold text-white">AI Triage</h1>
          </div>
          <p className="text-slate-400">
            AI-processed communications ranked by urgency and impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {mockData.commCards.map((card, index) => {
            const SourceIcon = sourceIcons[card.source];
            const isDrafting = draftingId === card.id;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      card.source === 'Outlook'
                        ? 'bg-blue-500/20'
                        : card.source === 'Slack'
                        ? 'bg-purple-500/20'
                        : 'bg-cyan-500/20'
                    }`}
                  >
                    <SourceIcon
                      className={`${
                        card.source === 'Outlook'
                          ? 'text-blue-400'
                          : card.source === 'Slack'
                          ? 'text-purple-400'
                          : 'text-cyan-400'
                      }`}
                      size={24}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              card.priority === 'Critical'
                                ? 'bg-red-500/20 text-red-400'
                                : card.priority === 'High'
                                ? 'bg-orange-500/20 text-orange-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}
                          >
                            {card.priority}
                          </span>
                          <span className="text-slate-500 text-xs">{card.timestamp}</span>
                        </div>
                        <h3 className="text-white font-semibold text-lg mb-1">
                          {card.subject}
                        </h3>
                        <p className="text-slate-400 text-sm">{card.sender}</p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="text-cyan-400" size={14} />
                          <span className="text-xs font-semibold text-cyan-400">
                            AI SUMMARY
                          </span>
                        </div>
                        <p className="text-slate-300 text-sm">{card.aiSummary}</p>
                      </div>

                      <div className="p-3 bg-red-500/10 rounded-lg border border-red-500/30">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                          <span className="text-xs font-semibold text-red-400">
                            EXTRACTED RISK
                          </span>
                        </div>
                        <p className="text-red-300 text-sm">{card.extractedRisk}</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDraftReply(card.id)}
                        disabled={isDrafting}
                        className="flex-1 py-2.5 bg-cyan-500 hover:bg-cyan-600 disabled:bg-cyan-500/50 text-white rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                      >
                        {isDrafting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              <Sparkles size={16} />
                            </motion.div>
                            Drafting AI Reply...
                          </>
                        ) : (
                          <>
                            <Sparkles size={16} />
                            Draft AI Reply
                          </>
                        )}
                      </button>
                      <button className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-sm transition-colors flex items-center gap-2 border border-slate-700">
                        <ExternalLink size={16} />
                        Open Original
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
