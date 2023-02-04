const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu__lateral')

const link = document.querySelector('.menu__lateral-link')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral--ativo')
})