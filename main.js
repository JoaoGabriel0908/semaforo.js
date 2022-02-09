'use strict'

const desligar = document.getElementById('desligar')
const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idAutomatico = null;

// Alterando o semaforo para desligado
const desligarSemaforo = () =>{
    if(verdeAmareloVermelho()) {
        semaforo.src = './imgs/desligado.png'
    }
}

// Alterando a imagem "Verde"
const corVerde = () => {
    semaforo.src = './imgs/verde.png'
}

// Alterando a imagem amarelo
const corAmarela = () =>{
    semaforo.src = './imgs/amarelo.png'
}

// Alterando a imagem vermelho
const corVermelha = () =>{
    semaforo.src = './imgs/vermelho.png'
}

const semaforoDesligado = () =>{
    return semaforo.src.includes('desligado')
}

const verdeAmareloVermelho = () =>{
    if (semaforoDesligado()){
        corVerde()
    } else if(corVerde()){
        corAmarela()
    } else if(corAmarela()){
        corVermelha()
    } else if(corVermelha()){
        corVerde()
    }
}

// O Semaforo está automático
const automatizar = () => {
    if(idAutomatico == null){
        idAutomatico == setTimeout(verdeAmareloVermelho, 200)
        automatico.textContent = 'Parar'
    } else{
        clearInterval(idAutomatico)
        automatico.textContent = 'Automatico'
        idAutomatico = null
    }
}

// Adicionando o evento de mudar imagem com o 'click'
// Cor Verde
verde.addEventListener('click', corVerde);

// Cor Amarela
amarelo.addEventListener('click', corAmarela);

// Cor Vermelha
vermelho.addEventListener('click', corVermelha);

// Automatizar
automatico.addEventListener('click', automatizar);

