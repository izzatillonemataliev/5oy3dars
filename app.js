let maxsulot = [
  {
    imgSrc:
      "https://assets.asaxiy.uz/product/items/desktop/a3f390d88e4c41f2747bfa2f1b5f87db2022092114121356378sGrQ9oVwR7.png.webp",
    nomi: "Iphone 14",
    rangi: "gold",
    narxi: 1000,
    xotirasi: "128gb",
  },
  {
    imgSrc: "https://m.media-amazon.com/images/I/61i8Vjb17SL.jpg",
    nomi: "Iphone 13 pro",
    rangi: "blue",
    narxi: 900,
    xotirasi: "256gb",
  },
  {
    imgSrc:
      "https://assets.asaxiy.uz/product/items/desktop/a684eceee76fc522773286a895bc843620220921144501536454LlVuuGzES.png.webp",
    nomi: "Iphone 14 pro max",
    rangi: "black",
    narxi: 1000,
    xotirasi: "512gb",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3si3YT0rJpF-XHn5mPAzggrVnRNJS7QKaUuGIXowBQ&s",
    nomi: "Iphone 15",
    rangi: "gold",
    narxi: 1200,
    xotirasi: "128gb",
  },
];
let productList = document.querySelector("#productList");
let htmlProduct = "";
maxsulot.forEach(({ nomi, narxi, rangi, xotirasi, imgSrc }) => {
  let li = `<li class="item">
        <img src="${imgSrc}" alt="" width='200'  height:'200'/>
        <h1>nomi:${nomi}</h1>
        <p>xotira:${xotirasi}</p>
        <p>narxi: ${narxi}</p>
        <span style= 'background: ${rangi};' class="color"></span>
    </li>`;

  htmlProduct += li;
});

productList.innerHTML = htmlProduct;

let maxsulot2 = [
  {
    img: "https://ipmac.uz/images/detailed/12/lenovo-v15-g2-itl-82kb00mmru-seryj-103066847-1_krxg-4u.jpg",
    name: "Lenova IdeaPad",
    color: "black",
    prise: 300,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREEOLZ7rsJ-S-8ufyWfGRJB_uaQP7Xl8TSVxrzZH5hfQ&s",
    name: "Xiaomi Notebook",
    color: "black",
    prise: 450,
  },
  {
    img: "https://i5.walmartimages.com/seo/HP-Stream-14-Laptop-Intel-Celeron-N4000-4GB-SDRAM-32GB-eMMC-Office-365-1-yr-Royal-Blue_4f941fe6-0cf3-42af-a06c-7532138492fc_2.cb8e85270e731cb1ef85d431e49f0bf2.jpeg",
    name: "HP Laptop",
    color: "blue",
    prise: 500,
  },
  {
    img: "https://api.idea.uz/storage/products/May2023/N9rrgleWSrKRHSONkedT.png",
    name: "Lenova V15",
    color: "gray",
    prise: 400,
  },
];

let contentList = document.querySelector("#contentlist");
let htmlContent = "";

maxsulot2.forEach(({ name, prise, color, img }) => {
  let contentLi = ` <li class="listLink">
    <img src="${img}" alt="" width='200' height:'200'/>
    <h1>${name}</h1>
    <p>${prise}</p>
    <span style= 'background: ${color};' class="listColor"></span>
</li>`;

  htmlContent += contentLi;
});

contentList.innerHTML = htmlContent;
