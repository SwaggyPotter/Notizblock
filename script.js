let noteInput = document.getElementById('noteInput');
let titelInput = document.getElementById('titleInput');

let main = document.getElementById('main')
let saveButton = document.getElementById('saveButton');
let trashButton = document.getElementById('item5');
let noteButton = document.getElementById('item1');
let notes = document.getElementById('notes');
let trashDrawn = document.getElementById('trash');

let notizen = [];
let titel = [];
let trash = [];
let trashTitle = [];


// save button
saveButton.addEventListener('click', () => {
    let eingabe = noteInput.value;
    let titelEingabe = titelInput.value;
    if (eingabe.length > 0 || titelEingabe.length > 0) {
        eingabe = noteInput.value;
        titelEingabe = titelInput.value;
        titel.push(titelEingabe)
        notizen.push(eingabe);
        titelInput.value = ``;
        noteInput.value = ``;
        drawNotes();
        parseDataToLocal()
    }
    else {
        console.log('Ne du. Musst schon was reinschreiben')
    }
})


titelInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        let eingabe = noteInput.value;
        let titelEingabe = titelInput.value;
        if (eingabe.length > 0 || titelEingabe.length > 0) {
            eingabe = noteInput.value;
            titelEingabe = titelInput.value;
            titel.push(titelEingabe)
            notizen.push(eingabe);
            titelInput.value = ``;
            noteInput.value = ``;
            drawNotes();
            parseDataToLocal()
        }
        else {
            console.log('Ne du. Musst schon was reinschreiben')
        }
    }
})


noteInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        let eingabe = noteInput.value;
        let titelEingabe = titelInput.value;
        if (eingabe.length > 0 || titelEingabe.length > 0) {
            eingabe = noteInput.value;
            titelEingabe = titelInput.value;
            titel.push(titelEingabe)
            notizen.push(eingabe);
            titelInput.value = ``;
            noteInput.value = ``;
            drawNotes();
            parseDataToLocal()
        }
        else {
            console.log('Ne du. Musst schon was reinschreiben')
        }
    }
})

// show and hide trash and notes
trashButton.addEventListener('click', () => {
    document.getElementById('noteWriteAndNotes').style.display = 'none';
    document.getElementById('trash').style.display = 'flex';
})


noteButton.addEventListener('click', () => {
    document.getElementById('trash').style.display = 'none';
    document.getElementById('noteWriteAndNotes').style.display = 'flex';
})

// draw the notes
function drawNotes() {
    clear();
    for (i = 0; i < notizen.length; i++) {
        notes.innerHTML += `
        <div class="noteLook" id="note${i}">
            <h3 class="titelStyle">
                ${titel[i]}
                <span><hr></span>
            </h3>
           <p>
                ${notizen[i]}
           </p>
            <button onclick="Delete(${[i]})">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>`
    }
}

// draw the trash
function TrashNotes() {
    clearTrash();
    for (i = 0; i < trash.length; i++) {
        trashDrawn.innerHTML += `
        <div class="noteLook" id="noteTrash${i}">
            <h3 class="titelStyle">
                ${trashTitle[i]}
                <span><hr></span>
            </h3>
           <p>
                ${trash[i]}
           </p>
            <button onclick="DeleteTrash(${i})">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>`
    }
}


function clearTrash() {
    trashDrawn.innerHTML = ``;
}


function clear() {
    notes.innerHTML = ``;
}


// bring the notes to the trash
function Delete(e) {
    document.getElementById(`note${e}`).remove(`note${e}`);
    let saveSpace = notizen[e];
    let saveSpaceTitle = titel[e];
    trash.push(saveSpace);
    trashTitle.push(saveSpaceTitle)
    notizen.splice(e, 1)
    titel.splice(e, 1)
    drawNotes()
    TrashNotes()
    parseDataToLocalTrash()
    parseDataToLocal()
}

// delete the notes in the trash for ever
function DeleteTrash(e) {
    document.getElementById(`noteTrash${e}`).remove(`noteTrash${e}`);
    trash.splice(e, 1);
    trashTitle.splice(e, 1);
    parseDataToLocalTrash()
    TrashNotes()
}


function checkUpForAll() {
    checkForNotes();
    checkForTitle();
    checkForTrashTitle();
    checkForTrash();
}


function parseDataToLocal() {
    localStorage.setItem('notizen', JSON.stringify(notizen));
    localStorage.setItem('titel', JSON.stringify(titel))
}


function parseDataToLocalTrash() {
    localStorage.setItem('trash', JSON.stringify(trash))
    localStorage.setItem('trashTitle', JSON.stringify(trashTitle))
}


function loadData() {
    checkUpForAll();
    drawNotes();
    TrashNotes();
}


loadData();





////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////// Check up functions //////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
function checkForNotes() {
    let checkForNotes = localStorage.getItem('notizen');
    if (checkForNotes) {
        notizen = JSON.parse(localStorage.getItem('notizen'));
    }
    else {
        console.log('Keine Notizen vorhanden')
    }
}


function checkForTitle() {
    let checkForTitle = localStorage.getItem('titel');
    if (checkForTitle) {
        titel = JSON.parse(localStorage.getItem('titel'));
    }
    else {
        console.log('Keine Titel vorhanden')
    }
}


function checkForTrashTitle() {
    let checkForTrashTitle = localStorage.getItem('trashTitle');
    if (checkForTrashTitle) {
        trashTitle = JSON.parse(localStorage.getItem('trashTitle'));
    }
    else {
        console.log('Keine Trash Titel vorhanden')
    }
}


function checkForTrash() {
    let checkForTrash = localStorage.getItem('trash');
    if (checkForTrash) {
        trash = JSON.parse(localStorage.getItem('trash'));
    }
    else {
        console.log('Keine Trash vorhanden')
    }
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////// Check up functions //////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////