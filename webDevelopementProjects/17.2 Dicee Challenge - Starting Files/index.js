// Gere números aleatórios de 1 a 6 para ambos os jogadores
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

// Construa os caminhos das imagens com base nos números gerados
let imagePath1 = `images/dice${randomNumber1}.png`;
let imagePath2 = `images/dice${randomNumber2}.png`;

// Selecione os elementos img1 e img2 e atualize seus atributos src
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.src = imagePath1;
img2.src = imagePath2;

// selecione o elemento h1 e atualize o texto

let text = document.querySelector("h1");
// Compare o maior numero randomico gerado e defina o vencedor

if (randomNumber1 > randomNumber2) {
  text.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  text.textContent = "Player 2 Wins!";
} else {
  text.textContent = "Draws!";
}
