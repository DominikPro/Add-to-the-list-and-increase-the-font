let fontSize = 10;
let orderElement = 1;
let listLength = 10;
let listNumber = 0;

const init = () => {
    let btn = document.createElement('button')
    btn.addEventListener('click', createLiElements)
    let ul = document.createElement('ul')
    document.body.appendChild(btn)
    btn.innerHTML = "Dodaj 10 elementów listy";
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        listNumber += 1;
        fontSize++;
        let li = document.createElement('li');
        document.body.appendChild(li);
        li.innerHTML = `Element nr ${listNumber}`;
        li.style.fontSize = `${fontSize}px`;
    }
}

init()