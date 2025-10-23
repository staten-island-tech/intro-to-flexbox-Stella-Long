const blindboxes = [
  {
    name: "Light Balloon",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://prod-america-res.popmart.com/default/20250414_164355_108364____1_twinkle-twinkle-be-a-little-star-series-figures_blind-boxes_details_popmart-us_____1200x1200.jpg",
  },
  {
    name: "Little King",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://kouhightoys.com/cdn/shop/files/20250414_164355_675123____3_twinkle-twinkle-be-a-little-star-series-figures_blind-boxes_details_popmart-us_____1200x1200_6bbf8f01-7d59-4c83-8418-84e20ab6385f.jpg?v=1747509981&width=493",
  },
  {
    name: "Wake up! Sleepyhead!",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://kouhightoys.com/cdn/shop/files/20250414_164355_490447____4_twinkle-twinkle-be-a-little-star-series-figures_blind-boxes_details_popmart-us_____1200x1200_b6f2ab58-2def-44df-ad7f-2187cbb9858d.jpg?v=1747509981&width=1100",
  },
  {
    name: "Bad Temper",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/C3_83_C2_83_C3_82_C2_83_C3_83_C2_82_C3_82_C2_A6_C3_83_C2_83_C3_82_C2_82__C3_83_C2_83_C3_82_C2_82_C3_83_C2_82_C3_82_C2_AA_C3_83_C2_83_C3_82_C2_83_C3_83_C2_82_C3_82_C2_A5_C3_83_C2_83_C_2bcff8e9-8e75-45fe-97c5-ab4bfe69fbb2_1080x.jpg?=75&v=1759472231",
  },
  {
    name: "Lose a Tooth",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://kouhightoys.com/cdn/shop/files/20250414_164355_763279____5_twinkle-twinkle-be-a-little-star-series-figures_blind-boxes_details_popmart-us_____1200x1200_1812ac7f-4df0-4485-9043-bbade2deffa5.jpg?v=1747509981&width=493",
  },
  {
    name: "The Magical Chef",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://m.media-amazon.com/images/I/71SLZf3+vTL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Blowing Bubblegum",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://m.media-amazon.com/images/I/81t6-dVLKOL.jpg",
  },
  {
    name: "Haircut",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://media.karousell.com/media/photos/products/2025/5/5/bnif_twinkle_be_a_little_star__1746418706_8dcda83a_thumbnail.jpg",
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
    img: "https://media.karousell.com/media/photos/products/2025/6/30/twinkle_twinkle_banana_split__1751297212_cc6f7e0b_thumbnail.jpg",
  },
  {
    name: "Baby Ice Pop",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://cdn.shopify.com/s/files/1/0603/3031/1875/files/C3_83_C2_83_C3_82_C2_83_C3_83_C2_82_C3_82_C2_A6_C3_83_C2_83_C3_82_C2_82__C3_83_C2_83_C3_82_C2_82_C3_83_C2_82_C3_82_C2_AA_C3_83_C2_83_C3_82_C2_83_C3_83_C2_82_C3_82_C2_A5_C3_83_C2_83_C_99c98490-df09-44f4-bfad-9c50a4114de8_384x.jpg?=75&v=1759471923",
  },
  {
    name: "Globetrotting",
    price: "$19.99",
    inStock: true,
    series: "Twinkle Twinkle Be a Little Star Series Figures",
    img: "https://kouhightoys.com/cdn/shop/files/20250414_164355_432863____7_twinkle-twinkle-be-a-little-star-series-figures_blind-boxes_details_popmart-us_____1200x1200_2526e33e-dc88-42d0-aa29-743dbb876f90.jpg?v=1747509981&width=1100",
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
