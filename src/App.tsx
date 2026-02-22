import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import AITriage from './pages/AITriage';
import KPIIntelligence from './pages/KPIIntelligence';
import TeamWorkspaces from './pages/TeamWorkspaces';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex">
        <Sidebar />
        <main className="flex-1 ml-20">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/ai-triage" element={<AITriage />} />
            <Route path="/kpi-intelligence" element={<KPIIntelligence />} />
            <Route path="/team-workspaces" element={<TeamWorkspaces />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
