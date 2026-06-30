const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

const baseURL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
  const userName = inputSearch.value.trim();
  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    return;
  }

  // Mostrar loading e desabilitar inputs
  btnSearch.disabled = true;
  inputSearch.disabled = true;
  profileResults.innerHTML = `<div class="loading"><span class="spinner" aria-hidden="true"></span><span class="loading-text">Carregando...</span></div>`;

  try {
    const response = await fetch(`${baseURL}/users/${userName}`);
    if (!response.ok) {
      profileResults.innerHTML = '';
      alert('Usuário não encontrado.');
      return;
    }

    const userData = await response.json();
    profileResults.innerHTML = `
      <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}">
        <div class="profile-info">
          <h3>${userData.name}</h3>
          <p>${userData.bio || 'Nenhuma biografia disponível 😢.'}</p>
          <p>Seguidores: ${userData.followers}</p>
          <p>Seguindo: ${userData.following}</p>
        </div>
      </div>
      <div class="profile-counter">
        <div class="folowers">
           <h4>Seguidores</h4>
          <span>Seguidores: ${userData.followers}</span>
        </div>
        <div class="following">
          <h4>Seguindo</h4>
          <span>Seguindo: ${userData.following}</span>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    alert('Ocorreu um erro ao buscar o usuário.');
  } 
});

