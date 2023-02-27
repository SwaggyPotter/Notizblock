let menuItem1 = document.getElementById('item1')

let menuItem5 = document.getElementById('item5')

let menuSwitchCounter = 0;

let expandMenu = document.getElementById('exspandItems')

menuItem1.addEventListener('click', () => {
    clearClass();
    addNormalClass()
    menuItem1.classList.remove('sideMenuItem')
    menuItem1.classList.add('sideMenuItem-active')
})

menuItem5.addEventListener('click', () => {
    clearClass();
    addNormalClass()
    menuItem5.classList.remove('sideMenuItem')
    menuItem5.classList.add('sideMenuItem-active')
})

function clearClass() {
    menuItem1.classList.remove('sideMenuItem-active')
    menuItem5.classList.remove('sideMenuItem-active')
}

function addNormalClass() {
    menuItem1.classList.add('sideMenuItem')
    menuItem5.classList.add('sideMenuItem')
}


expandMenu.addEventListener('click', () => {
    if (menuSwitchCounter == 0) {
        menuItem1.style.minWidth = '0';
        menuItem5.style.minWidth = '0';
        switchToIcons();
        menuSwitchCounter++
    }
    else if (menuSwitchCounter == 1){
        menuItem1.style.minWidth = '150px';
        menuItem5.style.minWidth = '150px';
        switchToText();
        menuSwitchCounter--
    }
})


function switchToIcons(){
    menuItem1.innerHTML = `
    <span class="material-symbols-outlined">
         note_add
    </span>`
    menuItem5.innerHTML = `
    <span class="material-symbols-outlined">
        delete
    </span> `
}

function switchToText(){
    menuItem1.innerHTML = `Notizen`
    menuItem5.innerHTML = `Papierkorb`
}