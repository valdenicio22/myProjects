const img = document.getElementById('imgEu')
const pName = document.getElementById('repository_name')
const pDescription = document.getElementById('repository_description')

const API_URL = 'https://api.github.com/users/valdenicio22/repos'
const userRepos = async () => {
    const response = await fetch('https://api.github.com/users/valdenicio22/repos')
    const repos = await response.json();

    for (let repo of repos) {
        pName.innerHTML += repo.name
        pName.innerHTML += ' '
    }


    console.log(repos)
}
userRepos();

