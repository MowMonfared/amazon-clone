//Main idea of JAVASCRIPT:
//1-Save the Data
//2-Generate the HTML
//3-Make it Interactive

//1-Save the Data (Defining list of products showing on the main page)
/* the following 'products' array commented out as we are going to use the compeleted version of it inside 'data' folder
  const products = [
  {
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
  },
  {
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
      stars: 4,
      count: 127,
    },
    priceCents: 2095,
  },
  {
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 799,
  },
];
*/

//2-Generate the HTML
//2a-Looping through the 'products' array to generate the HTML for each product inside 'products' array.
//2b-Combining all of this HTML together
//2c-Put generated HTML on the web page

let productsHTML = '';

//2a-Looping through the 'products' array...
products.forEach((product) => {
  //2b-Combining all of this HTML together...
  productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
            product.id
          }"
          >Add to Cart</button>
        </div>`;
});

//2c-Put generated HTML on the web page
document.querySelector('.js-products-grid').innerHTML = productsHTML;

//3-Make it Interactive
const buttons = document.querySelectorAll('.js-add-to-cart');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;

    let matchingItem;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity++;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
      });
    }

    console.log(cart);
  });
});
