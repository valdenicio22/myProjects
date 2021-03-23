//const API_URL = 'https://api.github.com/users/valdenicio22/repos'
const userRepos = async () => {
    const response = await fetch('https://api.github.com/users/valdenicio22/repos')
    const repos = await response.json();

    console.log(typeof repos)
}
userRepos();

//
// Estrutura de Dados




