let quantidadeCartas;
let primeiraCarta = '';
let segundaCarta = '';
let click = 0;

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

function fim(){
    const item = document.querySelector('.containerCaixa');
    const desabilitar = document.querySelectorAll('.desabilitarCarta');

    if(desabilitar.length == quantidadeCartas){
        setTimeout(() => {
            alert(`Parabéns! Você ganhou em ${click} jogadas`);
        }, 1000)
    }
}

function conferirCartas(){
    const teste1 = primeiraCarta.classList.value;
    const teste2 = segundaCarta.classList.value;

    if(teste1 === teste2){
        primeiraCarta.classList.add('desabilitarCarta');
        segundaCarta.classList.add('desabilitarCarta');

        primeiraCarta = '';
        segundaCarta = '';

        fim();
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
        click++;
    }
    else if(segundaCarta === ''){
        escolhido.classList.add('virarCarta');
        segundaCarta = escolhido;
        click++;

        conferirCartas();
    }
}

function contadorCartas(){
    let contador = 0;
    const novaLista = [];
    const item = document.querySelector('.containerCaixa');

    while(contador < quantidadeCartas){
        for(let i = 0; i < quantidadeCartas/2; i++){
            novaLista.push(cartas[i]);
            novaLista.push(cartas[i]);
        }
        novaLista.sort(comparador);

        for(let i = 0; i < novaLista.length; i++){
            const elemento = ` <div onclick="CartaVirar(this)" class="${novaLista[contador]} caixaCarta">
            <div class=" carta front"><img src="../gifs/${novaLista[contador]}.gif"/></div>
            <div class=" carta back"></div>
            </div>`;

            item.innerHTML += elemento;
            contador++;
        }
        
    }

}
contadorCartas();