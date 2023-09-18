const username = "MirellaArtischeff";

// URL da API do GitHub para listar seus repositórios públicos
const apiUrl = `https://api.github.com/users/${username}/repos`;

// Faça a solicitação HTTP usando a função fetch()
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }
    return response.json(); // Converte a resposta em formato JSON
  })
  .then((data) => {
    // Array com os URLs dos repositórios específicos
    const repositoryURLs = [
      "https://github.com/MirellaArtischeff/Mulheres-da-Tecnologia",
      "https://github.com/MirellaArtischeff/Curriculo",
      "https://github.com/MirellaArtischeff/Cardapio",
      "https://github.com/MirellaArtischeff/Ods-13"
    ];

    // Percorra os repositórios retornados pela API
    data.forEach((repo) => {
      // Verifique se o URL do repositório corresponde a um dos repositórios específicos
      if (repositoryURLs.includes(repo.html_url)) {
        console.log(`Nome do repositório: ${repo.name}`);
        console.log(`Descrição: ${repo.description}`);
        console.log(`URL: ${repo.html_url}`);
        console.log(`Estrelas: ${repo.stargazers_count}`);
        console.log(`Forks: ${repo.forks_count}`);
        console.log("-----");
      }
    });
  })
  .catch((error) => {
    console.error(`Ocorreu um erro: ${error.message}`);
  });




