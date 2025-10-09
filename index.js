const blindboxs = [
  {
    name: "Light Balloon",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Little-Balloon-Figure.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1750192757",
  },
  {
    name: "Little King",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Little-King-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192788",
  },
  {
    name: "Wake up! Sleepyhead!",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Wake-Up-Sleepyhead-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192688",
  },
  {
    name: "Bad Temper",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Bad-Temper-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192773",
  },
  {
    name: "Lose a Tooth",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Lose-a-Tooth-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192763",
  },
  {
    name: "The Magical Chef",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-The-Magical-Chef-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192716",
  },
  {
    name: "Blowing Bubblegum",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Blowing-Bubblegum-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192747",
  },
  {
    name: "Haircut",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Haircut-Figure.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1750192769",
  },
  {
    name: "Teeter-totter",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Teeter-totter-Figure.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1750192790",
  },
  {
    name: "Banana Split",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Banana-Split-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192710",
  },
  {
    name: "Baby Ice Pop",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Baby-Ice-Pop-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192758",
  },
  {
    name: "Globetrotting",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-Be-a-Little-Star-Series-Globetrotting-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192786",
  },
  {
    name: "Make a Wish",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_800277____2_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg?x-oss-process=image/format,webp",
  },
  {
    name: "Star Apple",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-The-Gifts-From-Stars-Series-Star-Apple-Figure.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1750192704",
  },
  {
    name: "Star Jar",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-The-Gifts-From-Stars-Series-Star-Jar-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192748",
  },
  {
    name: "Happy Trumpeter",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-The-Gifts-From-Stars-Series-Happy-Trumpeter-Figure.jpg?fit=fill&bg=FFFFFF&w=480&h=320&q=60&dpr=1&trim=color&updated_at=1750192754",
  },
  {
    name: "Lovely Puppy",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-The-Gifts-From-Stars-Series-Lovely-Puppy-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192727",
  },
  {
    name: "A Big Hug",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://images.stockx.com/images/Pop-Mart-Twinkle-Twinkle-The-Gifts-From-Stars-Series-A-Big-Hug-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1750192761",
  },
  {
    name: "Fortune Cookies",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_276958____3_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg?x-oss-process=image/format,webp",
  },
  {
    name: "Snowman Friend",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_815164____6_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg?x-oss-process=image/format,webp",
  },
];

function inject(item) {

  const container = document.querySelector(".container");
  container.insertAdjacentHTML("afterbegin", `<h1>${product.name}</h1>`);
}
products.forEach((product) => inject(product))
