
// Definindo a função jogoAdivinhacao
function jogoAdivinhacao() {
    var numSecreto = parseInt(Math.random() * 1001);
    var num;

    while (num !== numSecreto) {
        num = prompt('Bom bora jogar? Tente adivinhar o número..\nDigite um número de 0 a 1000');

        if (num === null) {
            // Usuário clicou em "Cancelar"
            alert('Jogo cancelado.');
            break; // Sai do loop
        }

        if (num == numSecreto) {
            alert('Acertou!');
            exibirParabens();
            break; // Sai do loop
        } else if (num > numSecreto) {
            alert('Errou... O numSecreto é menor...');
        } else if (num < numSecreto) {
            alert('Errou... O numSecreto é maior...');
        }
    }
}

// Adicione um ouvinte de evento ao botão
document.getElementById('mostrarJogo').addEventListener('click', jogoAdivinhacao);






function exibirParabens() {
    // Obtém a referência para o elemento da imagem
    var imgElement = document.getElementById('acertou-img');
    var btnElement = document.getElementById('mostrarJogo');

    // Exibe a imagem
    imgElement.style.display = 'block';

    // Esconde o botão
    btnElement.style.display = 'none';

    // Aguarda alguns segundos e, em seguida, esconda a imagem
    setTimeout(function () {
        imgElement.style.display = 'none';
        btnElement.style.display = 'block';
    }, 3000); // 3000 milissegundos = 3 segundos 

    
}


