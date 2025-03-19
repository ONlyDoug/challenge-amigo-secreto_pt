// Declaração do array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validação do campo de entrada
  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  // Adiciona o nome ao array e limpa o campo de entrada
  amigos.push(nome);
  input.value = "";

  // Atualiza a lista de amigos na interface
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista existente

  // Percorre o array e cria elementos <li> para cada amigo
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpa o resultado anterior

  // Verifica se há amigos disponíveis para sortear
  if (amigos.length === 0) {
    alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
    return;
  }

  // Gera um índice aleatório e seleciona o amigo correspondente
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Exibe o amigo sorteado na interface
  const li = document.createElement("li");
  li.textContent = `Amigo sorteado: ${amigoSorteado}`;
  resultado.appendChild(li);
}
