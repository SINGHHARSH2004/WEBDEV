# 🚀 Multi-Repository Setup Guide & Documentation

This guide provides the complete, copy-paste-ready commands and **`README.md`** documentation to publish each project in your `WEBDEV` collection as its own standalone GitHub repository.

---

## 📋 Table of Projects

1. [🎬 React Movie Discovery App (CineVerse)](#1--react-movie-discovery-app-cineverse)
2. [💰 Expense Tracker Web App](#2--expense-tracker-web-app)
3. [🔍 GitHub Profile Finder](#3--github-profile-finder)
4. [📱 QR Code Component](#4--qr-code-component)
5. [💾 React LocalStorage App](#5--react-localstorage-app)
6. [✨ Web Animations Showcase](#6--web-animations-showcase)

---

## 1. 🎬 React Movie Discovery App (CineVerse)

### 📌 Project Folder: `react movie folder`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`react-movie-app`** (or `cineverse-movie-app`)
- Visibility: **Public**
- Do **not** check "Add a README file"

#### **Step 2: Push to GitHub**
Run in PowerShell / Terminal:
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\react movie folder\frontend"

# Initialize git if starting fresh
git init -b main
git add .
git commit -m "feat: initial commit - React 19 TMDB Movie App with Favorites"
git remote add origin https://github.com/SINGHHARSH2004/react-movie-app.git
git push -u origin main
```

---

## 2. 💰 Expense Tracker Web App

### 📌 Project Folder: `EXPENSE_TRACKER`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`expense-tracker-app`**
- Visibility: **Public**
- Do **not** check "Add a README file"

#### **Step 2: Push to GitHub**
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\EXPENSE_TRACKER"

git init -b main
git add index.html style.css script.js index.js pen.svg trash.svg
git commit -m "feat: initial commit - JavaScript Expense Tracker App"
git remote add origin https://github.com/SINGHHARSH2004/expense-tracker-app.git
git push -u origin main
```

#### **📄 README.md for Expense Tracker**:
```markdown
# 💰 Expense Tracker Web Application

A clean, responsive, and intuitive **Expense & Income Tracker** built with vanilla **HTML5**, **CSS3**, and **JavaScript**. Track your financial cash flow, calculate net balance in real-time, and log transactions with edit and delete capabilities.

## ✨ Features
- 💵 **Real-Time Balance Calculation**: Automatically updates Net Balance, Total Earnings, and Total Expenses.
- ➕ **Add Transactions**: Categorize entries into Income (Earnings) or Expense.
- ✏️ **Edit & Delete**: Modify or remove past transactions dynamically.
- 📱 **Responsive UI**: Glassmorphic and modern card-based interface styled with pure CSS.

## 🛠️ Built With
- **HTML5** - Semantic structure
- **CSS3** - Responsive design, custom variables, and modern shadows
- **JavaScript (ES6+)** - State management, DOM manipulation, and calculation logic

## 🚀 How to Run Locally
1. Clone this repository:
   ```bash
   git clone https://github.com/SINGHHARSH2004/expense-tracker-app.git
   ```
2. Open `index.html` directly in your browser or run with VS Code Live Server.

## 📄 License
Licensed under the [MIT License](LICENSE).
```

---

## 3. 🔍 GitHub Profile Finder

### 📌 Project Folder: `GITHUB_PROFILE_FINDER`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`github-profile-finder`**
- Visibility: **Public**

#### **Step 2: Push to GitHub**
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\GITHUB_PROFILE_FINDER"

git init -b main
git add index.htm script.js style.css
git commit -m "feat: initial commit - GitHub Profile Finder with Axios"
git remote add origin https://github.com/SINGHHARSH2004/github-profile-finder.git
git push -u origin main
```

#### **📄 README.md for GitHub Profile Finder**:
```markdown
# 🔍 GitHub Profile & Repository Finder

A sleek web application to search and inspect GitHub user profiles and their public repositories using the **GitHub REST API** and **Axios**.

## ✨ Features
- 🔎 **Real-Time User Lookup**: Search any GitHub user by username.
- 👤 **Profile Card**: Displays user avatar, bio, follower/following count, and total public repos.
- 📂 **Top Repositories**: Lists recent public repositories with direct clickable links.
- ⚠️ **Error Handling**: Friendly 404 state when a user profile is not found.

## 🛠️ Built With
- **HTML5 & CSS3**
- **JavaScript (Async/Await)**
- **Axios** (via CDN)
- **GitHub REST API v3**

## 🚀 Quick Start
```bash
git clone https://github.com/SINGHHARSH2004/github-profile-finder.git
```
Open `index.htm` in any web browser.
```

---

## 4. 📱 QR Code Component

### 📌 Project Folder: `QR Card`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`qr-code-component`**

#### **Step 2: Push to GitHub**
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\QR Card"

git init -b main
git add .
git commit -m "feat: initial commit - React Vite QR Code Component"
git remote add origin https://github.com/SINGHHARSH2004/qr-code-component.git
git push -u origin main
```

#### **📄 README.md for QR Code Component**:
```markdown
# 📱 QR Code Card Component

A pixel-perfect, responsive **QR Code Card Component** built using **React** and **Vite**, based on the Frontend Mentor challenge.

## 🛠️ Tech Stack
- **React 19**
- **Vite**
- **Vanilla CSS** (Google Fonts Outfit)

## 🚀 Setup & Run
```bash
npm install
npm run dev
```
```

---

## 5. 💾 React LocalStorage App

### 📌 Project Folder: `reactJs/localStorage`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`react-localstorage-demo`**

#### **Step 2: Push to GitHub**
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\reactJs\localStorage"

git init -b main
git add .
git commit -m "feat: initial commit - React LocalStorage State Persistence"
git remote add origin https://github.com/SINGHHARSH2004/react-localstorage-demo.git
git push -u origin main
```

---

## 6. ✨ Web Animations Showcase

### 📌 Project Folder: `Animation`

#### **Step 1: Create GitHub Repo**
- Go to [github.com/new](https://github.com/new)
- Name: **`web-animations-showcase`**

#### **Step 2: Push to GitHub**
```powershell
cd "C:\Users\Harsh\OneDrive\Desktop\WEBDEV\Animation"

git init -b main
git add index.html style.css
git commit -m "feat: initial commit - CSS keyframe animations"
git remote add origin https://github.com/SINGHHARSH2004/web-animations-showcase.git
git push -u origin main
```

---

<div align="center">
  Generated for <a href="https://github.com/SINGHHARSH2004">SINGHHARSH2004</a>
</div>
