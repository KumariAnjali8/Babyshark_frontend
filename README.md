# 🦈 BabyShark — Startup Idea to Execution Platform

BabyShark is a web platform that helps founders turn startup ideas into real execution plans using AI.  
It generates a roadmap, pitch, license requirements, and a daily planner, and provides a workspace to track progress.

This project is built as a full-stack application using React, Node.js, and AI APIs (Groq).

---

## 🚀 Features

### 👩‍💼 For Founders
- Enter startup idea using AI prompt
- AI-generated:
  - 📌 Roadmap
  - 🎤 Pitch (short & long)
  - 📄 Required licenses
  - 🗓 Planner tasks
- License tracking (In Process)
- Progress tracker
- Daily planner

### 💰 For Investors / Contributors (Upcoming)
- Explore startups
- View public startup profiles
- Connect with founders

---

## 🧠 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- CSS (inline )

### Backend (Local Development)
- Node.js
- Express
- Groq AI API

### Backend (Production - Vercel)
- Vercel Serverless Functions

---

## 📂 Project Structure
DEMO/
├── backend/ # Express server (localhost)
│ └── server.js
│
└── babyshark/ # Frontend + Vercel API
├── api/
│ └── generate.js # Serverless AI API for Vercel
│
└── src/
├── Layout/
│ └── MainLayout.jsx
├── Pages/
│ ├── Home.jsx
│ ├── Explore.jsx
│ ├── Dashboard.jsx
│ ├── AIGenerator.jsx
│ └── Project/
│ ├── Roadmap.jsx
│ ├── Pitch.jsx
│ ├── Licenses.jsx
│ ├── Planner.jsx
│ └── Progress.jsx
└── App.jsx

#important
## ⚙️ Setup Instructions (Local Development)
Create .env file inside backend:

GROQ_API_KEY=your_api_key_here
PORT=5000

Run backend:

node server.js

Backend runs on:

http://localhost:5000

Frontend Setup
cd ../babyshark
npm install
npm run dev

Frontend runs on:

http://localhost:5173
