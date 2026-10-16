# Dummy API

A simple REST API for testing purposes. Built with Node.js and Express.

## Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`

## API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Get a single product |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | List all users |
| GET | `/api/users/:id` | Get a single user |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | List all orders |
| GET | `/api/orders/:id` | Get a single order |
| POST | `/api/orders` | Create a new order |
| PUT | `/api/orders/:id` | Update an order |
| DELETE | `/api/orders/:id` | Delete an order |

## Data

All data is stored in `data.json`. The API reads from and writes to this file on every mutation.
