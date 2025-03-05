# Product Inventory API

This is a RESTful API built with Node.js, Express.js, and MongoDB to manage a product inventory. The API allows users to create, read, update, and delete products.

## Features

-   Add a new product
-   Get all products
-   Get a specific product by id
-   Filter products by category
-   Sort products by price
-   Order products
-   Update a product
-   Delete a product

## Project Setup

1. Clone the repository:

```
git clone https://github.com/saminmahmud/A-3-Product-Inventory-API.git
```

2. Install dependencies:
```
npm install
```
3. Set up environment variables by creating a `.env` file:
```
MONGO_URI=your_mongodb_connection_string_here PORT=5000
```
4. Run the server:
```
npm run dev
```

## API Endpoints
- **POST** `/api/products`: Add a new product
- **GET** `/api/products`: Get all products
- **GET** `/api/products?sort=asc`: Get all products with sort price (asc or desc)
- **GET** `/api/products/:id`: Get a specific product by ID
- **GET** `/api/products/category/category_name`: Filter products by category
- **GET** `/api/products/category/category_name?sort=desc`: Filter products by category with sort price (asc or desc)
- **PUT** `/api/products/:id`: Update a product by ID
- **DELETE** `/api/products/:id`: Delete a product by ID

## Example POST Request Body (JSON):
```
{ 
"name": "Wireless Headphones", 
"price": 49.99, 
"category": "Electronics", 
"stock": 25, 
"description": "Bluetooth over-ear headphones with noise cancellation" 
}
```
## Live Link:
```
https://api-product-inventory.vercel.app/
```
## Testing

Use Postman or any API testing tool to test the endpoints.
