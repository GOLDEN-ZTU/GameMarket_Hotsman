let itemsArray = [
{
    firsName:"Віталій",
    lastName:"Шатківський",
    Surname:"Миколайович",
    age: 43,
    subject:"CS",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
},
{
    firsName:"Анжела",
    lastName:"Лознюк",
    Surname:"Леонідівна",
    age: 43,
    subject:"Українська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
},
{
    firsName:"Наталія",
    lastName:"Зинюк",
    Surname:"Миколаївна",
    age: 43,
    subject:"Хімія та білогія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
},
{
    firsName:"Наталія",
    lastName:"Венцель",
    Surname:"Василівна",
    age: 43,
    subject:"Директор",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
},
{
    firsName:"Ірина",
    lastName:"Боровська-Карандюк",
    Surname:"Анатоліївна",
    age: 43,
    subject:"Українська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
},
{
    firsName:"Василь",
    lastName:"Бабій",
    Surname:"Дмитрович",
    age: 43,
    subject:"Фізична культура",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
},
{
    firsName:"Марія",
    lastName:"Медведєва",
    Surname:"Василівна",
    age: 43,
    subject:"Географія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
},
{
    firsName:"Вікторія",
    lastName:"Нелипович",
    Surname:"Віталіївна",
    age: 43,
    subject:"Математика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
},
{
    firsName:"Наталія",
    lastName:"Гончарук",
    Surname:"Олександрівна",
    age: 43,
    subject:"Англійська мова",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
},
{
    firsName:"Марія",
    lastName:"Гетманська",
    Surname:"Олександрівна",
    age: 43,
    subject:"Психолог",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
},
{
    firsName:"Наталія",
    lastName:"Кучер",
    Surname:"Вікторівна",
    age: 43,
    subject:"Фізика",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
},
{
    firsName:"Олена",
    lastName:"Геча",
    Surname:"Анатоіївна",
    age: 43,
    subject:"Історія",
    photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
    url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
},
];

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class="item">
            <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
            <p>${item.lastName} ${item.firsName}</p>
            <p>${item.Surname} </p>
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
