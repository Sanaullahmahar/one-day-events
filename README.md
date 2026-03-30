# 🎉 One Day Events – Frontend Clone Project

## 📌 Project Overview

This project is a **frontend clone of onedayevent.com**, developed as a team assignment. The main objective was to replicate the core design and functionality of the original website while applying **modern React development practices**, including **dynamic UI behavior, scalable code structure, and reusable components**.


**Initial the target is to make fronted pages with dynamic logic focusing scalabilty**


The project focuses on building a **clean landing page, dynamic navigation pages, and a multi-step quote form**, while ensuring the codebase is organized and scalable for future development.

---

# 🎯 Project Tasks

## 1️⃣ Clone OneDayEvent Website

The primary task was to **replicate the design and structure of onedayevent.com**.

Key goals:

* Match the UI layout and user experience
* Implement core navigation flow
* Create a responsive and modern interface

---

## 2️⃣ Landing Page Development

The **main landing page** was the primary focus of this project.

The landing page includes:

* Hero section
* Event type highlights
* Service explanation
* Call-to-action buttons
* Navigation to quote form

The page is designed to be **visually clean, responsive, and user-friendly**.

---

## 3️⃣ Dynamic Navbar Pages

The project includes **dynamic pages connected through the navigation bar**.

Instead of static pages, we implemented **React Router based navigation**, allowing:

* Smooth page transitions
* Single Page Application (SPA) behavior
* Dynamic content loading without full page reload

Example pages include:

* Home
* Event Pages
* Quote Page

---

# 🧠 Dynamic Logic Implementation

The project uses **React dynamic logic** to make the interface interactive and flexible.

## State Management

React's `useState` is used to manage dynamic form data and page state.

Example:

```javascript
const [step, setStep] = useState(0);
```

This allows the application to control the **multi-step quote form dynamically**.

---

## Conditional Rendering

Different UI sections appear based on the current step.

Example:

```javascript
{step === 0 && <EventTypeSelection />}
{step === 1 && <EventDetails />}
{step === 2 && <CoverageOptions />}
```

This approach ensures the UI updates **without reloading the page**.

---

## Data-Driven Components

Event types are stored in a separate data file:

```
src/data/events.ts
```

This allows new events to be added without modifying UI components.

Example:

```javascript
export const eventTypes = [
  { slug: "wedding", shortTitle: "Wedding" },
  { slug: "birthday", shortTitle: "Birthday" }
];
```

---

# ⚙️ Scalability of the Code

The project was structured to support **future scalability and maintainability**.

## Component-Based Architecture

Reusable components are created to avoid repetition and simplify development.

Examples:

* Button component
* Input component
* Layout container
* Navbar
* Event cards

This makes it easier to extend the system as the project grows.

---

## Modular Folder Structure

The project separates logic, UI, and data into different folders to maintain clean architecture.

---

# 📁 Basic View of Project Folder Structure

```text
one-day-events/
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── images/
│
├── src/
│
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── card.tsx
│   │   │
│   │   └── event/
│   │       ├── EventCard.tsx
│   │       └── EventGrid.tsx
│
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── GetQuotePage.tsx
│   │   ├── EventPage.tsx
│   │   └── NotFound.tsx
│
│   ├── data/
│   │   └── events.ts
│
│   ├── lib/
│   │   ├── constants.ts
│   │   └── utils.ts
│
│   ├── styles/
│   │   └── globals.css
│
│   ├── App.tsx
│   ├── main.tsx
│   └── router.tsx
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

This structured architecture allows developers to **scale the application easily** as more features are added.

---

# 🎨 Fonts and Design System

The project uses the **same fonts provided in the original design requirements** to maintain visual consistency with the reference website.

By using the **given fonts and Tailwind CSS styling system**, the UI maintains a professional and consistent design across all components.

---

# ⚠️ Current Limitations

This project is currently a **frontend-only implementation**.

Limitations include:

* No backend integration
* No database
* Quote submission is currently simulated

Future improvements may include:

* Backend API integration
* Database support
* Real-time quote management system

---

# 🚀 Future Improvements

Potential upgrades include:

* Backend development using **Node.js or Laravel**
* Database integration (**MySQL / PostgreSQL**)
* Real quote submission system
* Admin dashboard for event management
* Authentication system for users

---

# 👥 Team Members

* **Sanauallah**
* **Muhammad Irtaza Ali**
* **Mazhar**
* **Saifullah**
* **Alia Mahar**
* **Shahriyar Shahid**

### 👑 Team Lead

**Haider**

---

# 📌 Conclusion

This project successfully demonstrates the ability to:

* Clone a real-world event website interface
* Implement **dynamic React logic**
* Build a **scalable and maintainable frontend architecture**

The project provides a strong foundation for developing a **full-stack event management platform in the future**.

---

# 💻 Technology Stack

* **React.js**
* **TypeScript**
* **Tailwind CSS**
* **React Router**
* **Zod (Form Validation)**
* **Vite**
