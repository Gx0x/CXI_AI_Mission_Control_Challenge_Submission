export interface RadarAlert {
  id: string;
  severity: 'critical' | 'warning';
  message: string;
  icon: string;
}

export interface CriticalAction {
  id: string;
  priority: 'critical' | 'high';
  title: string;
  source: string;
  timestamp: string;
}

export interface Project {
  id: string;
  name: string;
  status: 'at-risk' | 'on-track' | 'behind';
  progress: number;
  color: string;
}

export interface Timezone {
  id: string;
  location: string;
  timezone: string;
  time: string;
}

export interface CommCard {
  id: string;
  priority: 'Critical' | 'High' | 'Medium';
  source: 'Outlook' | 'Jira' | 'Slack';
  sender: string;
  subject: string;
  aiSummary: string;
  extractedRisk: string;
  timestamp: string;
}

export interface VelocityData {
  sprint: string;
  velocity: number;
  blockers: number;
}

export interface BugReportData {
  week: string;
  critical: number;
  major: number;
}

export interface TeamPod {
  id: string;
  name: string;
  lead: string;
  openTickets: number;
  activeBlockers: number;
  moraleIndicator: 'High' | 'Medium' | 'Low';
  color: string;
}

export const mockData = {
  radarAlerts: [
    {
      id: '1',
      severity: 'critical' as const,
      message: 'Quiet Period: 0 commits from Pharma Pod in 5h',
      icon: '🚨',
    },
    {
      id: '2',
      severity: 'warning' as const,
      message: 'Build Failure Spike in Internal App',
      icon: '⚠️',
    },
  ] as RadarAlert[],

  criticalActions: [
    {
      id: '1',
      priority: 'critical' as const,
      title: 'Staging dashboard crashes on Phase 2 filter (Pharma Client)',
      source: 'Production Monitor',
      timestamp: '12 min ago',
    },
    {
      id: '2',
      priority: 'critical' as const,
      title: 'Director of Clinical Trials reports 500 error on login portal',
      source: 'Email - Outlook',
      timestamp: '28 min ago',
    },
    {
      id: '3',
      priority: 'high' as const,
      title: 'Offshore QA Pod blocked on API documentation',
      source: 'Slack #pharma-dev',
      timestamp: '1h ago',
    },
  ] as CriticalAction[],

  projects: [
    {
      id: '1',
      name: 'Big Pharma Portal',
      status: 'at-risk' as const,
      progress: 68,
      color: '#ef4444',
    },
    {
      id: '2',
      name: 'Internal HR App',
      status: 'on-track' as const,
      progress: 87,
      color: '#10b981',
    },
  ] as Project[],

  timezones: [
    {
      id: '1',
      location: 'NYC HQ',
      timezone: 'EST',
      time: '14:32',
    },
    {
      id: '2',
      location: 'London Pod',
      timezone: 'GMT',
      time: '19:32',
    },
    {
      id: '3',
      location: 'Offshore (IST)',
      timezone: 'IST',
      time: '01:02',
    },
  ] as Timezone[],

  commCards: [
    {
      id: '1',
      priority: 'Critical' as const,
      source: 'Outlook' as const,
      sender: 'Dr. Sarah Chen, Director of Clinical Trials',
      subject: 'URGENT: Login Portal Down for Phase 2 Team',
      aiSummary: 'Production login failure blocking 47 clinical trial coordinators from data entry portal.',
      extractedRisk: 'Client escalation imminent. Trial data submission deadline is today at 5pm EST.',
      timestamp: '28 min ago',
    },
    {
      id: '2',
      priority: 'High' as const,
      source: 'Jira' as const,
      sender: 'System Alert',
      subject: 'PHARMA-2847: Dashboard Performance Degradation',
      aiSummary: 'Phase 2 filter causing 12s load times on staging dashboard under production data load.',
      extractedRisk: 'Demo scheduled with VP of Operations tomorrow morning. Performance unacceptable.',
      timestamp: '1h ago',
    },
    {
      id: '3',
      priority: 'High' as const,
      source: 'Slack' as const,
      sender: 'Marcus Johnson (QA Lead)',
      subject: '#pharma-dev: API Docs Missing',
      aiSummary: 'Offshore team blocked 4 hours waiting for updated API documentation for authentication endpoints.',
      extractedRisk: 'Sprint velocity at risk. 8 pending test cases cannot be completed without specs.',
      timestamp: '2h ago',
    },
    {
      id: '4',
      priority: 'Medium' as const,
      source: 'Outlook' as const,
      sender: 'Jennifer Park, Product Owner',
      subject: 'Re: Sprint 24 Scope Change Request',
      aiSummary: 'Client requesting addition of bulk export feature for patient data before UAT next week.',
      extractedRisk: 'Scope creep detected. Feature estimated at 3 days. No buffer in current sprint.',
      timestamp: '3h ago',
    },
    {
      id: '5',
      priority: 'Medium' as const,
      source: 'Jira' as const,
      sender: 'Automated Security Scan',
      subject: 'PHARMA-2901: 3 High Severity Vulnerabilities Detected',
      aiSummary: 'Dependency scan found outdated packages with known CVEs in authentication module.',
      extractedRisk: 'Security audit scheduled next week. Remediation required before client review.',
      timestamp: '4h ago',
    },
  ] as CommCard[],

  velocityData: [
    { sprint: 'Sprint 20', velocity: 42, blockers: 2 },
    { sprint: 'Sprint 21', velocity: 38, blockers: 5 },
    { sprint: 'Sprint 22', velocity: 45, blockers: 3 },
    { sprint: 'Sprint 23', velocity: 31, blockers: 8 },
    { sprint: 'Sprint 24', velocity: 28, blockers: 11 },
    { sprint: 'Sprint 25', velocity: 35, blockers: 7 },
  ] as VelocityData[],

  bugReportData: [
    { week: 'Week 1', critical: 3, major: 8 },
    { week: 'Week 2', critical: 5, major: 12 },
    { week: 'Week 3', critical: 2, major: 7 },
    { week: 'Week 4', critical: 7, major: 15 },
    { week: 'Week 5', critical: 4, major: 9 },
    { week: 'Week 6', critical: 6, major: 13 },
  ] as BugReportData[],

  teamPods: [
    {
      id: '1',
      name: 'Pharma Frontend Pod',
      lead: 'Alex Rivera',
      openTickets: 23,
      activeBlockers: 4,
      moraleIndicator: 'Medium' as const,
      color: '#38bdf8',
    },
    {
      id: '2',
      name: 'HR Backend Pod',
      lead: 'Priya Sharma',
      openTickets: 12,
      activeBlockers: 1,
      moraleIndicator: 'High' as const,
      color: '#10b981',
    },
    {
      id: '3',
      name: 'Offshore QA Pod',
      lead: 'Marcus Johnson',
      openTickets: 31,
      activeBlockers: 7,
      moraleIndicator: 'Low' as const,
      color: '#ef4444',
    },
    {
      id: '4',
      name: 'DevOps & Infrastructure',
      lead: 'Chen Wei',
      openTickets: 8,
      activeBlockers: 2,
      moraleIndicator: 'High' as const,
      color: '#8b5cf6',
    },
  ] as TeamPod[],
};
