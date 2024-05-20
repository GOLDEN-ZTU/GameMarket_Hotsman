let itemsArray = [
    {
        title:"Мотокоса 43",
        image:"img-market/1.png",
        mono:6,
        pb:8,
        prise_standart:5499,
        prise_discount:4497,
        prise_coupon:4395,
    },
    {
        title:"Електричний тример 110",
        image:"img-market/2.png",
        mono:5,
        pb:7,
        prise_standart:4497,
        prise_discount:3498,
        prise_coupon:3396,
    },
    {
        title:"Електрична газонокосарка 32",
        image:"img-market/3.png",
        mono:8,
        pb:10,
        prise_standart:4497,
        prise_discount:3297,
        prise_coupon:3195,
    },
    {
        title:"Акумуляторний обприскувач 12 N",
        image:"img-market/4.png",
        mono:8,
        pb:11,
        prise_standart:2190,
        prise_discount:1698,
        prise_coupon:1596,
    },
// {
//     firsName:"Віталій",
//     lastName:"Шатківський",
//     Surname:"Миколайович",
//     age: 43,
//     subject:"CS",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
// },
// {
//     firsName:"Анжела",
//     lastName:"Лознюк",
//     Surname:"Леонідівна",
//     age: 43,
//     subject:"Українська мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
// },
// {
//     firsName:"Наталія",
//     lastName:"Зинюк",
//     Surname:"Миколаївна",
//     age: 43,
//     subject:"Хімія та білогія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
// },
// {
//     firsName:"Наталія",
//     lastName:"Венцель",
//     Surname:"Василівна",
//     age: 43,
//     subject:"Директор",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/ventsel-n-v/",
// },
// {
//     firsName:"Ірина",
//     lastName:"Боровська-Карандюк",
//     Surname:"Анатоліївна",
//     age: 43,
//     subject:"Українська мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
// },
// {
//     firsName:"Василь",
//     lastName:"Бабій",
//     Surname:"Дмитрович",
//     age: 43,
//     subject:"Фізична культура",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
// },
// {
//     firsName:"Марія",
//     lastName:"Медведєва",
//     Surname:"Василівна",
//     age: 43,
//     subject:"Географія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
// },
// {
//     firsName:"Вікторія",
//     lastName:"Нелипович",
//     Surname:"Віталіївна",
//     age: 43,
//     subject:"Математика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
// },
// {
//     firsName:"Наталія",
//     lastName:"Гончарук",
//     Surname:"Олександрівна",
//     age: 43,
//     subject:"Англійська мова",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/honcharuk-nataliya-oleksandrivna-682x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/honcharuk-n-o/",
// },
// {
//     firsName:"Марія",
//     lastName:"Гетманська",
//     Surname:"Олександрівна",
//     age: 43,
//     subject:"Психолог",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hetmanska-mariya-oleksandrivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hetmanska-m-o/",
// },
// {
//     firsName:"Наталія",
//     lastName:"Кучер",
//     Surname:"Вікторівна",
//     age: 43,
//     subject:"Фізика",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/kucher-n-v/",
// },
// {
//     firsName:"Олена",
//     lastName:"Геча",
//     Surname:"Анатоіївна",
//     age: 43,
//     subject:"Історія",
//     photo:"https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
//     url:"https://lyceum.ztu.edu.ua/team/hecha-o-a/",
// },
];

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    itemsArray
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <!==Блок окремого товару-->
        <div class="item">
            <div class="item-title">${item.title}</div>
            <!--Блок зображення товару-->
            <div class="item-image">
                <img src="${item.image}" class="item-image"
            </div>

            <!--Блок з оплатою частинами-->
            <div class="parts-pay">
                <div><img scr="img-market/mono-lapka.png" alt="">${item.mono}</div>
                <div><img src="img-market/pd.png" alt="">${item.pd}</div>
            </div>
            <!--Блок ціни-->
            <div class="prise">
                <div><span>${item.prise_standart}</span><sup>грн</sup><div>
                <div><span>${item.prise_discount}</span><sup>грн</sup><div>
            </div>

            <!--Блок бонусної ціни -->
            <div class="prise bonus">
                <div>ціна за купоном</div>
                <div><span>${item.prise_coupon}</span><sup>грн</sup></div>
            </div>
        </div>
        `
        // `
        // <div class="item">
        //     <h2>Вчитель №${index+1} з ${itemsArray.length}</h2>
        //     <p>${item.lastName} ${item.firsName}</p>
        //     <p>${item.Surname} </p>
        //     <p>Предмет:${item.subject}</p>
        //     <p><img src=${item.photo}" class= "item-image"></p>
        //     <p><a href="${item.url}" target="_blank" class="bonus price">Профіль</a></p>
        //     <p><a href="mailto:${item.email}?subject=Питання&body=Доброго дня"target="_blank"
        //     class="price">Написати</a></p>
        // </div>
        // `;
    });
} else {
    console.log('Блок товарів не знайдено');
}
