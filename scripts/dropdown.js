
const menu = document.getElementById('menu')
const button = document.getElementById('btnLinks')

button.addEventListener('click', () => {
    menu.classList.toggle('menuExpanded')
    document.body.classList.toggle('menuExpanded')
})

menu.addEventListener('click', () => {
    menu.classList.remove('menuExpanded')
    document.body.classList.toggle('menuExpanded')
})

