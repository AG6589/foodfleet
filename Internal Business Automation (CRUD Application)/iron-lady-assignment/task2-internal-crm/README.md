# Iron Lady Internal CRM

A modern, efficient Internal CRM system designed for Iron Lady to streamline lead management and automate follow-up communications. This application allows the team to track potential clients for leadership programs and leverages AI to generate personalized engagement messages.

## 🚀 Features

- **Lead Management Dashboard**: Centralized view of all leads with sorting and status tracking (New, Contacted, Enrolled).
- **CRUD Operations**: Seamlessly **Create**, **Read**, **Update**, and **Delete** lead information.
- **AI-Powered Communication**: Built-in AI Generator to create personalized follow-up messages for Email, LinkedIn, and WhatsApp based on the lead's background and interests.
- **Real-Time Analytics**: Visual statistics cards showing total leads, new inquiries, and enrollment trends.
- **Responsive UI**: A premium, glassmorphism-inspired interface with smooth transitions and animations.
- **Instant Feedback**: Toast notifications for all user actions to ensure a smooth user experience.

## 🛠️ Tech Stack

- **Frontend Core**: React 19
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS3 variables, Flexbox/Grid, Glassmorphism effects)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Linting**: ESLint

## 📂 Project Structure

```
task2-internal-crm/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── AIGeneratorModal.jsx  # AI Message Generator
│   │   ├── LeadForm.jsx          # Add/Edit Lead Form
│   │   ├── LeadTable.jsx         # Data display table
│   │   ├── StatsCard.jsx         # Dashboard statistics
│   │   └── Toast.jsx             # Notification component
│   ├── utils/           # Utility functions (AI Service)
│   ├── App.jsx          # Main application logic
│   ├── App.css          # App-specific styles
│   ├── index.css        # Global styles & variables
│   └── main.jsx         # Entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🔧 Installation & Setup

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd task2-internal-crm
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   The app will typically run at `http://localhost:5173`.

## 💡 Usage Guide

### Managing Leads
- Click **"Add New Lead"** to open the creation form.
- Fill in the candidate's details including their **Program Interest** and **Professional Background**.
- Use the **Edit** (pencil) icon to modify details.
- Use the **Delete** (trash) icon to remove a lead.

### Using the AI Generator
1. In the lead table, click the **Magic Wand** icon next to a lead.
2. Select the **Message Type** (Email, LinkedIn, WhatsApp).
3. Select the **Tone** (Professional, Friendly, Persuasive).
4. Click **Generate Draft** to let the AI create a personalized message.
5. You can **Copy** the message to clipboard directly.

## 🎨 Design Philosophy

The application follows a **"Glassmorphism"** design aesthetic:
- **Translucent Panels**: UI elements have a frosted-glass look.
- **Vibrant Gradients**: Uses deep violets, emerald greens, and soft blurs to create a premium feel.
- **Micro-Interactions**: Smooth hover effects and transitions for a responsive user experience.

## 📄 License

This project is part of an internal assignment for Iron Lady.
