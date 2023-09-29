// Meu nome de usuário do GitHub
const username = 'joaovic-tech';

// Endpoint da API do GitHub para obter informações de usuário
const apiUrl = `https://api.github.com/users/${username}`;

// Seleciona os elementos HTML
const nameElement = document.getElementById('name');
const usernameElement = document.getElementById('username');
const bioElement = document.getElementById('bio');
const profileImageElement = document.getElementById('profile-image');

// Faz a solicitação para a API do GitHub
fetch(apiUrl)
  .then(response => response.json())
  .then(({ name, login, bio, avatar_url }) => {
    // Extrai as informações necessárias

    // Atualiza os elementos HTML com as informações
    nameElement ? nameElement.textContent = name : null;
    usernameElement ? usernameElement.textContent = `{${login}}` : null;
    bioElement ? bioElement.textContent = bio : null;
    profileImageElement ? profileImageElement.src = avatar_url : null;
    profileImageElement ? profileImageElement.alt = `Foto de Perfil de ${name}` : null;
  })
  .catch(error => {
    console.error('Erro ao obter informações do GitHub:', error);
  });
