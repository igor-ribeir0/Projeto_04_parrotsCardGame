let quantidadeCartas;

function qntdCartas(){
    do{
        quantidadeCartas = Number(prompt("Com quantas cartas deseja jogar? Escolha números pares que estão entre 4 a 14!"));
        if(quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14){
            alert("Opção inválida!");
        }

    }while(quantidadeCartas % 2 !== 0 || quantidadeCartas < 4 || quantidadeCartas > 14);
}
qntdCartas();

function comparador() { 
	return Math.random() - 0.5; 
}

const cartas = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];
cartas.sort(comparador);

function contadorCartas(){
    let contador = 0;
    const item = document.querySelector('.containerCaixa');
    const front = document.querySelector('.front');

    while(contador < quantidadeCartas){
        const elemento = ` <div class="caixaCarta">
            <div class=" carta front"><img src="../gifs/${cartas[contador]}.gif"/></div>
            <div class=" carta back"></div>
        </div>`;

        item.innerHTML += elemento;
        contador++;
    }
}
contadorCartas();