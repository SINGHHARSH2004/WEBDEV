# 🎬 CineVerse - React & TMDB Movie Application

<div align="center">

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.18.2-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TMDB API](https://img.shields.io/badge/TMDB_API-v3-01B4E4?style=for-the-badge&logo=the-movie-database&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A modern, responsive, and feature-packed Movie Discovery web application built with **React 19**, **Vite**, **React Router v7**, and **The Movie Database (TMDB) API**. Browse trending movies, search for any title in real-time, and curate your personal favorites list with persistent local storage.

[Explore Demo](#-getting-started) · [Report Bug](https://github.com/SINGHHARSH2004/WEBDEV/issues) · [Request Feature](https://github.com/SINGHHARSH2004/WEBDEV/issues)

</div>

---

## ✨ Features

- 🔥 **Trending & Popular Movies**: Automatically fetches and showcases the latest trending and popular movies from TMDB on the home page.
- 🔍 **Real-Time Movie Search**: Instant search capability to find movies by title with dynamic query handling and error states.
- ❤️ **Interactive Favorites System**: Add or remove movies to/from your personal watchlist with a single click on the animated heart icon.
- 💾 **Persistent Storage**: Uses React Context API combined with `localStorage` to keep your favorite movies saved even after refreshing or closing the browser.
- 📱 **Fully Responsive UI**: Clean, modern dark-themed aesthetic with a responsive CSS grid layout optimized for desktops, tablets, and mobile devices.
- ⚡ **Blazing Fast Performance**: Powered by Vite and React 19 for instantaneous hot module replacement (HMR) and optimized production bundles.

---

## 🛠️ Tech Stack

| Category | Technology / Library |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 8](https://vitejs.dev/) |
| **Routing** | [React Router DOM v7](https://reactrouter.com/) |
| **State Management** | React Context API (`MovieContext`) + `localStorage` |
| **API Provider** | [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) |
| **Styling** | Custom Vanilla CSS (Dark Mode & Glassmorphic touches) |
| **Linter** | [Oxlint](https://oxc.rs/) |

---

## 📁 Project Structure

```text
frontend/
├── public/                 # Static public assets & icons
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── components/         # Reusable React UI components
│   │   ├── MovieCard.jsx   # Movie poster card with favorite toggle button
│   │   └── NavBar.jsx      # Navigation bar with links and branding
│   ├── context/            # Global React Context
│   │   └── MovieContext.jsx # Favorites state management & localStorage sync
│   ├── css/                # Component and page stylesheets
│   │   ├── App.css         # Main application container layout
│   │   ├── Favorites.css   # Favorites page styles & empty state styling
│   │   ├── Home.css        # Search bar and movie grid layout
│   │   ├── MovieCard.css   # Card hover effects, poster badges & overlay
│   │   ├── Navbar.css      # Sticky navigation bar styles
│   │   └── index.css       # Global styles, variables, typography & resets
│   ├── pages/              # Application route pages
│   │   ├── Favorites.jsx   # Saved movies collection page
│   │   └── Home.jsx        # Landing page with search and popular list
│   ├── services/           # External API integration
│   │   └── api.js          # TMDB API service methods (popular, search)
│   ├── App.jsx             # Main router configuration & context wrapper
│   └── main.jsx            # Application entry point
├── index.html              # HTML5 entry template
├── package.json            # Dependencies and npm scripts
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the movie app locally on your machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- `npm` or `yarn` / `pnpm`
- A free TMDB API key from [The Movie Database](https://www.themoviedb.org/)

### 1. Clone the Repository

```bash
git clone https://github.com/SINGHHARSH2004/WEBDEV.git
cd "WEBDEV/react movie folder/frontend"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure TMDB API (Optional / Custom Key)

The app connects to TMDB API in `src/services/api.js`. You can use the default configured key or plug in your own API key:

```javascript
// src/services/api.js
const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📜 Available Scripts

In the `frontend` directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Builds and bundles the app for production in the `dist/` directory. |
| `npm run preview` | Locally preview the production build. |
| `npm run lint` | Runs Oxlint to check code quality and syntax issues. |

---

## 🔑 Key Components Overview

### 1. `MovieContext.jsx`
Manages the global state for favorite movies using React Context and synchronizes state with the browser's `localStorage` so favorites persist across sessions:
- `favorites`: Array of saved movie objects.
- `addToFavorites(movie)`: Appends a movie to the favorites list.
- `removeFromFavorites(movieId)`: Removes a movie by its TMDB ID.
- `isFavorite(movieId)`: Returns boolean indicating if a movie is bookmarked.

### 2. `Home.jsx`
The central hub for movie discovery:
- Fetches top popular movies on initial mount using `useEffect`.
- Interactive search input allowing users to query TMDB's movie catalog.
- Displays responsive loading indicators and error banners.

### 3. `MovieCard.jsx`
Displays individual movie metadata:
- High-resolution poster via TMDB CDN (`https://image.tmdb.org/t/p/w500`).
- Animated heart favorite button that toggles active state.
- Formatted release date and movie title.

### 4. `Favorites.jsx`
A dedicated view displaying all user-saved movies in a responsive grid, with an engaging empty state prompt when no movies have been added.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  Crafted with ❤️ by <a href="https://github.com/SINGHHARSH2004">SINGHHARSH2004</a>
</div>
