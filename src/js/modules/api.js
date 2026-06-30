const BASE_URL = 'https://api.github.com';

/**
 * Busca dados de um usuário do GitHub
 * @param {string} userName - Nome do usuário
 * @returns {Promise<object>} Dados do usuário
 * @throws {Error} Se o usuário não for encontrado
 */
export async function fetchGitHubUser(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}`);
  
  if (!response.ok) {
    throw new Error('Usuário não encontrado');
  }
  
  return response.json();
}

export async function fetchGitHubUserRepos(userName) {
  const response = await fetch(`${BASE_URL}/users/${userName}/repos?page=1&per_page=10&sort=created`);
  
  if (!response.ok) {
    throw new Error('Repositórios não encontrados');
  }
  
  return response.json();
}