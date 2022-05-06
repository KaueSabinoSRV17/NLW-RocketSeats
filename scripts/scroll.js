// para as funções  basta  ternários para que elas funcionem de forma adequada. no topo do código são declaradas consantes que armazenam os elementos DOM

// SEGREDO MÁXIMO PARA ADD EVENT - DECLARE SUA FUNÇÃO SEM PARENTESES
window.addEventListener('scroll', scroll)

const header = document.getElementById('header')

const backToTop = document.getElementById('btnTop')

function scroll() {
    fixedHeader()    
    addBackToTopButton()
}

function fixedHeader() {
    scrollY >= 70 ? header.classList.add('scroll') : header.classList.remove('scroll')
}

function addBackToTopButton() {
    scrollY >= 250 ? backToTop.classList.add('showButton') : backToTop.classList.remove('showButton')
}