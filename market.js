console.log('Перевірка підключеного файлу скриптів market.js')
let itemsDiv = document.getElementById("items");
console.log(itemsDiv);
if (itemsDiv) {
    console.log(itemsDiv)
    for(let i=0<100; i++) {
        itemsDiv.innerHTML+='<div class="item"></div>'
    }
    } else {
    console.log('Блок товарів не знайдено')
}