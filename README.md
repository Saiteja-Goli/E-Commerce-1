# E-Commerce 

This is a web application for browsing products. Users can view a list of products, filter by category, and sort products by price.

## Deployed Link
- [Link](https://client-o3uojrd5b-saiteja-goli.vercel.app/)

## JSON-Server Deployed Link
- [Link](https://blue-tough-cape-buffalo.cyclic.app)

## Routes

- `/`: Home Page
  - Displays a products with minimal information
- `/products`: Product Listing Page
  - Shows a list of available products.
  - Allows users to filter, and sort products.
- `/products/:id`: Product Details Page
  - Displays detailed information about a specific product.
  - We can Add to cart the product
- `/cart`: Cart Page
  - Shows the items added to the cart.
  - Allows users to review and manage the items in the cart.


## Features

- View a list of products with details such as name, price, category, and description.
- Filter products by category: Sports & Outdoors, Electronics, Home & Kitchen, Fashion.
- Sort products by price in ascending or descending order.
- Paginate through the list of products.
- Click on a product to view its details.
- Add products to the cart for purchase.
- Remove Products from Cart

## Technologies Used

- React.js: Frontend library for building user interfaces.
- Chakra UI: Component library for quickly building accessible and responsive UIs.
- React Router: Declarative routing for React applications.
- Redux: State management library for managing application state.
- JSON Server: Fake REST API for testing and prototyping.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Saiteja-Goli/E-Commerce.git
```
 2. Navigate to the project directory:
```bash
 cd client
```
3. Install dependencies:
```bash
npm Install
npm install json-server
```
5. In a separate Integrated terminal, start the React application:
```bash
npm run dev
```
## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or create a pull request.
