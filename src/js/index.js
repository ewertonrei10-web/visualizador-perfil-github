import { fetchGitHubUser } from './modules/api.js';
import {
  elements,
  getSearchInput,
  showLoading,
  clearResults,
  enableInputs,
  displayResult,
} from './modules/ui.js';
import { renderProfile } from './modules/renderer.js';

/**
 * Executa a busca por um usuário do GitHub
 */
async function handleSearch() {
  const userName = getSearchInput();

  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  showLoading();

  try {
    const userData = await fetchGitHubUser(userName);
    const userRepos = await fetchGitHubUserRepos(userName);
    const html = renderProfile(userData, userRepos); 
    // profileResults
    displayResult(html);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    clearResults();
    alert('Ocorreu um erro ao buscar o usuário.');
  } finally {
    enableInputs();
  }
}

// Event listeners
elements.btnSearch.addEventListener('click', handleSearch);
elements.inputSearch.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

