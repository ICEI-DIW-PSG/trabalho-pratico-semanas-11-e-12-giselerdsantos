document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-content");

  fetch("http://localhost:3001/banners")
    .then(res => res.json())
    .then(banners => {
      banners.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = `carousel-item ${index === 0 ? "active" : ""}`;
        div.innerHTML = `
          <a href="detalhes.html?id=${item.id}">
            <img src="${item.imagem}" class="d-block w-100" alt="${item.titulo}">
          </a>
          <div class="carousel-caption d-none d-md-block">
            <h5>${item.titulo}</h5>
            <p>${item.descricao}</p>
          </div>
        `;
        carouselContainer.appendChild(div);
      });
    });
});
function buscar(event) {
  event.preventDefault();

  const termo = document.getElementById("campo-pesquisa").value.toLowerCase();
  const container = document.getElementById("container-cards");

  fetch("http://localhost:3001/artigos/${parseInt(id)}`;")
    .then(res => res.json())
    .then(dados => {
      const resultados = dados.filter(item =>
        item.titulo.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
      );

      container.innerHTML = "";

      if (resultados.length === 0) {
        container.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        return;
      }

      resultados.forEach(item => {
        const card = document.createElement("div");
        card.className = "bloco";
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.titulo}">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn">LEIA MAIS</a>
        `;
        container.appendChild(card);
      });
    });
}
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container-cards");

  fetch("http://localhost:3001/artigos")
    .then(res => res.json())
    .then(dados => {
      dados.forEach(item => {
        const card = document.createElement("div");
        card.className = "bloco";
        card.innerHTML = `
          <img src="${item.imagem}" alt="${item.titulo}">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
          <a href="detalhes.html?id=${item.id}" class="btn">LEIA MAIS</a>
        `;
        container.appendChild(card);
      });
    });
});
fetch("http://localhost:3001/usuarios", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    nome: nome,
    email: email,
    senha: senha
  })
})