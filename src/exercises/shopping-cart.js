/*
 * Shopping Cart Requirements:
 * - Before you start, please run `npm run start:api` to start mock API server
 * - data for mock APIs come from ./db/db.json
 * - There are 2 APIs you need to call:
 *     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
 *     - http://localhost:4002/products : this will provide a list of products with full details
 *
 * We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
 * product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
 * inside table#shopping-cart-tbl as below: // OK
 * ID     Item
 * 1001   TV
 * 1002   iPad
 *
 * */

import { getCarts, getProducts } from "./api";

const View = {
  init: () => {
    const tbodyElem = document
      .getElementById("shopping-cart-tbl")
      .querySelector("tbody");

    const renderCart = async () => {
      const cartList = await getCarts();
      const productList = await getProducts();

      cartList.forEach((cart) => {
        const productItem = productList.find(
          (product) => product.id === cart.id
        );

        const tableRow = document.createElement("tr");

        const tdProductId = document.createElement("td");
        tdProductId.textContent = productItem.id;
        const tdProductName = document.createElement("td");
        tdProductName.textContent = productItem.name;

        tableRow.appendChild(tdProductId);
        tableRow.appendChild(tdProductName);

        tbodyElem.appendChild(tableRow);
      });
    };

    renderCart();
  },
};
document.addEventListener("DOMContentLoaded", View.init);
