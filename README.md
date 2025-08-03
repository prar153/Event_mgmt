# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Event Management System

A simple and interactive Event Management System built with **ReactJS**, designed for managing organizational events. This application allows users to **add**, **view**, **update**, and **delete** events, with in-built conflict validation and user-friendly interface.

---

## Features

### Add Event

- Users can create a new event by entering:
  - **Title** (required)
  - **Description** (required)
  - **Venue** (required)
  - **Date** (required)

### View Event List

- All added events are shown in a list format.
- Each event displays:
  - Title
  - Venue
  - Date
- Past events are visually distinguished using a different background color.

### Update Event

- Users can edit any existing event.
- **Validation:** If another event already exists with the same **venue** and **date**, an error message prevents duplication.

### Delete Event

- Users can delete any event from the list permanently.

## How It Works

- The app uses **React functional components** and **hooks** such as `useState`, `useEffect`, and `useNavigate` for routing.
- Event data is stored in **localStorage**, ensuring persistence even after page reload.
- Validation logic is handled manually, including a utility to check for **date + venue conflicts** before adding or updating events.
- Custom components (`TextInput`, `Button`) and hooks (`useLocalStorageEvents`) are used for better code organization and reusability.
- Styling is done using **Tailwind CSS** and **Ant Design** components for input and layout.

---

##  Tech Stack

- ReactJS (Vite)
- Tailwind CSS
- Ant Design (Form, DatePicker, Message)
- React Router DOM
- localStorage (No backend)
- Custom React Hooks

---
##  Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the Repository 

```bash
git clone https://github.com/prar153/Event_mgmt
cd event_mgmt



-### 2. Install the core dependencies:

```bash
npm install
# or
pnpm install

React router dom
npm install react-router-dom

Ant design
npm install antd

Tailwind css
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

-### 3. Run the app
npm run dev
# or
pnpm dev




