# 🌟 React-Motion Animation Demo

## What is this repository for?

This repository is a small **demo website** built using **Next.js** and **TypeScript** that showcases multiple pages of **UI animations and motion effects** where demo of how to integrate motion and animations into a React/Next application. You can use it as a learning playground or a starting point for your own animated website.

Feel free to fork and modify as per your needs.

---

## 📄 Pages and Concepts

It contains **four main pages** (found under the `app/` directory). Each page focuses on a distinct animation concept:

| Page URL | Concept Being Illustrated | What It Shows |
| :--- | :--- | :--- |
| **`/`** | **Basic Entrance & Exit** | A welcome screen with simple fade/slide in/out animations for mounting/unmounting elements. |
| **`/scroll`** | **Scroll-Triggered Animations** | Elements animate (fade in, move into view) as they enter the viewport while scrolling down the page. |
| **`/layout`** | **Layout / Shared Element Animations** | Demonstrates how components animate smoothly when their position or container layout changes (e.g., list reordering, component reflow). |
| **`/stagger`** | **Staggered / Sequence Animations** | A list or grid of items animating one after another with a pleasing, sequential effect. |

> **Note:** You can verify the exact number of pages by checking files under `app/` (for example, `app/page.tsx`, `app/scroll/page.tsx`, etc.).

---

## 🚀 How to Run this Repo Locally

If you want to set up this project on your own system and view the animations, follow these steps:

### 1. Clone the repository

```bash
git clone [https://github.com/Sultan00786/react-motion.git](https://github.com/Sultan00786/react-motion.git)
cd react-motion
```

### 2. Install dependencies & run the development server

```bash
pnpm install
pnpm dev
```
This will start the Next.js development server. Open [http://localhost:3000](http://localhost:3000) in your browser to view the demo.
