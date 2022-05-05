// para esta função aqui basta um ternário para que ela funcione de forma adequada

const header = document.getElementById('header')

function scroll() {
    scrollY >= 70 ? header.classList.add('scroll') : header.classList.remove('scroll')
}