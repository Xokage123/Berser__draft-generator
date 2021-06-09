const ol = document.getElementById('list');
const buttonGenerate = document.querySelector(".btn-generate");
const selectSets = document.querySelector(".sets-select");
buttonGenerate.addEventListener('click', () => {
    generate(selectSets.value);
})

function generate(numberSet) {
    if (numberSet !== "null") {
        ol.innerHTML = "";
        console.log(randomInt(8));
        if (randomInt(8) === 0) {
            outputCardsFromArrayToList(ultras[numberSet]);
            // Фойла
            outputCardsFromArrayToList(ultras[numberSet], 1, true);
            outputCardsFromArrayToList(uncommons[numberSet], 3);
            outputCardsFromArrayToList(commons[numberSet], 11);
        } else {
            outputCardsFromArrayToList(rares[numberSet]);
            // Фойла
            outputCardsFromArrayToList(rares[numberSet], 1, true);
            outputCardsFromArrayToList(uncommons[numberSet], 3);
            outputCardsFromArrayToList(commons[numberSet], 10);
            if (randomInt(8) === 0) {
                outputCardsFromArrayToList(hero[numberSet]);
            } else {
                outputCardsFromArrayToList(commons[numberSet]);
            }
        }
    } else {
        alert("Вы не выбрали сет!");
    }
}

function outputCardsFromArrayToList(array, amount = 1, foil) {
    shuffle(array)
        .slice(0, amount)
        .forEach(cardName => {
            const li = document.createElement('li');
            li.innerHTML = `${cardName} ${foil ? "(фойловая карта)" : ""}`;
            ol.appendChild(li);
        });
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}