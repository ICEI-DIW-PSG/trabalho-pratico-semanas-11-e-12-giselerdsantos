const dados = [
  {
    id: 1,
    titulo: "A verdade enterrada sob o Olimpo",
    descricao: "Sob os mármores dourados do Olimpo, há segredos que sustentam o poder — e silêncios que o protegem.",
    conteudo: `
      <p>O Olimpo brilha. Mármore, ouro, trovões e glória. Mas sob seus pilares, há histórias que não foram contadas — e vozes que nunca foram ouvidas.</p>
      <p>Cada estátua esconde um silêncio. Cada mito, uma versão oficial. E cada deus, um papel cuidadosamente esculpido para manter a ordem.</p>
      <p>Este artigo não busca destruir o Olimpo — apenas escavar. Porque às vezes, o que sustenta o poder não é a verdade... mas o medo de revelá-la.</p>
    `,
    autor: "Persefone Dimitriou",
    data: "01-01-2025",
    imagem: "assets/images/olimposoterrado.png",
    destaque: true,
    categoria: "Investigação",
    local: "Olimpo",
  },
  {
    id: 2,
    titulo: "O trono que silencia",
    descricao: "Zeus governa com autoridade incontestável. Mas será que o silêncio dos outros deuses é reverência... ou receio?",
    conteudo: `
      <p>No Olimpo, há um trono que ninguém ousa contestar. Zeus, senhor dos céus e do raio, reina com autoridade absoluta — não apenas pela força de seus trovões, mas pela ordem que impõe ao cosmos.</p>
      <p>Mas o que acontece quando o poder é tão grande que ninguém se atreve a questioná-lo?</p>
      <p>Este artigo não busca acusar, mas refletir. Porque entender Zeus é entender o que acontece quando o poder se torna incontestável — e o silêncio, uma linguagem política.</p>
    `,
    autor: "Persefone Dimitriou",
    data: "07-02-2025",
    imagem: "assets/images/zeus.png",
    destaque: true,
    categoria: "Política",
    local: "Monte Olimpo",

  },
  {
    id: 3,
    titulo: "Agon: O Campeonato dos Deuses",
    descricao: "No Agon, os escolhidos sangram enquanto os deuses assistem. Mas será que a glória é deles... ou de quem os controla?",
    conteudo: `
      <p>No Olimpo, a glória não é concedida — é disputada. O Agon, campeonato sagrado dos deuses, não é apenas um torneio: é um ritual de poder, onde os escolhidos sangram para entreter quem já reina.</p>
      <p>Quem define os campeões? Quem escreve as regras? E quem lucra com o espetáculo?</p>
      <p>O Agon revela mais do que habilidade: revela o sistema. Porque quando os deuses competem, não é apenas por glória — é por controle da memória, da história e do mito.</p>
    `,
    autor: "Persefone Dimitriou",
    data: "22-03-2025",
    imagem: "assets/images/agoncampeonato.png",
    destaque: false,
    categoria: "Cultura",
    local: "Templo de Atena",
  },
  {
    id: 4,
    titulo: "Olhos que desafiam o poder",
    descricao: "Medusa não era um monstro — ela foi transformada em um.",
    conteudo: `
      <p>Antes de virar símbolo de terror, Medusa era uma mulher com beleza e força. Violada por Poseidon e punida por Atena, sua história revela o medo que o poder tem da mulher que não se curva.</p>
      <p>Seu olhar petrifica não por maldição, mas por resistência.</p>
    `,
    autor: "Persefone Dimitriou",
    data: "15-04-2025",
    imagem: "assets/images/medusa.png",
    destaque: false,
    categoria: "História",
    local: "Templo de Atena",
    impacto: "Alto",
    envolvidos: "Medusa, Poseidon, Atena",
  }
];

const slides = [
  {
    id: 1, 
    titulo: "Afrodite nas ondas",
    descricao: "Beleza e desejo emergem do mar.",
    imagem: "assets/images/bannerafrodite.png"
  },
  {
    id: 2,
    titulo: "Atena em batalha",
    descricao: "Sabedoria e estratégia em meio ao caos.",
    imagem: "assets/images/banneratenas.png"
  },
  {
    id: 3,
    titulo: "Hermes entre mundos",
    descricao: "Entre o céu e a sombra, Hermes caminha leve — mensageiro de verdades que ninguém quer ouvir.",
    imagem: "assets/images/bannerhermes.png"
  },
  {
    id: 4,
    titulo: "Hades e Perséfone",
    descricao: "Entre sombras e flores, Hades e Perséfone selam o equilíbrio dos mundos.",
    imagem: "assets/images/bannerhadesepersefone.png"
  },
  {
    id: 5, 
    titulo: "Nova Atenas na primavera",
    descricao: "Flores, mármore e sabedoria sob o céu dourado.",
    imagem: "assets/images/bannernovaatenasprimavera.png"
  }
];

const banners = [
  {
    id: "b1",
    titulo: "Afrodite nas ondas",
    descricao: "Beleza e desejo emergem do mar.",
    conteudo: `<p>Afrodite nasceu da espuma do mar, mas sua presença vai além da beleza. Ela é desejo, poder e transformação. Este banner celebra sua força fluida e encantadora.</p>`,
    imagem: "assets/images/bannerafrodite.png",
    autor: "Persefone Dimitriou",
    data: "01-05-2025"
  },
  {
    id: "b2",
    titulo: "Atena em batalha",
    descricao: "Sabedoria e estratégia em meio ao caos.",
    conteudo: `<p>Atena não luta por glória, mas por justiça. Em meio ao caos, ela ergue a razão como escudo. Este banner revela sua mente afiada e coragem silenciosa.</p>`,
    imagem: "assets/images/banneratenas.png",
    autor: "Persefone Dimitriou",
    data: "03-05-2025"
  },
  {
    id: "b3",
    titulo: "Hermes entre mundos",
    descricao: "Entre o céu e a sombra, Hermes caminha leve — mensageiro de verdades que ninguém quer ouvir.",
    conteudo: `<p>Hermes cruza fronteiras invisíveis, levando mensagens que mudam destinos. Este banner é um tributo ao deus que conecta mundos com leveza e astúcia.</p>`,
    imagem: "assets/images/bannerhermes.png",
    autor: "Persefone Dimitriou",
    data: "05-05-2025"
  },
  {
    id: "b4",
    titulo: "Hades e Perséfone",
    descricao: "Entre sombras e flores, Hades e Perséfone selam o equilíbrio dos mundos.",
    conteudo: `<p>Nem tudo que é escuro é ausência de vida. Hades e Perséfone mostram que até no submundo há amor, ciclos e renascimento. Este banner celebra o contraste que sustenta o mundo.</p>`,
    imagem: "assets/images/bannerhadesepersefone.png",
    autor: "Persefone Dimitriou",
    data: "07-05-2025"
  },
  {
    id: "b5",
    titulo: "Nova Atenas na primavera",
    descricao: "Flores, mármore e sabedoria sob o céu dourado.",
    conteudo: `<p>Na primavera, Atenas se cobre de flores e memória. Este banner é um convite à contemplação: entre o passado e o presente, a sabedoria floresce.</p>`,
    imagem: "assets/images/bannernovaatenasprimavera.png",
    autor: "Persefone Dimitriou",
    data: "09-05-2025"
  }
];
document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.getElementById("carousel-content");

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

function buscar(event) {
  event.preventDefault(); 

  const termo = document.getElementById("campo-pesquisa").value.toLowerCase();
  const container = document.getElementById("container-cards");

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
}
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container-cards");

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