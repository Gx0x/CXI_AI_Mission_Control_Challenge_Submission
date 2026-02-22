Submission for the CXI + AI Mission Control Challenge
Project Overview:
SyncPulse OS is an AI-driven mission control dashboard designed for technology managers. It addresses information overload by centralizing and interpreting data from fragmented sources like Outlook, Jira, and GitHub. The system uses a multi-agent backend to help managers identify risks and automate routine reporting.
Key Features:
AI Triage Engine: Automatically prioritizes incoming communications and tasks based on risk, sentiment, and urgency.
Root Cause Detective: Correlates Jira bug reports with recent GitHub commits to identify the specific code changes responsible for technical issues.
KPI Extractor: Scrapes unstructured project update emails to automatically extract numerical data and update dashboard charts.
Voice Assistant: Provides personalized audio briefings and allows managers to execute team updates via voice commands.
Anomaly Detection: Monitors project activity to identify "quiet periods" that may indicate hidden blockers before they result in delays.
Technical Stack:
Frontend: React and Tailwind CSS (developed via Bolt.new).
Backend: n8n AI orchestration platform.
AI Models: OpenAI GPT-4o (Reasoning), Whisper (Speech-to-Text), and TTS-1 (Text-to-Speech).
Backend Logic:
The JSON exports for the four specialized n8n workflows powering this application are located in the AI_Workflows.md file within this repository. These files contain the prompt engineering and logic nodes for the Triage, KPI, Detective, and Assistant agents.
