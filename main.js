'use strict'

const desligar = document.getElementById('desligar')
const semaforo = document.getElementById('semaforo')
const verde = document.getElementById('verde')
const amarelo = document.getElementById('amarelo')
const vermelho = document.getElementById('vermelho')
const automatico = document.getElementById('automatico')
let idPiscar = null;

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

const estaVerde = () => {
    return semaforo.src.includes('verde')
}

const estaAmarela = () => {
    return semaforo.src.includes('amarelo')
}

const estaVermelha = () => {
    return semaforo.src.includes('vermelho')
}

const lampadaDesligada = () => {
    return semaforo.src.includes('desligado')
}

const verdeAmareloVermelho = () =>{
    if(lampadaDesligada()){
        corVerde()
    } else if(estaVerde()){
        corAmarela()
    } else if(estaAmarela()){
        corVermelha()
    } else if(estaVermelha()){
        corVerde()
    }
}

// O Semaforo está automático
const automatizar = () => {
    if (idPiscar == null) {
        setInterval(verdeAmareloVermelho, 1000)
        automatico.textContent = 'Parar'
    } else {
        clearInterval(idPiscar)
        automatico.textContent = 'Automático'
        idPiscar == null
    }
}
// Adicionando o evento de mudar imagem com o 'click'
// Cor Verde
verde.addEventListener('click', () => {
    clearInterval(idPiscar)
    corVerde()
})
// Cor Amarela
amarelo.addEventListener('click', () => {
    clearInterval(idPiscar)
    corAmarela()
})

// Cor Vermelha
vermelho.addEventListener('click', () => {
    clearInterval(idPiscar)
    corVermelha()
})

// Automatizar
automatico.addEventListener('click', () => {
    clearInterval(idPiscar)
    automatizar()
})

