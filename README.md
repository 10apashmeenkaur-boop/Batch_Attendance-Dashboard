# Student Attendance Dashboard

A simple and interactive Student Attendance Dashboard built with **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**.

The dashboard allows users to update student attendance, search students, view live attendance summaries, and experience smooth UI animations.

---

## Features

- Display student attendance from mock JSON data
- Update attendance status (Present / Absent / Late)
- Live attendance summary
- Search students by name
- Responsive design for smaller screens
- Animated status badge transitions
- Animated list filtering using Framer Motion

---

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

---

## Project Structure

```
app/
components/
data/
public/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/10apashmeenkaur-boop/Batch_Attendance-Dashboard.git
```

Move into the project folder:

```bash
cd Batch_Attendance-Dashboard
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Motion Animations

### 1. Micro Interaction

Attendance status badges animate whenever the status changes using scale and opacity transitions.

### 2. List Animation

Student rows animate smoothly when filtering through the search bar using Framer Motion's layout animations and AnimatePresence.

---

## Tradeoffs / Shortcuts

- Student data is stored in a local mock JSON file instead of using a backend or database to keep the project focused on frontend functionality.
- Attendance updates are stored using React state, so changes reset after refreshing the page since persistence was not required for this assignment.

---

## Future Improvements

- Attendance history by date
- Backend integration
- Persistent storage
- Sorting by attendance status
- Export attendance to CSV

---

## Author
Pashmeen Kaur
