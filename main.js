// import data

// to-do list button submission event listener, => render: stores, and deletes from Local Storage

// chrome extension that appends bookmarks to a local storage array

// DEF render local storage array for bookmarks, else render 'Use our Chrome Extension to see your bookmarks'

const listOutput = document.getElementById('list-items');
const userInput = document.getElementById('user-input');
const startBtn = document.getElementById('start');
const minimizeBtn = document.getElementById('minimize');
const viewportWindow = document.getElementById('draggable');
const menuModal = document.getElementById('menu-modal');
const utilitiesUpdate = document.getElementById('utilities');
// const toDoBtn = document.getElementById();
// let toDoArray = [];
// let toDoValue = userInput.value;

// checkLocalStorage();

// function checkLocalStorage() {
//     if (localStorage.getItem('toDoListArray')) {
//         const previousToDoList = localStorage.getItem('toDoListArray');
//         renderList(listOutput, createToDo, previousToDoList);
//     } 

// }

// function renderList(location, contentFunction, x){
//     const content = contentFunction(x);
//     location.innerHTML += content;
// };

// // toDoBtn.addEventListener('click', addToList);

// function addToList() {
//     toDoArray.push(toDoValue);
//     renderList(listOutput, createToDo, toDoValue)
//     localStorage.setItem('toDoListArray', toDoArray)
// };

// function createToDo(x) {
//     let userItem = `<div><p>${x}</p></div>`
//     return userItem
// }

// function removeFromList() {

// };


let listUserInput = '';
let listUserInputArray = [];
let bookmarkArray = [];

document.addEventListener('click', (e) => {
    e.preventDefault
    if (e.target.dataset.addList) {
        listUserInput = userInput.value;
        if (listUserInput) {
            listUserInputArray.push(listUserInput)
            userInput.value = '';
            listPosition++;        
            render(listOutput, getListHTML)
            console.log(listUserInputArray)
        } else {
            console.log('here')
        }
    } else if (e.target.dataset.removeList) {
        listPosition--;
            let removedItem = listUserInputArray.indexOf(e.target.parentElement.dataset.item)
            if (removedItem > -1) {listUserInputArray.splice(removedItem, 1)}
        console.log(listUserInputArray)
        e.target.parentElement.classList.add('fade-out');
        e.target.parentElement.innerHTML = '';
    } else if (e.target.dataset.addBookmark) {

    } else if (e.target.dataset.removeBookmark) {

    } else if (e.target.dataset.mini) {
        minimizeBtn.classList.add('opposite-btn') 
        viewportWindow.style.display = 'none'
    } else if (e.target.dataset.minimize ) {
       minimizeBtn.classList.remove('opposite-btn') 
        viewportWindow.style.display = 'flex'
    } else if (e.target.dataset.close) {
        viewportWindow.style.display = 'none'
        minimizeBtn.style.display = 'none'
    } else if (e.target.dataset.start === 'closed') {
        menuModal.style.display = 'flex';
        e.target.dataset.start = 'open';
        
    } else if (e.target.dataset.start === 'open') {
        menuModal.style.display = 'none';
        e.target.dataset.start = 'closed';
    } else if (e.target.dataset.dash) {
        viewportWindow.style.display = 'flex'
        minimizeBtn.style.display = 'flex'
        minimizeBtn.classList.remove('opposite-btn') 
    }
});



// document.addEventListener('input', (e) => {
//     if (e.target.dataset.listInput) {
//         listUserInput = e.target.value
//     }
// });

let listPosition = 0;

function getListHTML() {
    let listHTML = ``;
    let userArray = structuredClone(listUserInputArray);
    userArray.reverse().forEach((input) => {
        listHTML += `<div class="each-input" data-item="${input}"><p>${input}</p><i class="fa-solid fa-circle-minus" data-remove-list="remove-list"></i></div>`;
    });
    return listHTML;
}

function render(location, contentFunction) {
    const content = contentFunction();
    location.innerHTML = content;
}

// window.location.href


function updateClock() {
    const now = new Date();
    utilitiesUpdate.innerHTML = `<p>${now.toLocaleDateString()} ${now.toLocaleTimeString()}</p>`
}

updateClock();
setInterval(updateClock, 1000);



