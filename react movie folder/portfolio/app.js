/**
 * Project Showcase Hub - Application Logic
 * Author: Harsh Singh (@SINGHHARSH2004)
 */

// Project Data Registry
const projectsData = [
  {
    id: "react-movie-app",
    title: "CineVerse Movie App",
    category: "react",
    categoryLabel: "React 19 & Vite",
    icon: "🎬",
    gradient: "linear-gradient(135deg, #e50914 0%, #b81d24 50%, #221f1f 100%)",
    shortDesc: "A feature-rich movie discovery web app with real-time TMDB API search, trending lists, and localStorage-synced favorites.",
    fullDesc: "CineVerse is a modern, responsive single-page web app built with React 19, React Router v7, and TMDB API. It allows cinephiles to browse trending cinema, search any title instantly, and bookmark favorite movies with persistent local storage.",
    features: [
      "Real-time movie search with TMDB API v3 endpoints",
      "Interactive heart favorite button with toggle animations",
      "Global state management with React Context + LocalStorage persistence",
      "Responsive CSS grid layout with dark mode glassmorphism",
      "Zero linter warnings, optimized Vite production builds"
    ],
    tags: ["React 19", "Vite 8", "TMDB API", "React Router v7", "Context API", "CSS Grid"],
    repoUrl: "https://github.com/SINGHHARSH2004/react-movie-app",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/react-movie-app.git",
    previewAvailable: true
  },
  {
    id: "expense-tracker-app",
    title: "Smart Expense Tracker",
    category: "javascript",
    categoryLabel: "Vanilla JS",
    icon: "💰",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 50%, #064e3b 100%)",
    shortDesc: "Interactive finance tracker calculating net balance, dynamic income, and categorized expenses in real-time.",
    fullDesc: "An intuitive, responsive web application for managing personal cash flow. Features live balance calculations, transaction histories, and edit/delete capabilities with persistent DOM updates.",
    features: [
      "Automatic real-time calculation of Net Balance, Total Earnings, and Expenses",
      "Categorized transaction logs with interactive edit and delete actions",
      "Pure Vanilla JavaScript without external framework dependencies",
      "Modern dark theme card styling with custom CSS variables"
    ],
    tags: ["JavaScript (ES6+)", "DOM Manipulation", "CSS3 Glassmorphism", "HTML5"],
    repoUrl: "https://github.com/SINGHHARSH2004/expense-tracker-app",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/expense-tracker-app.git",
    previewAvailable: true
  },
  {
    id: "github-profile-finder",
    title: "GitHub Profile Finder",
    category: "javascript",
    categoryLabel: "Vanilla JS & API",
    icon: "🔍",
    gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 50%, #1e1b4b 100%)",
    shortDesc: "Search any GitHub username to inspect user profile avatars, bio, followers count, and top public repositories.",
    fullDesc: "A sleek tool connecting to the GitHub REST API via Axios. It fetches user profiles on-the-fly and lists their top public repositories with direct clickable GitHub links and error handling.",
    features: [
      "Direct integration with GitHub REST API v3 using Axios",
      "Displays avatar, bio, follower/following count, and repository badges",
      "Sorts and embeds clickable links to recent public repositories",
      "Graceful error handling for non-existent users (404 state)"
    ],
    tags: ["JavaScript", "Axios", "GitHub REST API", "Async/Await", "CSS3"],
    repoUrl: "https://github.com/SINGHHARSH2004/github-profile-finder",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/github-profile-finder.git",
    previewAvailable: true
  },
  {
    id: "qr-code-component",
    title: "QR Code Card Component",
    category: "react",
    categoryLabel: "React & Vite",
    icon: "📱",
    gradient: "linear-gradient(135deg, #38bdf8 0%, #0284c7 50%, #0c4a6e 100%)",
    shortDesc: "Pixel-perfect, responsive QR Code card component built with React, Vite, and custom typography.",
    fullDesc: "A clean, modern Frontend Mentor challenge implementation built with React and Vite. Focused on precision layout, clean typography using Google Fonts (Outfit), and mobile responsiveness.",
    features: [
      "Fully responsive card layout optimized for mobile and desktop screens",
      "Clean component hierarchy built with React and Vite",
      "Custom CSS styling with soft elevation shadows"
    ],
    tags: ["React", "Vite", "Responsive Design", "Frontend Mentor", "CSS3"],
    repoUrl: "https://github.com/SINGHHARSH2004/qr-code-component",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/qr-code-component.git",
    previewAvailable: true
  },
  {
    id: "web-animations-showcase",
    title: "Web Animations Showcase",
    category: "ui",
    categoryLabel: "CSS3 & Animation",
    icon: "✨",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7e22ce 50%, #3b0764 100%)",
    shortDesc: "Modern CSS keyframe animations, smooth transitions, and dynamic interactive micro-effects.",
    fullDesc: "A curated collection of modern CSS keyframe animations and interactive hover effects showcasing creative web styling and transition techniques.",
    features: [
      "Hardware-accelerated CSS keyframe animations",
      "Smooth hover transitions and transforms",
      "Modular and reusable animation CSS classes"
    ],
    tags: ["CSS3 Keyframes", "Transitions", "UI Micro-interactions", "HTML5"],
    repoUrl: "https://github.com/SINGHHARSH2004/web-animations-showcase",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/web-animations-showcase.git",
    previewAvailable: true
  },
  {
    id: "react-localstorage-app",
    title: "React LocalStorage Manager",
    category: "react",
    categoryLabel: "React State",
    icon: "💾",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #78350f 100%)",
    shortDesc: "Demonstrates client-side state persistence in React using custom state synchronization with LocalStorage.",
    fullDesc: "An educational and practical React application showcasing how to seamlessly persist component state across page refreshes and browser sessions using React hooks.",
    features: [
      "Dynamic state hydration from browser LocalStorage",
      "Real-time synchronization using useEffect hook",
      "Clean UI with instant state reflection"
    ],
    tags: ["React 19", "LocalStorage", "React Hooks", "Vite"],
    repoUrl: "https://github.com/SINGHHARSH2004/react-localstorage-app",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/react-localstorage-app.git",
    previewAvailable: true
  },
  {
    id: "react-cards-project",
    title: "Interactive React Cards",
    category: "react",
    categoryLabel: "React Components",
    icon: "🃏",
    gradient: "linear-gradient(135deg, #ec4899 0%, #db2777 50%, #831843 100%)",
    shortDesc: "Dynamic card components with reusable prop architecture and structured layouts.",
    fullDesc: "A modular React application demonstrating component reusability, props drilling best practices, and responsive card grids.",
    features: [
      "Reusable Card component passing props dynamically",
      "Modern card layout with hover interactions",
      "Clean Vite development setup"
    ],
    tags: ["React", "Props", "Component Architecture", "Vite"],
    repoUrl: "https://github.com/SINGHHARSH2004/react-cards-project",
    cloneUrl: "git clone https://github.com/SINGHHARSH2004/react-cards-project.git",
    previewAvailable: true
  }
];

// DOM Elements
const projectsGrid = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const filterTabs = document.getElementById("filterTabs");
const resultsIndicator = document.getElementById("resultsIndicator");
const emptyState = document.getElementById("emptyState");
const resetFilterBtn = document.getElementById("resetFilterBtn");

// Modal Elements
const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalIcon = document.getElementById("modalIcon");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalFeatures = document.getElementById("modalFeatures");
const modalTags = document.getElementById("modalTags");
const modalCloneCode = document.getElementById("modalCloneCode");
const modalCopyBtn = document.getElementById("modalCopyBtn");
const modalGithubLink = document.getElementById("modalGithubLink");

// Toast
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

// Active State
let currentCategory = "all";
let searchQuery = "";

// Initialize App
function init() {
  updateCounts();
  renderProjects();
  setupEventListeners();
}

// Update Filter Badges Count
function updateCounts() {
  const allCount = projectsData.length;
  const reactCount = projectsData.filter(p => p.category === "react").length;
  const jsCount = projectsData.filter(p => p.category === "javascript").length;
  const uiCount = projectsData.filter(p => p.category === "ui").length;

  document.getElementById("countAll").textContent = allCount;
  document.getElementById("countReact").textContent = reactCount;
  document.getElementById("countJS").textContent = jsCount;
  document.getElementById("countUI").textContent = uiCount;
}

// Render Projects
function renderProjects() {
  const filtered = projectsData.filter(project => {
    const matchesCategory = currentCategory === "all" || project.category === currentCategory;
    const searchLower = searchQuery.toLowerCase().trim();
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchLower) ||
      project.shortDesc.toLowerCase().includes(searchLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchLower));

    return matchesCategory && matchesSearch;
  });

  // Results Indicator
  resultsIndicator.innerHTML = `Showing <b>${filtered.length}</b> of ${projectsData.length} projects`;

  if (filtered.length === 0) {
    projectsGrid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  projectsGrid.style.display = "grid";
  emptyState.style.display = "none";

  projectsGrid.innerHTML = filtered.map(project => `
    <div class="project-card" data-id="${project.id}">
      <div class="card-banner" style="background: ${project.gradient}">
        <div class="card-banner-overlay"></div>
        <span class="card-category-tag tag-${project.category}">${project.categoryLabel}</span>
        <div class="card-icon-emblem">${project.icon}</div>
      </div>

      <div class="card-body">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-desc">${project.shortDesc}</p>
        
        <div class="card-tags">
          ${project.tags.slice(0, 4).map(tag => `<span class="tech-tag">${tag}</span>`).join("")}
          ${project.tags.length > 4 ? `<span class="tech-tag">+${project.tags.length - 4}</span>` : ""}
        </div>

        <div class="card-footer">
          <button class="btn-card btn-details" onclick="openProjectModal('${project.id}')">
            <i class="fa-solid fa-circle-info"></i> Details
          </button>
          <a href="${project.repoUrl}" target="_blank" class="btn-card btn-github">
            <i class="fa-brands fa-github"></i> Repo
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

// Open Project Details Modal
window.openProjectModal = function(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  modalIcon.textContent = project.icon;
  modalCategory.textContent = project.categoryLabel;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.fullDesc;

  modalFeatures.innerHTML = project.features.map(f => `<li>${f}</li>`).join("");
  modalTags.innerHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");
  modalCloneCode.textContent = project.cloneUrl;
  modalGithubLink.href = project.repoUrl;

  projectModal.classList.add("open");
};

// Close Modal
function closeModal() {
  projectModal.classList.remove("open");
}

// Show Toast Notification
function showToast(message) {
  toastMsg.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Event Listeners
function setupEventListeners() {
  // Category tabs
  filterTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderProjects();
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    renderProjects();
  });

  // Clear search
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    renderProjects();
  });

  // Reset filters
  resetFilterBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    currentCategory = "all";
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    document.querySelector('.filter-btn[data-category="all"]').classList.add("active");
    renderProjects();
  });

  // Modal events
  modalCloseBtn.addEventListener("click", closeModal);
  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal.classList.contains("open")) {
      closeModal();
    }
  });

  // Copy Clone Command
  modalCopyBtn.addEventListener("click", () => {
    const text = modalCloneCode.textContent;
    navigator.clipboard.writeText(text).then(() => {
      showToast("Clone command copied to clipboard!");
    }).catch(() => {
      showToast("Command copied!");
    });
  });
}

// Start
document.addEventListener("DOMContentLoaded", init);
