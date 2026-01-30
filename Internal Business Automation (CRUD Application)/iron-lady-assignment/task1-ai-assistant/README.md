# AI Follow-up Assistant

This directory contains the core logic and prompt engineering for the AI Assistant feature used in the Internal CRM.

## Prompt Strategy
The AI is designed to act as a professional assistant for the Iron Lady team. The goal is to generate personalized, empathetic, and action-oriented follow-up messages based on minimal lead data.

### Input Data
The AI consumes the following structured data from the CRM:
1. **Lead Background**: Professional history or context (e.g., "IT Manager with 5 years experience").
2. **Interested Program**: The specific course or product (e.g., "Leadership Mastery").
3. **Current Lead Status**: The stage in the funnel (New, Contacted, Enrolled).

### Output Constraints
- **Tone**: Professional, Warm, Encouraging.
- **Format**: Concise text suitable for WhatsApp or Email.
- **Goal**: nudge the user towards the next step (booking a call, checking email, etc.).

## Integration Guide available in Task 2
The React application in `task2-internal-crm` implements a **Simulated AI Service** (`src/utils/aiService.js`) that mimics this logic. 

To upgrade to a real LLM (like OpenAI GPT-4):
1. Create a backend API (Node/Python) that calls the OpenAI API.
2. Use the system prompt defined in `AI_PROMPT.txt`.
3. Pass the user inputs dynamically.
4. Replace the mock function in `aiService.js` with an `fetch()` call to your API.

## Example Generation
**Input:**
- Name: Sarah
- Status: New
- Program: Leadership Mastery

**Generated Output:**
"Hi Sarah, thank you for your interest in Leadership Mastery. Given your background, this seems like a great fit. Would you be open to a quick call to discuss?"
