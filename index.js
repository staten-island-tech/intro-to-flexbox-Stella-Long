const blindboxes = [
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
    img: "https://prod-america-res.popmart.com/default/20241205_190000_800277____2_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "Star Apple",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_605800____9_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "Star Jar",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_736177____7_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "Happy Trumpeter",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_314458____5_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "Lovely Puppy",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_522366____8_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "A Big Hug",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle The Gifts From Stars Series Figures",
    img: "https://prod-america-res.popmart.com/default/20241205_190000_455951____1_twinkle-twinkle-the-gifts-from-stars-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
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
  container.insertAdjacentHTML(
    "afterbegin",
    ` <div class="card">
        <img
          class="img"
          src="${item.img}"
          alt="Twinkle Twinkle Blindboxes"
        />
        <h2 class="product__category">${item.series}</h2>
        <h3 class="product__name">${item.name}</h3>
        <p class="product__price">${item.price}</p>
        <button class="purchase__product">Add to Cart</button>
      </div>`
  );
}
blindboxes.forEach((product) => inject(product));

/* function addToCart(){
    const buttons = document.querySelectorAll("button");
    //crete array if we need more than forEach
    const btnArray = Array.from(buttons);
    btnArray.forEach((btn) =>
        btn.addEventListener("click", function (event){
            console.log(event.target.textContent);
            console.log(event.target.closest(".display-card").getAttribute("data-title")
            );
        })
    );
}
addToCart();
 */
