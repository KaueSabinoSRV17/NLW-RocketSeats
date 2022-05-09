// para as funções  basta  ternários para que elas funcionem de forma adequada. no topo do código são declaradas consantes que armazenam os elementos DOM

// SEGREDO MÁXIMO PARA ADD EVENT - DECLARE SUA FUNÇÃO SEM PARENTESES
window.addEventListener('scroll', scroll)

const header = document.getElementById('header')

const backToTop = document.getElementById('btnTop')

function scroll() {
    changeUnderlineOnTheTopMenu(projetos)
    changeUnderlineOnTheTopMenu(home)
    changeUnderlineOnTheTopMenu(contatos)
    fixedHeader()    
    addBackToTopButton()
}

function fixedHeader() {
    scrollY >= 70 ? header.classList.add('scroll') : header.classList.remove('scroll')
}

function addBackToTopButton() {
    scrollY >= 250 ? backToTop.classList.add('showButton') : backToTop.classList.remove('showButton')
}

// funcao que alterar a linha sublinada do menu

function changeUnderlineOnTheTopMenu(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndReachedOrPassedTargetLine = sectionEndsAt <= targetLine

    const insideSectionBoundaries = sectionTopReachedOrPassedTargetLine && !sectionEndReachedOrPassedTargetLine

    const sectionID = section.getAttribute('id')

    const link = document.querySelector(`a[href*=${sectionID}]`)

    link.classList.remove('active')

    if (insideSectionBoundaries) {
        link.classList.add('active')
    }
}