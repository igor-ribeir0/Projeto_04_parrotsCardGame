let quantidadeCartas;
let primeiraCarta = '';
let segundaCarta = '';

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

function conferirCartas(){
    const teste1 = primeiraCarta.classList.value;
    const teste2 = segundaCarta.classList.value;

    if(teste1 === teste2){
        primeiraCarta = '';
        segundaCarta = '';
    }
    else{
        setTimeout(() => {
            primeiraCarta.classList.remove('virarCarta');
            segundaCarta.classList.remove('virarCarta');

            primeiraCarta = '';
            segundaCarta = '';
        }, 1000);
    }
}

function CartaVirar(escolhido){
    if(escolhido.classList.contains('virarCarta')){
        return;
    }

    if(primeiraCarta === ''){
        escolhido.classList.add('virarCarta');
        primeiraCarta = escolhido;
    }
    else if(segundaCarta === ''){
        escolhido.classList.add('virarCarta');
        segundaCarta = escolhido;

        conferirCartas();
    }
}

function contadorCartas(){
    let contador = 0;
    let quantidade = 0;
    const item = document.querySelector('.containerCaixa');

    while(quantidade < quantidadeCartas){
        const elemento = ` <div onclick="CartaVirar(this)" class="${cartas[contador]} caixaCarta">
            <div class=" carta front"><img src="../gifs/${cartas[contador]}.gif"/></div>
            <div class=" carta back"></div>
        </div>`;

        item.innerHTML += elemento;
        quantidade++;
        if(quantidade % 2 !== 0){
            contador = contador;
        }
        else{
            contador++;
        }
    }
}
contadorCartas();