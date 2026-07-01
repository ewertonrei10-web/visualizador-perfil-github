/**
 * Renderiza componentes HTML baseado nos dados do usuário
 */

/**
 * Renderiza o card do perfil
 * @param {object} userData - Dados do usuário do GitHub
 * @returns {string} HTML do perfil
 */
function renderProfileCard(userData, userRepos) {
    const reposList = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
        <div class="repository-card">
          <h3>${repo.name}</h3>
          <div class="repository-stats">
            <span>⭐stars: ${repo.stargazers_count}</span>
            <span>🍴forks: ${repo.forks_count}</span>
            <span>👀watchers: ${repo.watchers_count}</span>
            <span>💻language: ${repo.language || 'Nenhuma linguagem especificada'}</span>
          </div>
        </div>
      `).join('') : '<p>Nenhum repositório disponível.</p>';
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
function renderProfileCounter(userData, userRepos) {
  const reposList = userRepos && userRepos.length > 0 ? userRepos.map(repo => `
    <a href="${repo.html_url}" target="_blank">
        <div class="repository-card">
          <h3>${repo.name}</h3>
          <div class="repository-stats">
            <span>⭐stars: ${repo.stargazers_count}</span>
            <span>🍴forks: ${repo.forks_count}</span>
            <span>👀watchers: ${repo.watchers_count}</span>
            <span>💻language: ${repo.language || 'Nenhuma linguagem especificada'}</span>
          </div>
        </div>
      </a>
    `).join('') : '<p>Nenhum repositório disponível.</p>';

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
    
    <div class="profile-repositories">
      <h3>Repositórios</h3>
      <div>
        ${reposList}
      </div>
    </div>
  `;
}

/**
 * Renderiza o perfil completo
 * @param {object} userData - Dados do usuário do GitHub
 * @returns {string} HTML completo do perfil
 */
export function renderProfile(userData, userRepos) {
  return renderProfileCard(userData, userRepos) + renderProfileCounter(userData, userRepos);
}
