## Simple Handmade Clear JS Store

### Overview

This project is a small, simple online store built using pure HTML, CSS, and JavaScript (ES6). It showcases handmade products and fetches data from MockAPI for demonstration purposes. The store includes features such as browsing products, viewing product details, adding items to the cart, and processing orders.

### Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)

### Features

- **Product Listing**: Browse a list of handmade products fetched from MockAPI.
- **Product Details**: View detailed information about a specific product.
- **Shopping Cart**: Add and remove products from the shopping cart.
- **Order Processing**: Mock order processing to simulate a purchase.

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/handmade-js-store.git
    cd handmade-js-store
    ```

2. **Open the project directory**:
    Open the `index.html` file in your preferred web browser.

### Usage

1. **Browsing Products**:
    - Open the `index.html` file in a web browser.
    - The home page will display a list of handmade products fetched from MockAPI.

2. **Viewing Product Details**:
    - Click on a product to view its detailed information.

3. **Adding Items to Cart**:
    - On the product detail page, click the "Add to Cart" button to add the product to your shopping cart.

4. **Viewing the Cart**:
    - Click on the cart icon to view the items in your shopping cart.

5. **Processing Orders**:
    - From the cart page, click the "Checkout" button to simulate order processing.

### API Reference

**MockAPI Endpoint**: `https://mockapi.io/endpoint`

1. **Get Products**:
    - **URL**: `/products`
    - **Method**: `GET`
    - **Response**: Returns a list of products.

2. **Get Product Details**:
    - **URL**: `/products/:id`
    - **Method**: `GET`
    - **Response**: Returns details of a specific product by ID.
