const APIURL = "https://api.github.com/users";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

// Fetch GitHub user data
async function getUser(username) {
    try {
        const { data } = await axios(APIURL +"/" + username);

        createUserCard(data);
        getRepos(username);

    } catch (error) {
        if (error.response && error.response.status === 404) {
            createErrorCard("No profile with this username");
        } else {
            createErrorCard("Something went wrong!");
        }
    }
}

// Fetch user repositories
async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + "/" + username + "/repos?sort=created");

        addReposToCard(data);

    } catch (error) {
        createErrorCard("Problem fetching repositories.");
    }
}

// Create user card
function createUserCard(user) {
    const userId = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : "";

    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>

            <div class="user-info">
                <h2>${userId}</h2>

                ${userBio}

                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

// Add repositories to card
function addReposToCard(repos) {
    const reposEl = document.getElementById("repos");

    reposEl.innerHTML = "";

    repos.forEach(repo => {
        const repoEl = document.createElement("a");

        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";

        repoEl.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available"}</p>
        `;

        reposEl.appendChild(repoEl);
    });
}

// Create error card
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    main.innerHTML = cardHTML;
}

// Search form submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value.trim();

    if (user) {
        getUser(user);
        search.value = "";
    }
});