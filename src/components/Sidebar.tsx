import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Bot, BarChart3, Users } from 'lucide-react';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Overview' },
  { path: '/ai-triage', icon: Bot, label: 'AI Triage' },
  { path: '/kpi-intelligence', icon: BarChart3, label: 'KPI Intelligence' },
  { path: '/team-workspaces', icon: Users, label: 'Team Workspaces' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <div className="text-white font-bold text-xl">SP</div>
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 relative group ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
              }`
            }
          >
            <item.icon size={22} />
            <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-200 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap border border-slate-700">
              {item.label}
            </div>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-semibold">
          TL
        </div>
      </div>
    </aside>
  );
}
