[AI Triage Engine for Incoming Communications.json](https://github.com/user-attachments/files/25471487/AI.Triage.Engine.for.Incoming.Communications.json)
{
  "name": "AI Triage Engine for Incoming Communications",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "incoming-message-triage",
        "options": {}
      },
      "id": "ff31fac3-d518-4c4d-8e44-5a1a1879f6a6",
      "name": "Incoming Message Triage",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        256,
        304
      ],
      "webhookId": "494bfcee-9aba-4d93-bf2e-6e59b790adb1"
    },
    {
      "parameters": {
        "modelId": {
          "__rl": true,
          "mode": "id",
          "value": "gpt-4o-mini"
        },
        "responses": {
          "values": [
            {
              "content": "=Analyze this message from {{ $json.body.sender }} via {{ $json.body.source }}: {{ $json.body.message_content }}RETURN ONLY RAW JSON. DO NOT USE MARKDOWN FORMATTING OR CODE BLOCKS."
            }
          ]
        },
        "builtInTools": {},
        "options": {
          "instructions": "You are an AI Mission Control engine for a Senior Tech Lead at a digital agency. Your job is to analyze incoming messages (from clients, Jira, GitHub) and output a strictly formatted JSON object with these exact keys:\n1. Priority_Level: (Critical, High, Routine, Noise). Client escalations or blockers are Critical. General updates are Routine.\n2. Synthesized_TLDR: A maximum 15-word summary of the issue.\n3. Risk_Detection: Identify scope creep, timeline delays, or client anger. Summarize in 1 sentence. If none, output null.\n4. Action_Required: What the manager must do (e.g., 'Approve PR', 'Escalate to DevOps').\n5. Extracted_KPIs: Extract any metrics mentioned (e.g., '12 bugs found') as a string. If none, output null.",
          "textFormat": {
            "textOptions": {}
          }
        }
      },
      "id": "28e4a645-a41e-4e63-93f0-ddab29bc3a5f",
      "name": "AI Mission Control",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 2.1,
      "position": [
        480,
        304
      ],
      "credentials": {
        "openAiApi": {
          "id": "z3R6EFfTzI9s5qfI",
          "name": "n8n free OpenAI API credits"
        }
      }
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ $json.message.content }}",
        "options": {}
      },
      "id": "fc4e4208-4a42-4480-bf6f-23b328e71054",
      "name": "Return Triage Analysis",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.5,
      "position": [
        832,
        304
      ]
    }
  ],
  "pinData": {
    "Incoming Message Triage": [
      {
        "json": {
          "body": {
            "source": "Outlook",
            "sender": "Director of Clinical Trials (Big Pharma Corp)",
            "message_content": "URGENT ESCALATION: The new patient enrollment dashboard your team deployed to Staging yesterday is completely broken. When we try to filter by Phase 2, the entire app crashes and throws a 500 error. My team has wasted 4 hours this morning trying to pull the weekly report for the FDA. If we cannot generate this report by 5 PM EST today, we will miss our regulatory filing window. Please advise immediately on when this will be hotfixed."
          }
        }
      }
    ]
  },
  "connections": {
    "Incoming Message Triage": {
      "main": [
        [
          {
            "node": "AI Mission Control",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "AI Mission Control": {
      "main": [
        [
          {
            "node": "Return Triage Analysis",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "availableInMCP": false
  },
  "versionId": "cce21350-035a-411c-b464-ebde71e3410d",
  "meta": {
    "templateCredsSetupCompleted": true,
    "instanceId": "641ae11550da6679548a2c99e931b59ec2a7a83883a66e6b6c65231b1dfe3982"
  },


  
[Automated KPI Extraction from Project Update Emails.json](https://github.com/user-attachments/files/25471688/Automated.KPI.Extraction.from.Project.Update.Emails.json)
{
  "name": "Automated KPI Extraction from Project Update Emails",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "kpi-extractor",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "8d3572bb-02fd-4088-9f4d-932572d0fca6",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        256,
        304
      ],
      "webhookId": "a3a817c5-099d-4034-8e2e-daa9e8d4013f"
    },
    {
      "parameters": {
        "modelId": {
          "__rl": true,
          "mode": "id",
          "value": "gpt-4o-mini"
        },
        "responses": {
          "values": [
            {
              "role": "system",
              "content": "You are a Data Analyst for a Digital Agency. Your job is to read project update emails and extract Key Performance Indicators (KPIs). Return a JSON object with a key called extracted_metrics containing an array of objects. Each object must have: metric_name: (e.g., 'Sprint Velocity', 'Bugs Reported', 'Uptime', 'Budget Spent'). value: The numerical value found (e.g., 45, 99.9, 1200). unit: (e.g., 'Story Points', 'Percent', 'USD', 'Count'). trend: Analyze the context. Is this 'Up', 'Down', or 'Stable' compared to expectations? project: Infer the project name from the text."
            },
            {
              "content": "=Subject: {{ $json.body.subject }}\n\nEmail Body:\n{{ $json.body.email_body }}"
            }
          ]
        },
        "builtInTools": {},
        "options": {
          "textFormat": {
            "textOptions": {}
          }
        }
      },
      "id": "ccde9096-b559-4770-8f60-ce8d786bbc09",
      "name": "OpenAI - The Analyst",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 2.1,
      "position": [
        480,
        304
      ],
      "credentials": {
        "openAiApi": {
          "id": "z3R6EFfTzI9s5qfI",
          "name": "n8n free OpenAI API credits"
        }
      }
    },
    {
      "parameters": {
        "respondWith": "text",
        "responseBody": "={{ $json.message.content }}",
        "options": {}
      },
      "id": "b5e794f4-2e4e-4b87-9392-5d5c844ddf18",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.5,
      "position": [
        832,
        304
      ]
    }
  ],
  "pinData": {
    "Webhook": [
      {
        "json": {
          "body": {
            "subject": "Pharma Project Update",
            "email_body": "Great news! We closed 42 tickets this sprint, up from 30 last week. However, budget spend is at 85%."
          }
        }
      }
    ]
  },
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "OpenAI - The Analyst",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI - The Analyst": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "ffacfae1-e979-44ca-a4c5-995f592e6cb9",
  "meta": {
    "instanceId": "641ae11550da6679548a2c99e931b59ec2a7a83883a66e6b6c65231b1dfe3982"
  },
  "id": "ri9Top1g7i88gxrt",
  "tags": []
}



[Root Cause Analysis Bug Detective with Code Commit Correlation.json](https://github.com/user-attachments/files/25471702/Root.Cause.Analysis.Bug.Detective.with.Code.Commit.Correlation.json)
{
  "name": "Root Cause Analysis Bug Detective with Code Commit Correlation",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "root-cause-detective",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "23a3ef89-ec25-4b21-8439-10e16e35a7d8",
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        256,
        432
      ],
      "webhookId": "a64e7c99-0d49-491f-8223-f4382b316fc1"
    },
    {
      "parameters": {
        "jsCode": "const commits = [\n  { \n    \"commit_id\": \"a1b2\", \n    \"author\": \"Dave\", \n    \"files\": [\"ui/colors.css\"], \n    \"message\": \"Updated button styles for dark mode\" \n  },\n  { \n    \"commit_id\": \"c3d4\", \n    \"author\": \"Sarah\", \n    \"files\": [\"api/payments.js\", \"backend/server.ts\"], \n    \"message\": \"Refactored payment validation logic to support new Stripe API\" \n  },\n  { \n    \"commit_id\": \"e5f6\", \n    \"author\": \"Mike\", \n    \"files\": [\"docs/readme.md\"], \n    \"message\": \"Fixed typos in documentation\" \n  }\n];\n\n// This sends the list of commits as a single text block the AI can read\nreturn {\n    commits_context: JSON.stringify(commits)\n};"
      },
      "id": "0afbe0bb-b17c-4fc8-b03a-aafb762c424b",
      "name": "Mock GitHub Database",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        480,
        528
      ]
    },
    {
      "parameters": {
        "mode": "combine",
        "combineBy": "combineAll",
        "options": {}
      },
      "id": "55fb20dd-b696-467b-8a42-e3821309f5e8",
      "name": "Merge Bug Report and Commits",
      "type": "n8n-nodes-base.merge",
      "typeVersion": 3.2,
      "position": [
        704,
        432
      ]
    },
    {
      "parameters": {
        "modelId": {
          "__rl": true,
          "mode": "id",
          "value": "gpt-4o-mini"
        },
        "responses": {
          "values": [
            {
              "role": "system",
              "content": "You are a Senior DevOps Engineer. Your job is to correlate a Bug Report with a list of recent Code Commits to find the root cause. Analyze the 'Bug Description'. Look at the 'Recent Commits' (specifically the files changed and commit messages). Identify which commit is the most likely cause. Return a JSON object with: likely_culprit: (The Author's Name). suspicious_file: (The file that likely broke). confidence_score: (0-100%). reasoning: (A technical explanation of why this commit caused that bug)."
            },
            {
              "content": "=Bug Report: {{ $json.body.bug_report }}\n\nRecent Commits: {{ $json.commits_context }}"
            }
          ]
        },
        "builtInTools": {},
        "options": {
          "textFormat": {
            "textOptions": {}
          }
        }
      },
      "id": "1ec1ed59-3749-4c7a-8b52-b31be07a71c3",
      "name": "OpenAI Detective",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 2.1,
      "position": [
        928,
        432
      ],
      "credentials": {
        "openAiApi": {
          "id": "z3R6EFfTzI9s5qfI",
          "name": "n8n free OpenAI API credits"
        }
      }
    },
    {
      "parameters": {
        "options": {}
      },
      "id": "c2d9f034-692a-44b7-920b-f1a8681a9414",
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.5,
      "position": [
        1280,
        432
      ]
    }
  ],
  "pinData": {
    "Webhook": [
      {
        "json": {
          "body": {
            "bug_report": "CRITICAL INCIDENT: Checkout API is throwing 500 Internal Server Errors. Customers cannot complete payments. The logs show a crash in the payment validation logic."
          }
        }
      }
    ]
  },
  "connections": {
    "Webhook": {
      "main": [
        [
          {
            "node": "Mock GitHub Database",
            "type": "main",
            "index": 0
          },
          {
            "node": "Merge Bug Report and Commits",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Mock GitHub Database": {
      "main": [
        [
          {
            "node": "Merge Bug Report and Commits",
            "type": "main",
            "index": 1
          }
        ]
      ]
    },
    "Merge Bug Report and Commits": {
      "main": [
        [
          {
            "node": "OpenAI Detective",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "OpenAI Detective": {
      "main": [
        [
          {
            "node": "Respond to Webhook",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "dc21af4c-c0fb-47a9-86bd-11f12a1ac346",
  "meta": {
    "instanceId": "641ae11550da6679548a2c99e931b59ec2a7a83883a66e6b6c65231b1dfe3982"
  },
  "id": "dCJgreER0A6NvYS7",
  "tags": []
}

  
  "id": "L1ZtjvRqcKZLI7g0",
  "tags": []
}




[Context-Aware Voice Assistant for Agency Manager.json](https://github.com/user-attachments/files/25471713/Context-Aware.Voice.Assistant.for.Agency.Manager.json)
{
  "name": "Context-Aware Voice Assistant for Agency Manager",
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "voice-assistant",
        "responseMode": "responseNode",
        "options": {}
      },
      "id": "c389b042-53a8-430b-90d1-5dfa67c87808",
      "name": "Voice Input Listener",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 2.1,
      "position": [
        256,
        304
      ],
      "webhookId": "23be19bc-265c-4f5f-aab2-7defed38c2d5"
    },
    {
      "parameters": {
        "jsCode": "return {\n  \"context\": {\n    \"projects\": [\n      {\n        \"name\": \"Big Pharma Portal\",\n        \"client\": \"PharmaCo Inc.\",\n        \"status\": \"CRITICAL\",\n        \"health_score\": 42,\n        \"latest_intel\": {\n          \"email\": \"From: Director of Trials. Subj: EMERGENCY. 'The login portal is throwing 500 errors on the Phase 3 filter. If this isn't fixed by 5pm, we miss the FDA window.'\",\n          \"jira\": \"Ticket PH-911: 'Login Crash'. Assigned to: Sarah. Status: In Progress.\",\n          \"github\": \"Last commit 45 mins ago by Sarah: 'Debugging auth middleware'.\"\n        },\n        \"kpis\": { \"bugs\": 12, \"velocity\": \"Decreasing\" }\n      },\n      {\n        \"name\": \"Internal HR App\",\n        \"client\": \"Internal\",\n        \"status\": \"HEALTHY\",\n        \"health_score\": 95,\n        \"latest_intel\": {\n          \"email\": \"From: HR Lead. Subj: Great job. 'App looks perfect, ready for launch.'\",\n          \"jira\": \"0 Open Blockers.\",\n          \"github\": \"Stable master branch.\"\n        },\n        \"kpis\": { \"bugs\": 0, \"velocity\": \"High\" }\n      }\n    ]\n  }\n};"
      },
      "id": "6a8a6630-6806-46ba-8518-4abaa2c85cc8",
      "name": "Project Context Store",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        480,
        304
      ]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "id-1",
              "name": "user_input",
              "value": "={{ $json.body.message }}",
              "type": "string"
            },
            {
              "id": "id-2",
              "name": "project_context",
              "value": "={{ $('Project Context Store').item.json.projects }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "id": "908ef20e-5dc5-4b6b-b629-2f5225dfbb41",
      "name": "Prepare AI Input",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        704,
        304
      ]
    },
    {
      "parameters": {
        "modelId": {
          "__rl": true,
          "value": "gpt-4o-mini",
          "mode": "id"
        },
        "responses": {
          "values": [
            {
              "role": "system",
              "content": "You are the SyncPulse AI Assistant. You have access to all project context (Jira, Github, Emails). If the user asks for an update: Use the Context Store to give a concise verbal summary. If the user gives a command (e.g., \"Nudge the team\"): Draft a professional email, identify which KPI will improve when they finish, and output an \"Action\" JSON. Always return a JSON object with: verbal_response (what the AI should say back), action_taken (true/false), kpi_update (e.g., \"Velocity +5\")."
            },
            {
              "content": "=User Input: {{ $json.user_input }}\n\nProject Context:\n{{ JSON.stringify($json.project_context, null, 2) }}\n\nProvide your response as a JSON object with verbal_response, action_taken, and kpi_update fields."
            }
          ]
        },
        "builtInTools": {},
        "options": {
          "textFormat": {
            "textOptions": {}
          }
        }
      },
      "id": "90d6acf2-d13d-4a15-823c-f55ecc694abe",
      "name": "SyncPulse AI Assistant",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 2.1,
      "position": [
        928,
        304
      ],
      "credentials": {
        "openAiApi": {
          "id": "vPqwx7FEksGE4hVP",
          "name": "OpenAi account 2"
        }
      }
    },
    {
      "parameters": {
        "resource": "audio",
        "input": "={{ $json.verbal_response }}",
        "options": {}
      },
      "id": "05941b2c-6d3a-44cc-a075-1816a4c4e4d4",
      "name": "Text-to-Speech Converter",
      "type": "@n8n/n8n-nodes-langchain.openAi",
      "typeVersion": 2.1,
      "position": [
        1504,
        304
      ],
      "credentials": {
        "openAiApi": {
          "id": "XDSOih2c5K8i1g0v",
          "name": "OpenAi account"
        }
      }
    },
    {
      "parameters": {
        "jsCode": "// Parse the OpenAI JSON response\nconst aiResponse = $input.first().json;\n\n// If the response is a string, parse it as JSON\nlet parsedResponse;\nif (typeof aiResponse === 'string') {\n  parsedResponse = JSON.parse(aiResponse);\n} else {\n  parsedResponse = aiResponse;\n}\n\n// Extract the fields\nreturn [\n  {\n    json: {\n      verbal_response: parsedResponse.verbal_response || '',\n      action_taken: parsedResponse.action_taken || false,\n      kpi_update: parsedResponse.kpi_update || ''\n    }\n  }\n];"
      },
      "id": "7ab0adc1-0ca7-4c8d-9b09-082fc28b2aa1",
      "name": "Parse AI Response",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [
        1280,
        304
      ]
    },
    {
      "parameters": {
        "assignments": {
          "assignments": [
            {
              "id": "id-1",
              "name": "verbal_response",
              "value": "={{ $('Parse AI Response').item.json.verbal_response }}",
              "type": "string"
            },
            {
              "id": "id-2",
              "name": "action_taken",
              "value": "={{ $('Parse AI Response').item.json.action_taken }}",
              "type": "string"
            },
            {
              "id": "id-3",
              "name": "kpi_update",
              "value": "={{ $('Parse AI Response').item.json.kpi_update }}",
              "type": "string"
            },
            {
              "id": "id-4",
              "name": "audio",
              "value": "={{ $('Text-to-Speech Converter').item.binary }}",
              "type": "string"
            }
          ]
        },
        "options": {}
      },
      "id": "8c1b9d3b-b521-43d4-acac-dde0765c096c",
      "name": "Prepare Final Response",
      "type": "n8n-nodes-base.set",
      "typeVersion": 3.4,
      "position": [
        1728,
        304
      ]
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{ $json }}",
        "options": {}
      },
      "id": "7cfd1984-f672-4910-9763-708e254913c8",
      "name": "Send Response to Dashboard",
      "type": "n8n-nodes-base.respondToWebhook",
      "typeVersion": 1.5,
      "position": [
        1952,
        304
      ]
    }
  ],
  "pinData": {
    "Voice Input Listener": [
      {
        "json": {
          "body": {
            "manager_voice_command": "Give me a quick update on the Big Pharma project, and then send an email to Sarah telling her to prioritize that login fix and that I'll handle the client call for her."
          }
        }
      }
    ]
  },
  "connections": {
    "Prepare AI Input": {
      "main": [
        [
          {
            "node": "SyncPulse AI Assistant",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Voice Input Listener": {
      "main": [
        [
          {
            "node": "Project Context Store",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Project Context Store": {
      "main": [
        [
          {
            "node": "Prepare AI Input",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "SyncPulse AI Assistant": {
      "main": [
        [
          {
            "node": "Parse AI Response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Parse AI Response": {
      "main": [
        [
          {
            "node": "Text-to-Speech Converter",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Text-to-Speech Converter": {
      "main": [
        [
          {
            "node": "Prepare Final Response",
            "type": "main",
            "index": 0
          }
        ]
      ]
    },
    "Prepare Final Response": {
      "main": [
        [
          {
            "node": "Send Response to Dashboard",
            "type": "main",
            "index": 0
          }
        ]
      ]
    }
  },
  "active": false,
  "settings": {
    "executionOrder": "v1",
    "binaryMode": "separate",
    "availableInMCP": false
  },
  "versionId": "63d18d77-5df6-4580-b1d2-cfccf37abe16",
  "meta": {
    "instanceId": "641ae11550da6679548a2c99e931b59ec2a7a83883a66e6b6c65231b1dfe3982"
  },
  "id": "TsCxagYuR9Bfdvgt",
  "tags": []
}
