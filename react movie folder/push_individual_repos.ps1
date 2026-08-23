# ==============================================================================
# Script to Automatically Create and Push Individual Repositories to GitHub
# ==============================================================================

$GH_PATH = "C:\Program Files\GitHub CLI\gh.exe"
$BASE_DIR = "C:\Users\Harsh\OneDrive\Desktop\WEBDEV"

Write-Host "======================================================" -ForegroundColor Cyan
Write-Host " Automated Individual GitHub Repository Publisher" -ForegroundColor Cyan
Write-Host "======================================================" -ForegroundColor Cyan

# 1. Verify GitHub CLI Authentication
Write-Host "`n[1/2] Checking GitHub authentication status..." -ForegroundColor Yellow
$authCheck = & $GH_PATH auth status 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n GitHub CLI is not logged in yet." -ForegroundColor Red
    Write-Host " Please run the following command once in your terminal to authenticate:" -ForegroundColor Yellow
    Write-Host '   & "C:\Program Files\GitHub CLI\gh.exe" auth login' -ForegroundColor Green
    exit
}

Write-Host " GitHub CLI is authenticated!" -ForegroundColor Green

# 2. Define Project List
$projects = @(
    @{
        Name = "react-movie-app"
        Path = "$BASE_DIR\react movie folder\frontend"
        Description = "React 19 & TMDB API Movie Discovery Web Application with Favorites"
    },
    @{
        Name = "expense-tracker-app"
        Path = "$BASE_DIR\EXPENSE_TRACKER"
        Description = "JavaScript Expense Tracker with Real-time Balance Calculation"
    },
    @{
        Name = "github-profile-finder"
        Path = "$BASE_DIR\GITHUB_PROFILE_FINDER"
        Description = "GitHub User Profile and Repository Finder using GitHub REST API and Axios"
    },
    @{
        Name = "qr-code-component"
        Path = "$BASE_DIR\QR Card"
        Description = "Responsive QR Code Card Component built with React and Vite"
    },
    @{
        Name = "web-animations-showcase"
        Path = "$BASE_DIR\Animation"
        Description = "Modern CSS & JavaScript Animations and Keyframes Showcase"
    },
    @{
        Name = "react-localstorage-app"
        Path = "$BASE_DIR\reactJs\localStorage"
        Description = "React Application demonstrating state persistence with LocalStorage"
    },
    @{
        Name = "react-cards-project"
        Path = "$BASE_DIR\reactJs\04-cards-project"
        Description = "Interactive React Cards and UI Components Project"
    }
)

Write-Host "`n[2/2] Publishing individual repositories to GitHub..." -ForegroundColor Yellow

foreach ($proj in $projects) {
    $name = $proj.Name
    $dir = $proj.Path
    $desc = $proj.Description

    Write-Host "`n--------------------------------------------------" -ForegroundColor DarkCyan
    Write-Host " Processing project: $name" -ForegroundColor Cyan
    Write-Host " Directory: $dir" -ForegroundColor Gray

    if (-not (Test-Path $dir)) {
        Write-Host " Directory not found, skipping: $dir" -ForegroundColor Yellow
        continue
    }

    Set-Location $dir

    # Check if repo already exists on GitHub
    $repoCheck = & $GH_PATH repo view "SINGHHARSH2004/$name" 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host " Repository 'SINGHHARSH2004/$name' already exists on GitHub." -ForegroundColor Green
    } else {
        Write-Host " Creating repository '$name' on GitHub..." -ForegroundColor Yellow
        & $GH_PATH repo create "SINGHHARSH2004/$name" --public --description "$desc"
    }

    # Initialize git if needed
    if (-not (Test-Path "$dir\.git")) {
        git init -b main
    }

    # Set remote
    git remote remove origin 2>$null
    git remote add origin "https://github.com/SINGHHARSH2004/$name.git"

    # Stage files safely
    git add .
    git reset -- '*.exe' '*.zip' 'node_modules' 'dist' 2>$null
    git commit -m "feat: initial release for $name" --allow-empty
    
    Write-Host " Pushing to https://github.com/SINGHHARSH2004/$name.git ..." -ForegroundColor Magenta
    git push -u origin main --force

    Write-Host " Successfully published: https://github.com/SINGHHARSH2004/$name" -ForegroundColor Green
}

Write-Host "`n All individual repositories have been created and published!" -ForegroundColor Green
