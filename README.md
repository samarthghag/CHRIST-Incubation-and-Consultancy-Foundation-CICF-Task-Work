# CHRIST-Incubation-and-Consultancy-Foundation-CICF-Task-Work
# Project Overview

This repository contains two main projects:

1. **Fullstack Feedback Collector App** (in `fullstack/`)
2. **Python Chatbot Task Manager** (in `python/`)

---

## 1. Fullstack Feedback Collector App

A simple web application for collecting and displaying user feedback. It consists of a Node.js/Express backend and a vanilla JavaScript frontend.

### Directory Structure

```
fullstack/
  backend/   # Node.js Express server
  frontend/  # HTML/CSS/JS client
```

### Backend (`fullstack/backend/`)
- **Stack:** Node.js, Express, CORS, Body-Parser
- **Main file:** `server.js`
- **API Endpoints:**
  - `GET /feedback` — Retrieve all feedback
  - `POST /feedback` — Submit new feedback (JSON: `{ feedback: "..." }`)
- **Port:** 3001

#### Setup & Run
```bash
cd fullstack/backend
npm install
node server.js
```

### Frontend (`fullstack/frontend/`)
- **Stack:** HTML, CSS, JavaScript (no framework)
- **Main files:**
  - `index.html` — UI for submitting and viewing feedback
  - `main.js` — Handles API calls and DOM updates
  - `style.css` — Simple, modern styling
- **Features:**
  - Submit feedback via form
  - View all submitted feedback (auto-refreshes)

#### Usage
1. Open `index.html` in your browser (after starting the backend).
2. Enter feedback and submit. All feedback is listed below the form.

---

## 2. Python Chatbot Task Manager

A simple command-line chatbot for managing a list of tasks interactively.

### Directory Structure
```
python/
  python/
    chatbot_task_manager.py
```

### Features
- Add, remove, and list tasks
- Menu-driven interface
- Exits cleanly

### Run
```bash
cd python/python
python chatbot_task_manager.py
```

---

## Notes
- The fullstack app's backend and frontend are decoupled; ensure the backend is running before using the frontend.
- The backend server runs on `http://localhost:3001` by default. If you change the port, update `API_URL` in `frontend/main.js` accordingly.
- The Python chatbot is standalone and does not interact with the feedback app.

---

## License
MIT (or specify your license here) 
