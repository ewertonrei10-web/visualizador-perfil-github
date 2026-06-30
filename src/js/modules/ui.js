/**
 * Gerencia elementos do DOM e sua interação
 */

export const elements = {
  inputSearch: document.getElementById('input-search'),
  btnSearch: document.getElementById('btn-search'),
  profileResults: document.querySelector('.profile-results'),
};

/**
 * Valida se o input possui um valor válido
 * @returns {string|null} Nome do usuário ou null
 */
export function getSearchInput() {
  const userName = elements.inputSearch.value.trim();
  return userName || null;
}

/**
 * Mostra mensagem de carregamento
 */
export function showLoading() {
  elements.btnSearch.disabled = true;
  elements.inputSearch.disabled = true;
  elements.profileResults.innerHTML = `
    <div class="loading">
      <span class="spinner" aria-hidden="true"></span>
      <span class="loading-text">Carregando...</span>
    </div>
  `;
}

/**
 * Limpa a exibição de resultados
 */
export function clearResults() {
  elements.profileResults.innerHTML = '';
}

/**
 * Reabilita os inputs
 */
export function enableInputs() {
  elements.btnSearch.disabled = false;
  elements.inputSearch.disabled = false;
}

/**
 * Exibe o resultado do perfil
 * @param {string} html - HTML a exibir
 */
export function displayResult(html) {
  elements.profileResults.innerHTML = html;
}
