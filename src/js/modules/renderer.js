/**
 * Renderiza componentes HTML baseado nos dados do usuário
 */

/**
 * Renderiza o card do perfil
 * @param {object} userData - Dados do usuário do GitHub
 * @returns {string} HTML do perfil
 */
function renderProfileCard(userData) {
  return `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}">
      <div class="profile-info">
        <h3>${userData.name}</h3>
        <p>${userData.bio || 'Nenhuma biografia disponível 😢.'}</p>
        <p>Seguidores: ${userData.followers}</p>
        <p>Seguindo: ${userData.following}</p>
      </div>
    </div>
  `;
}

/**
 * Renderiza o contador de seguidores
 * @param {object} userData - Dados do usuário do GitHub
 * @returns {string} HTML do contador
 */
function renderProfileCounter(userData) {
  return `
    <div class="profile-counter">
      <div class="folowers">
        <h4>👥Seguidores</h4>
        <span>Seguidores: ${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥Seguindo</h4>
        <span>Seguindo: ${userData.following}</span>
      </div>
    </div>
  `;
}

/**
 * Renderiza o perfil completo
 * @param {object} userData - Dados do usuário do GitHub
 * @returns {string} HTML completo do perfil
 */
export function renderProfile(userData) {
  return renderProfileCard(userData) + renderProfileCounter(userData);
}
