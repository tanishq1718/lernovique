# Lernovique - University Online Learning Platform

> **"Learn. Evolve. Achieve."**

**Lernovique** is a modern, responsive university learning platform built with zero external build tools (HTML5, Vanilla CSS3, and ES6 JavaScript). It provides an interactive academic management portal for both students and faculty with rich state persistence in localStorage.

---

## 🚀 Live Platform Quick Start

- **Direct Local Run**: Simply double-click `index.html` to open directly in any modern web browser (`file:///` protocol supported).
- **Render (Static Site)**: Ready to deploy as a static site on Render. All paths are strictly relative.
- **Zero Dependencies**: No `npm install`, no build bundler, no Node backend required.

---

## 🔑 Demo Login Credentials

Demo credentials are automatically displayed on the login page with 1-click quick-fill buttons:

| Role | Email | Password | Access / Features |
| :--- | :--- | :--- | :--- |
| **Student** | `student@edu.com` | `1234` | Full student dashboard, course video lectures, assignment drag-and-drop submission, live classroom stage, HTML5 canvas grade charts, 2-way faculty messaging. |
| **Faculty** | `faculty@edu.com` | `1234` | Faculty overview, student submission grading queue, create assignments modal, upload study materials modal, live broadcast launcher. |

---

## 📁 Repository Structure

```text
Lernovique/
├── index.html                  # Landing Page (Hero, Features, How it works, Popular Courses, Testimonials)
├── README.md                   # Comprehensive Project & Architectural Documentation
├── assets/
│   └── logo.svg                # Stylized "L" + Cyan Upward Growth Spark SVG Logo
├── css/
│   └── style.css               # Design System (Tokens, Dark Theme, 8px Grid, Device Frames, Cards)
├── js/
│   ├── app.js                  # Theme Toggle, Auth Controller, Dynamic User Profile, Modals, Tabs, Toasts
│   └── mock-data.js            # User Session, Course Datasets & Per-User LocalStorage Engine
└── pages/
    ├── login.html              # Dual-Role Authentication (Student/Faculty) & Registration
    ├── dashboard.html          # Student Central Dashboard (Enrolled courses, Deadlines, GPA, Calendar)
    ├── courses.html            # Courses Catalog with Search & Discipline Filtering
    ├── course-detail.html      # 5-Tab Course Classroom (Overview, Video Player & Playlist, Materials, Discussions)
    ├── live.html               # Live Classroom Broadcast Stage & Archived Recordings
    ├── assignments.html        # Assignments Portal with Drag-and-Drop File Upload & Status Badges
    ├── grades.html             # Continuous Assessment Table & Pure HTML5 Canvas Score Chart
    ├── messages.html           # 2-Way Threaded Student-Faculty Messaging (Per-User Storage)
    ├── profile.html            # Profile Settings, Roll No / Employee ID & Academic Details
    ├── faculty-dashboard.html  # Instructor Console (Submissions Queue, Grade Entry, Assignment Publishing)
    ├── help.html               # Academic Help Desk & Interactive FAQ Accordions
    └── 404.html                # Custom Not Found Page
```

---

## 🎨 Design System & Tokens

- **Brand Colors**:
  - Primary: `#4F46E5` (Indigo)
  - Secondary: `#06B6D4` (Cyan Accent)
  - Amber / Warning: `#F59E0B`
  - Emerald / Success: `#10B981`
  - Rose / Danger: `#EF4444`
  - Background (Day): `#F8FAFC`
  - Dark Surface (Night): `#0B0F19` / `#131C2E`
  - Body Text: `#0F172A`
- **Typography**:
  - Headings: `Poppins` (Google Fonts, 700 Bold / 600 Semi-bold)
  - Body & UI: `Inter` (Google Fonts, 400 Regular / 500 Medium)
  - Scale: H1 `32px (2rem)`, H2 `24px (1.5rem)`, H3 `20px (1.25rem)`, Body `16px (1rem)`
- **Spatial Rhythm**: 8px layout grid, 12px rounded borders (`var(--radius-lg)`), soft multi-layer box shadows.
- **Accessibility**: Full WCAG 2.1 AA compliant color contrast (≥4.5:1), visible keyboard focus rings (`:focus-visible`), and persistent Light/Dark theme switching remembered across sessions.

---

## 📑 Platform Screens

1. **Screen 1**: Landing Page (`/index.html`)
2. **Screen 2**: Dual-Role Authentication & Register (`/pages/login.html`)
3. **Screen 3**: Student Central Dashboard (`/pages/dashboard.html`)
4. **Screen 4**: Academic Courses Catalog (`/pages/courses.html`)
5. **Screen 5**: 5-Tab Course Classroom & Video Player (`/pages/course-detail.html`)
6. **Screen 6**: Live Classroom Broadcast Stage (`/pages/live.html`)
7. **Screen 7**: Assignments & Drag-and-Drop Submissions (`/pages/assignments.html`)
8. **Screen 8**: Grades & HTML5 Canvas Bar Chart (`/pages/grades.html`)
9. **Screen 9**: Direct Faculty-Student Chat (`/pages/messages.html`)
10. **Screen 10**: Institutional Profile & Settings (`/pages/profile.html`)
11. **Screen 11**: Faculty Dashboard & Evaluation Queue (`/pages/faculty-dashboard.html`)
12. **Screen 12**: Help Center & Academic FAQ (`/pages/help.html`)
13. **Screen 13**: 404 Error Page (`/pages/404.html`)

---

## 🛠️ Deploy on Render

1. Push the Lernovique folder to a GitHub repository.
2. On Render, create a new Static Site and connect that repository.
3. Leave the Build Command empty, set Publish Directory to "." (root), and deploy.

---

## 📜 Academic Integrity & License
Crafted for university online learning platform research. Open-source under MIT License.
