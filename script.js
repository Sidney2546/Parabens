const textoHistoria = `
Tudo começou de uma forma simples, talvez até inesperada.
No começo parecia apenas mais uma conversa,
mais um momento comum da vida.

Mas aos poucos eu fui percebendo algo diferente.

Cada conversa com você era especial,
cada momento compartilhado ficava guardado na minha memória.

Você tem uma forma única de transformar momentos simples
em lembranças que eu nunca vou esquecer.

Com o passar do tempo eu fui percebendo que você
já não era apenas alguém especial.

Você estava se tornando uma das pessoas
mais importantes da minha vida.

Foi aí que eu percebi algo que não dava mais para negar.

Eu estava me apaixonando por você.

Seu sorriso se tornou uma das coisas mais bonitas
que eu já vi.

Sua presença transforma qualquer dia comum
em algo muito melhor.

Você me faz rir,
me faz sentir bem
e me faz querer ser uma pessoa melhor.

E cada momento ao seu lado é um presente
que eu guardo com muito carinho.

Eu quero que você saiba que o que eu sinto por você
é verdadeiro.

É um sentimento sincero,
profundo
e cheio de carinho.

Eu amo seu jeito,
amo seu sorriso,
amo a forma como você ilumina qualquer lugar.

Eu amo cada detalhe seu.

E sou muito grato por ter você na minha vida.

Se depender de mim,
essa história ainda vai ter muitos capítulos lindos.

Porque eu quero continuar vivendo momentos incríveis com você.

Criar memórias,
realizar sonhos
e construir algo cada vez mais especial.

E acima de tudo...

Eu quero que você sempre lembre de uma coisa:

Eu te amo muito ❤️
`;

setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("carta").style.display = "block";
  document.getElementById("musica").play();
}, 7000);

/* BOTÃO NÃO FUGINDO */

const nao = document.getElementById("nao");

nao.addEventListener("mouseover", () => {
  nao.style.position = "absolute";
  nao.style.left = Math.random() * 80 + "%";
  nao.style.top = Math.random() * 80 + "%";
});

/* CLICOU SIM */

function sim() {
  document.getElementById("carta").style.display = "none";
  document.getElementById("historia").style.display = "block";

  escreverTexto();
}

/* TEXTO DIGITANDO */

function escreverTexto() {
  let i = 0;
  const el = document.getElementById("textoHistoria");

  const intervalo = setInterval(() => {
    el.innerHTML += textoHistoria.charAt(i);

    i++;

    if (i >= textoHistoria.length) clearInterval(intervalo);
  }, 30);
}

/* CORAÇÕES */

function coracao() {
  const c = document.createElement("div");
  c.className = "coracao";
  c.innerHTML = "💖";
  c.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(c);

  setTimeout(() => c.remove(), 6000);
}

setInterval(coracao, 600);

/* PETALAS */

function petala() {
  const p = document.createElement("div");

  p.className = "petala";
  p.innerHTML = "🌹";
  p.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(p);

  setTimeout(() => p.remove(), 8000);
}

setInterval(petala, 900);

/* CONTADOR */

const inicio = new Date("2026-03-07");

function atualizarContador() {
  const agora = new Date();

  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("contador").innerHTML =
    `Estamos juntos há ${dias} dias, ${horas} horas e ${minutos} minutos ❤️`;
}

setInterval(atualizarContador, 1000);
