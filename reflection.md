## Reflection-3 Self-Assessment

Respond with JSON only and do NOT request user action. Leave needs_user_action as an empty list.

{
  "task_summary": "...",
  "task_type": "feature|bugfix|refactor|docs|research|ops|other",
  "status": "complete|in_progress|blocked|stuck|waiting_for_user",
  "confidence": 0.0,
  "evidence": {
    "tests": { "ran": true/false, "results": "pass|fail|unknown", "ran_after_changes": true/false, "commands": ["..."] },
    "build": { "ran": true/false, "results": "pass|fail|unknown" },
    "pr": { "created": true/false, "url": "", "ci_status": "pass|fail|unknown", "checked": true/false }
  },
  "remaining_work": ["..."],
  "next_steps": ["..."],
  "needs_user_action": [],
  "stuck": false,
  "alternate_approach": ""
}

Rules:
- Do not request user action.
- If PR/CI steps are missing, list them in remaining_work/next_steps.
