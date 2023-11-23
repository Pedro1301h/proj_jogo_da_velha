let x = document.querySelector('.x')
let o = document.querySelector('.o')
let quadros = document.querySelectorAll('.quadros')
let buttons = document.querySelectorAll('#botoes button')
let mensagem = document.querySelector('#mensagem')
let txtMsg = document.querySelector('#mensagem p')
let segundoJogador

//Contador de jogadas
let player1 = 0
let player2 = 0

//Adicionando o evento de click aos quadros
for(let i = 0;i < quadros.length;i++){
    quadros[i].addEventListener('click', function(){

        let elemento = checarJogador(player1,player2)   //variável que recebe ou x ou o

        /*O objeto do clone é para que o elemento se mantenha no local inserido anteriormente e disponibilize um clone para que seja inserido nos demais campos. Caso quisesse que existisse apenas uma marcação, utilizaria apenas :
        this.appendChild(elemento)
        */

        //Verifica se já tmem x ou o
        if(this.childNodes.length == 0){        //childNodes = nó filho. Quer dizer, "se tiver elemento == 0"
            let cloneElemento = elemento.cloneNode(true)
            this.appendChild(cloneElemento)

            //computar a jogada
            if(player1 == player2){ //player1 sempre joga primeiro, porém ambos devem ter o mesmo número de jogadas
                player1++

                if(segundoJogador == 'jogaIa'){
                    player2++       //Para que seja novamente a vez do jogador 1

                    jogarIa()
                
                }

            }else{
                player2++
            }

            //checa quem ganhou
            vencedor()

        }
       
    })
}

//---------Jogar com 2 jogadores ou contra I.A

for(let i = 0;i< buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        segundoJogador = this.getAttribute('id')

        for(let c =0; c<buttons.length;c++){
            buttons[c].style.display='none'
        }

        setTimeout(function(){
            let jogo = document.querySelector('#jogo')
            jogo.classList.remove('esconder')
        },500)
        
    })
}


//vê quem vai jogar
function checarJogador(player1,player2){
    if(player1 == player2){ //x
        elemento = x       
    }else{                  //o
        elemento = o
    }
    return elemento
}


//-----------vê quem ganhou-----------------------------------------------------------


function vencedor(){
    
    let quadro1 = document.querySelector('#quadro1')
    let quadro2 = document.querySelector('#quadro2')
    let quadro3 = document.querySelector('#quadro3')
    let quadro4 = document.querySelector('#quadro4')
    let quadro5 = document.querySelector('#quadro5')
    let quadro6 = document.querySelector('#quadro6')
    let quadro7 = document.querySelector('#quadro7')
    let quadro8 = document.querySelector('#quadro8')
    let quadro9 = document.querySelector('#quadro9')

    //Verificando a horizontal:

    //1ª linha
    if(quadro1.childNodes.length > 0 && quadro2.childNodes.length > 0 && quadro3.childNodes.length > 0){
        let child1 = quadro1.childNodes[0].className
        let child2 = quadro2.childNodes[0].className
        let child3 = quadro3.childNodes[0].className

        if(child1 == 'x' && child2 == 'x' && child3 == 'x'){
            declaraVencedor('x')
        }else if(child1 == 'o' && child2 == 'o' && child3 == 'o'){
            declaraVencedor('o')        
        }
    }

    //2ª linha
    if(quadro4.childNodes.length > 0 && quadro5.childNodes.length > 0 && quadro6.childNodes.length > 0){
        let child4 = quadro4.childNodes[0].className
        let child5 = quadro5.childNodes[0].className
        let child6 = quadro6.childNodes[0].className

        if(child4 == 'x' && child5 == 'x' && child6 == 'x'){
            declaraVencedor('x')
        }else if(child4 == 'o' && child5 == 'o' && child6 == 'o'){
            declaraVencedor('o')
        }
    }

    //3ª linha
    if(quadro7.childNodes.length > 0 && quadro8.childNodes.length > 0 && quadro9.childNodes.length > 0){
        let child7 = quadro7.childNodes[0].className
        let child8 = quadro8.childNodes[0].className
        let child9 = quadro9.childNodes[0].className

        if(child7 == 'x' && child8 == 'x' && child9 == 'x'){
            declaraVencedor('x')
        }else if(child7 == 'o' && child8 == 'o' && child9 == 'o'){
            declaraVencedor('o')
        }
    }

    //verificando na vertical:

    //1ª coluna
    if(quadro1.childNodes.length > 0 && quadro4.childNodes.length > 0 && quadro7.childNodes.length > 0){
        let child1 = quadro1.childNodes[0].className
        let child4 = quadro4.childNodes[0].className
        let child7 = quadro7.childNodes[0].className

        if(child1 == 'x' && child4 == 'x' && child7 == 'x'){
            declaraVencedor('x')
        }else if(child1 == 'o' && child4 == 'o' && child7 == 'o'){
            declaraVencedor('o')
        }
    }

    //2ª coluna
    if(quadro2.childNodes.length > 0 && quadro5.childNodes.length > 0 && quadro8.childNodes.length > 0){
        let child2 = quadro2.childNodes[0].className
        let child5 = quadro5.childNodes[0].className
        let child8 = quadro8.childNodes[0].className

        if(child2 == 'x' && child5 == 'x' && child8 == 'x'){
            declaraVencedor('x')
        }else if(child2 == 'o' && child5 == 'o' && child8 == 'o'){
            declaraVencedor('o')
        }
    }

    //3ª coluna
    if(quadro3.childNodes.length > 0 && quadro6.childNodes.length > 0 && quadro9.childNodes.length > 0){
        let child3 = quadro3.childNodes[0].className
        let child6 = quadro6.childNodes[0].className
        let child9 = quadro9.childNodes[0].className

        if(child3 == 'x' && child6 == 'x' && child9 == 'x'){
            declaraVencedor('x')
        }else if(child3 == 'o' && child6 == 'o' && child9 == 'o'){
            declaraVencedor('o')
        }
    }

    //Diagonal esquerda para direita
    if(quadro1.childNodes.length > 0 && quadro5.childNodes.length > 0 && quadro9.childNodes.length > 0){
        let child1 = quadro1.childNodes[0].className
        let child5 = quadro5.childNodes[0].className
        let child9 = quadro9.childNodes[0].className

        if(child1 == 'x' && child5 == 'x' && child9 == 'x'){
            declaraVencedor('x')
        }else if(child1 == 'o' && child5 == 'o' && child9 == 'o'){
            declaraVencedor('o')
        }
    }

    //Diagonal da direita para esquerda
    if(quadro3.childNodes.length > 0 && quadro5.childNodes.length > 0 && quadro7.childNodes.length > 0){
        let child3 = quadro3.childNodes[0].className
        let child5 = quadro5.childNodes[0].className
        let child7 = quadro7.childNodes[0].className

        if(child3 == 'x' && child5 == 'x' && child7 == 'x'){
            declaraVencedor('x')
        }else if(child3 == 'o' && child5 == 'o' && child7 == 'o'){
            declaraVencedor('o')
        }
    }

    //Deu velha
    let contador = 0

    for(let i = 0;i < quadros.length;i++){
        if(quadros[i].childNodes[0] != undefined){
            contador++
        }
    }

    //Se chegar a contar 9 jogadas significa que é impossível ganhar
    if(contador == 9){
        declaraVencedor('')
    }

}


//------Limpa o jogo, declara o vencedor e atualiza o placar

function declaraVencedor(vencedor){
    let placarX = document.querySelector('#placar-1')
    let placarO = document.querySelector('#placar-2')
    let msg = ''

    if(vencedor == 'x'){
        let converteX = parseInt(placarX.textContent)
        placarX.textContent = converteX+1
        msg = 'O jogador 1 venceu!'
    }else if(vencedor == 'o'){
        placarO.textContent = parseInt(placarO.textContent)+1
        msg = 'O jogador 2 venceu!'
    }else{
        msg = 'Deu velha!'
    }

    mensagem.innerHTML=msg
    mensagem.classList.remove('esconder')


    //Voltar a esconder a mensagem

    setTimeout(function(){
        mensagem.classList.add('esconder')
    },3000)


    //----------Zerar as jogadas para que o jogo seja reiniciado

    player1 = 0
    player2 = 0

            //Remover x e o marcados:
    
    let removeQuadros = document.querySelectorAll('.quadros div')

    for(let i = 0;i < removeQuadros.length;i++){
        removeQuadros[i].parentNode.removeChild(removeQuadros[i])
    }
    
}   

//-----------Lógica que configura a jogada do I.A

function jogarIa(){
    //Clonar o elemento 'o'
    let cloneO = o.cloneNode(true)

    contador = 0
    preenchidos = 0

    for(let i =0;i<quadros.length;i++){
        let numAleatorio = Math.floor(Math.random() * 5)

        if(quadros[i].childNodes[0] == undefined){
            if(numAleatorio <= 1){                //Definindo um número maior que 1 para que não pule apenas uma casa
                quadros[i].appendChild(cloneO)
                contador++
                break       //Sair da função para que impeça a repetição e continue preenchimento automático                

            }
        }else{
            preenchidos++
        }
    }   

    if(contador == 0 && preenchidos < 9){
        jogarIa()
    }
}
