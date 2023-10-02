// Meu nome de usuário do GitHub
const username = 'joaovic-tech';

// Endpoint da API do GitHub para obter informações de usuário
const apiUrl = `https://api.github.com/users/${username}`;

// Seleciona os elementos HTML
const nameElement = document.getElementById('name');
const usernameElement = document.getElementById('username');
const bioElement = document.getElementById('bio');
const profileImageElement = document.querySelectorAll('.profile-image');

// Faz a solicitação para a API do GitHub
fetch(apiUrl)
  .then(response => response.json())
  .then((data) => {
    // Extrai as informações necessárias
    const { name, login, bio, avatar_url } = data;

    // Atualiza os elementos HTML com as informações caso exista.
    nameElement ? nameElement.textContent = name : null;
    usernameElement ? usernameElement.textContent = `{${login}}` : null;
    bioElement ? bioElement.textContent = bio : null;

    profileImageElement ? profileImageElement.forEach(img => {
      img.src = avatar_url;
      img.alt = `Foto de Perfil do ${name}`;
    }) : null;

  })
  .catch(error => {
    console.error('Erro ao obter informações do GitHub:', error);
  });
