var menuBar = document.querySelector('.menuMobile i')
menuBar.addEventListener('click', ()=>{
    alert('clicado')
    let menuMobile = document.querySelector('.menuMobile ul')
    if(menuMobile.classList.contains('showMenu')){
        menuMobile.classList.remove('showMenu')
    }else{
    menuMobile.classList.add('showMenu')
    }
})