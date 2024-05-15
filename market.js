let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
];

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        let itemNumber = (index + 1).toString().padStart(2, ''); 
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>товар №${itemNumber} з 4</h2>
            <p>${item}</p>
        </div>
        `;
    });
} else {
    console.log('Блок товарів не знайдено');
}
