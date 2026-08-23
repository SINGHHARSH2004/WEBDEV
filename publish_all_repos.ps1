# ==============================================================================
# Script to Automatically Create and Push Individual Repositories to GitHub
# ==============================================================================

$GH_PATH = "gh"
$BASE_DIR = "C:\Users\Harsh\OneDrive\Desktop\WEBDEV"
$GITHUB_USERNAME = "SINGHHARSH2004"

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host " Automated Individual GitHub Repository Publisher" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

# 1. Verify GitHub CLI Authentication
Write-Host "`n[1/3] Checking GitHub authentication status..." -ForegroundColor Yellow
$authCheck = & $GH_PATH auth status 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[ERROR] GitHub CLI is not logged in." -ForegroundColor Red
    Write-Host "Please run 'gh auth login' in your terminal." -ForegroundColor Yellow
    exit 1
}

Write-Host "GitHub CLI is authenticated as $GITHUB_USERNAME!" -ForegroundColor Green

# 2. Define Project List with tailored titles, paths, and descriptions
$projects = @(
    @{
        Name = "web-animations-showcase"
        Path = "$BASE_DIR\Animation"
        Description = "Modern CSS & JavaScript Animations and Keyframes Showcase"
        ReadmeTitle = "Modern Web Animations Showcase"
        Tech = "HTML5, CSS3 Keyframes, JavaScript"
    },
    @{
        Name = "javascript-dom-practice"
        Path = "$BASE_DIR\DOM"
        Description = "JavaScript DOM Manipulation Practice and Interactive Coding Questions"
        ReadmeTitle = "JavaScript DOM Practice Challenges"
        Tech = "JavaScript (DOM API), HTML5, CSS3"
    },
    @{
        Name = "expense-tracker-app"
        Path = "$BASE_DIR\EXPENSE_TRACKER"
        Description = "JavaScript Expense Tracker with Real-time Balance Calculation"
        ReadmeTitle = "Expense Tracker Web Application"
        Tech = "HTML5, CSS3, JavaScript"
    },
    @{
        Name = "github-profile-finder"
        Path = "$BASE_DIR\GITHUB_PROFILE_FINDER"
        Description = "GitHub User Profile & Repository Finder using GitHub REST API and Axios"
        ReadmeTitle = "GitHub Profile Finder"
        Tech = "HTML5, CSS3, JavaScript, Axios, GitHub REST API"
    },
    @{
        Name = "javascript-practice-basics"
        Path = "$BASE_DIR\practice"
        Description = "JavaScript Core Fundamentals & Algorithms Practice"
        ReadmeTitle = "JavaScript Practice & Fundamentals"
        Tech = "JavaScript ES6+, HTML5"
    },
    @{
        Name = "web-design-project1"
        Path = "$BASE_DIR\project1"
        Description = "Modern Responsive Web Design & Landing Page Layout"
        ReadmeTitle = "Web Design Showcase - Project 1"
        Tech = "HTML5, CSS3, RemixIcon"
    },
    @{
        Name = "web-design-project2"
        Path = "$BASE_DIR\project2"
        Description = "Modern Split-Screen Layout and UI Web Design"
        ReadmeTitle = "Web Design Showcase - Project 2"
        Tech = "HTML5, CSS3, RemixIcon"
    },
    @{
        Name = "web-design-project3"
        Path = "$BASE_DIR\project3"
        Description = "Minimalist Creative Web Design Layout"
        ReadmeTitle = "Web Design Showcase - Project 3"
        Tech = "HTML5, CSS3"
    },
    @{
        Name = "rayban-animated-landing-page"
        Path = "$BASE_DIR\project4"
        Description = "Ray-Ban Inspired Animated Luxury Landing Page with Video & Custom Typography"
        ReadmeTitle = "Ray-Ban Animated Landing Page"
        Tech = "HTML5, CSS3, Custom Fonts (Gilroy, Monument Extended), Video"
    },
    @{
        Name = "javascript-todo-list"
        Path = "$BASE_DIR\project5"
        Description = "Interactive To-Do List Web Application with JavaScript DOM"
        ReadmeTitle = "Interactive To-Do List"
        Tech = "HTML5, CSS3, JavaScript DOM"
    },
    @{
        Name = "web-design-project6"
        Path = "$BASE_DIR\project6"
        Description = "Modern CSS Styling and Web Component Layout"
        ReadmeTitle = "Web Design Showcase - Project 6"
        Tech = "HTML5, CSS3"
    },
    @{
        Name = "qr-code-component"
        Path = "$BASE_DIR\QR Card"
        Description = "Responsive QR Code Card Component built with React and Vite"
        ReadmeTitle = "QR Code Card Component (React + Vite)"
        Tech = "React, Vite, CSS3"
    },
    @{
        Name = "qr-code-html-css"
        Path = "$BASE_DIR\QR-code"
        Description = "Frontend Mentor QR Code Component Challenge in Vanilla HTML & CSS"
        ReadmeTitle = "QR Code Component (HTML & CSS)"
        Tech = "HTML5, CSS3"
    },
    @{
        Name = "react-movie-app"
        Path = "$BASE_DIR\react movie folder\frontend"
        Description = "React 19 & TMDB API Movie Discovery Web Application with Favorites"
        ReadmeTitle = "React Movie Discovery Web App"
        Tech = "React 19, Vite, TMDB API, React Router"
    },
    @{
        Name = "modern-developer-portfolio"
        Path = "$BASE_DIR\react movie folder\portfolio"
        Description = "Responsive Personal Portfolio Website with Interactive JavaScript & Modern CSS"
        ReadmeTitle = "Modern Developer Portfolio"
        Tech = "HTML5, Modern CSS3, JavaScript"
    },
    @{
        Name = "react-vite-starter"
        Path = "$BASE_DIR\reactJs\01-folder"
        Description = "React & Vite Getting Started Template and Interactive Counter"
        ReadmeTitle = "React + Vite Starter & Counter App"
        Tech = "React, Vite, JavaScript"
    },
    @{
        Name = "react-components-starter"
        Path = "$BASE_DIR\reactJs\02-folder"
        Description = "React Modular Components Architecture & Navbar UI"
        ReadmeTitle = "React Modular Components Starter"
        Tech = "React, Vite, CSS"
    },
    @{
        Name = "react-props-demo"
        Path = "$BASE_DIR\reactJs\03-props"
        Description = "React Props, State Passing & Component Hierarchy Demo"
        ReadmeTitle = "React Props & State Demo"
        Tech = "React, Vite, CSS"
    },
    @{
        Name = "react-cards-project"
        Path = "$BASE_DIR\reactJs\04-cards-project"
        Description = "Interactive React Cards and UI Components Project"
        ReadmeTitle = "React Interactive Cards Project"
        Tech = "React, Vite, CSS"
    },
    @{
        Name = "react-localstorage-app"
        Path = "$BASE_DIR\reactJs\localStorage"
        Description = "React Application demonstrating state persistence with LocalStorage"
        ReadmeTitle = "React LocalStorage State Persistence"
        Tech = "React, Vite, LocalStorage API"
    },
    @{
        Name = "react-qr-code-app"
        Path = "$BASE_DIR\reactJs\QR project"
        Description = "Interactive React QR Code Generator and Card Display Component"
        ReadmeTitle = "React QR Code Card App"
        Tech = "React, Vite, CSS"
    },
    @{
        Name = "tailwind-portfolio-landing-page"
        Path = "$BASE_DIR\tailWind"
        Description = "Modern Digital Product Designer Portfolio Landing Page built with Tailwind CSS"
        ReadmeTitle = "Tailwind CSS Portfolio Landing Page"
        Tech = "HTML5, Tailwind CSS, RemixIcon"
    }
)

# 3. Process each project
Write-Host "`n[2/3] Processing and publishing $($projects.Count) individual repositories..." -ForegroundColor Yellow

$defaultGitignore = @"
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production / Build output
dist/
build/
*.exe
*.crdownload
*.zip

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS Files
.DS_Store
Thumbs.db

# IDE / Editor files
.vscode/
.idea/
*.swp
*.swo
"@

$successCount = 0
$failCount = 0

foreach ($proj in $projects) {
    $name = $proj.Name
    $dir = $proj.Path
    $desc = $proj.Description
    $title = $proj.ReadmeTitle
    $tech = $proj.Tech

    Write-Host "`n--------------------------------------------------" -ForegroundColor DarkCyan
    Write-Host "-> Processing: $name" -ForegroundColor Cyan
    Write-Host "   Directory: $dir" -ForegroundColor Gray

    if (-not (Test-Path $dir)) {
        Write-Host "   [WARN] Directory not found, skipping: $dir" -ForegroundColor Yellow
        $failCount++
        continue
    }

    Set-Location $dir

    # A. Ensure .gitignore exists
    $gitignorePath = Join-Path $dir ".gitignore"
    if (-not (Test-Path $gitignorePath)) {
        Set-Content -Path $gitignorePath -Value $defaultGitignore -Encoding UTF8
    } else {
        # Ensure *.exe and *.crdownload are in .gitignore
        $currentGitignore = Get-Content $gitignorePath -Raw
        if ($currentGitignore -notmatch '\*\.exe') {
            Add-Content -Path $gitignorePath -Value "`n*.exe`n*.crdownload`n*.zip`n" -Encoding UTF8
        }
    }

    # B. Ensure README.md exists
    $readmePath = Join-Path $dir "README.md"
    if (-not (Test-Path $readmePath)) {
        $readmeContent = @"
# $title

$desc

## 🛠 Tech Stack
- **Technologies**: $tech

## 🚀 Getting Started

### Prerequisites
- Modern Web Browser (Chrome, Firefox, Edge, Safari)
"@
        if ($tech -match "React" -or $tech -match "Vite") {
            $readmeContent += @"

- Node.js (v18 or newer)
- npm / yarn / pnpm

### Installation & Running Locally
```bash
# Install dependencies
npm install

# Start the local development server
npm run dev
```
"@
        } else {
            $readmeContent += @"


### Running Locally
Simply open `index.html` in your favorite web browser or use VS Code Live Server.
"@
        }

        $readmeContent += @"


---
👤 **Author**: Harsh Singh ([@$GITHUB_USERNAME](https://github.com/$GITHUB_USERNAME))
"@
        Set-Content -Path $readmePath -Value $readmeContent -Encoding UTF8
    }

    # C. Create repository on GitHub if not existing
    $repoCheck = & $GH_PATH repo view "$GITHUB_USERNAME/$name" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   [OK] Repository '$GITHUB_USERNAME/$name' already exists on GitHub." -ForegroundColor Green
    } else {
        Write-Host "   [+] Creating repository '$GITHUB_USERNAME/$name' on GitHub..." -ForegroundColor Yellow
        & $GH_PATH repo create "$GITHUB_USERNAME/$name" --public --description "$desc"
        if ($LASTEXITCODE -ne 0) {
            Write-Host "   [ERROR] Failed to create repo $name" -ForegroundColor Red
            $failCount++
            continue
        }
    }

    # D. Initialize git repository locally
    if (-not (Test-Path (Join-Path $dir ".git"))) {
        git init -b main | Out-Null
    }

    # E. Ensure branch name is main
    git branch -M main 2>$null

    # F. Configure remote origin
    $remoteUrl = "https://github.com/$GITHUB_USERNAME/$name.git"
    git remote remove origin 2>$null
    git remote add origin $remoteUrl

    # G. Stage files, unstage forbidden binaries
    git add -A
    git reset -- '*.exe' '*.crdownload' '*.zip' 'node_modules' 'dist' 2>$null

    # H. Commit
    git commit -m "feat: initial release of $title" --allow-empty | Out-Null

    # I. Push to GitHub
    Write-Host "   [^] Pushing to $remoteUrl..." -ForegroundColor Magenta
    $pushOutput = git push -u origin main --force 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "   [SUCCESS] Published: https://github.com/$GITHUB_USERNAME/$name" -ForegroundColor Green
        $successCount++
    } else {
        Write-Host "   [ERROR] Push failed for $name : $pushOutput" -ForegroundColor Red
        $failCount++
    }
}

Set-Location $BASE_DIR

Write-Host "`n======================================================" -ForegroundColor Cyan
Write-Host " Publishing Summary: $successCount Succeeded, $failCount Failed" -ForegroundColor $(if ($failCount -eq 0) { "Green" } else { "Yellow" })
Write-Host " All individual repositories have been processed!" -ForegroundColor Green
Write-Host "======================================================" -ForegroundColor Cyan
