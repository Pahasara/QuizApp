# Quiz App

This is our Web Development semester final project, a Quiz App designed to enable quiz creation and participation with ease. The project aims to provide a seamless experience for both admins (quiz creators) and students (quiz takers).

## Project Structure

QuizApp/<br>
├── src/<br>
│   ├── components/<br>
│   │   └── QuizCreator.jsx<br>
│   │   └── QuizCreator.css<br>
│   ├── pages/<br>
│   │   └── AdminDashboard.jsx<br>
│   ├── App.jsx<br>
│   └── main.jsx<br>
└── package.json<br>
<br>

## 1. Frontend Development (Pahasara)

### Phase 1: Admin Portal (Finished)
#### Tasks:
- Create the quiz creation form (metadata, questions, options, correct answers, marks, etc.).
- Implement dynamic question addition functionality.
- Add a list view to manage quizzes (edit/delete features).
- Save quiz data temporarily in localStorage or mock API.

### Phase 2: Student Portal (Ongoing)
#### Tasks:
- Design a page to display all active quizzes.
- Add a feature to join and attempt quizzes.
- Implement a countdown timer that auto-submits answers when time runs out.
- Mock the submission process (store answers locally or call a placeholder API).

### Phase 3: Login/Role Management
#### Tasks:
- Create a basic login page for admins and students.
- Implement role-based navigation (admins go to the admin portal, students to the quiz portal).
- Mock authentication for now (hard-code user roles or simulate with localStorage).

### Phase 4: CSS and UI Design (Ongoing)
#### Tasks:
- Style all pages using CSS.
- Ensure responsive design for mobile and desktop views.
- Add hover effects, animations, and other UX enhancements.

## 2. Backend Development

### Phase 1: Setup
#### Tasks:
- Initialize a Node.js/Express project.
- Set up a simple REST API for:
  - Creating quizzes (`POST /quizzes`).
  - Fetching quizzes (`GET /quizzes`).
  - Submitting answers (`POST /submissions`).

### Phase 2: Database
#### Tasks:
- Use a mock JSON file initially for data storage.
- Later, set up a database (Firebase, MongoDB, or PostgreSQL) for persistent storage.

### Phase 3: Advanced Backend Features
#### Tasks:
- Implement authentication (JWT or Firebase Authentication).
- Add real-time ranking updates (Firebase Realtime Database or WebSockets).

## 3. Integration

### Phase 1: API Integration
#### Tasks:
- Replace mock API calls in the frontend with real API endpoints from the backend.
- Test data flow (e.g., saving quizzes, fetching quizzes, submitting answers).

### Phase 2: Testing
#### Tasks:
- Perform end-to-end testing to ensure smooth interaction between frontend and backend.
- Fix bugs and optimize for performance.

## 4. Deployment (Tharindu)

### Phase 1: Frontend Deployment
#### Tasks:
- Host the frontend on Netlify, Vercel, or any similar platform.

### Phase 2: Backend Deployment
#### Tasks:
- Deploy the backend on Firebase Functions, Vercel, or Render.

### Phase 3: Domain Integration
#### Tasks:
- Optionally, set up a custom domain for the app.
- Ensure HTTPS support for secure connections.

