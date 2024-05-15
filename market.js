let itemsArray = [
{
    firsName:"Віталій",
    lastName:"Шатківський",
    age: 43,
    subject:"CS",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
},
];

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>товар №${index+1} з ${itemsArray.length}</h2>
            <p>${item.firsName} ${item.lastName}</p>
            <p>Предмет:${item.subject}</p>
            <p><img src=${item.photo}" class= "item-image"></p>
            <p><a href="${item.url}" target="_blank" class="bonus price">Профіль</a></p>
            <p><a href="mailto:${item.email}?subject=Питання&body=Доброго дня"target="_blank"
            class="price">Написати</a></p>
        </div>
        `;
    });
} else {
    console.log('Блок товарів не знайдено');
}
