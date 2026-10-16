# Dummy API — Candidate Test

This repo contains a simple REST API with dummy data. You will use this API to complete 5 issues. You do **not** need to modify the API code — just call it.

## Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/10vulture1005/dummy-api.git
cd dummy-api

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

The API is now running at `http://localhost:3000`

## Data

All data lives in `data.json`. It contains 3 collections:

| Collection | Count | Fields |
|------------|-------|--------|
| **products** | 5 items | id, name, price, category, inStock |
| **users** | 3 items | id, name, email, role |
| **orders** | 3 items | id, userId, productIds, total, status |

Read `data.json` to understand the current state before making any API calls.

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

## How to Call the API

You can use **any language or tool** — JavaScript (Node.js), Python, curl, Postman, etc. The API is a standard REST API that accepts HTTP requests with JSON bodies.

### JavaScript (Node.js) example

```javascript
// GET example
const res = await fetch('http://localhost:3000/api/products');
const data = await res.json();

// POST example
await fetch('http://localhost:3000/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* your payload */ })
});

// PUT example
await fetch('http://localhost:3000/api/products/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ /* your payload */ })
});

// DELETE example
await fetch('http://localhost:3000/api/products/1', { method: 'DELETE' });
```

### Python example

```python
import requests

# GET example
res = requests.get('http://localhost:3000/api/products')
data = res.json()

# POST example
requests.post('http://localhost:3000/api/products', json={ /* your payload */ })

# PUT example
requests.put('http://localhost:3000/api/products/1', json={ /* your payload */ })

# DELETE example
requests.delete('http://localhost:3000/api/products/1')
```

### curl examples:

### GET all products
```bash
curl http://localhost:3000/api/products
```

### GET a single product
```bash
curl http://localhost:3000/api/products/1
```

### POST create a product
```bash
curl -X POST http://localhost:3000/api/products \
  -H 'Content-Type: application/json' \
  -d '{"name": "Keyboard", "price": 49.99, "category": "Electronics", "inStock": true}'
```

### PUT update a product
```bash
curl -X PUT http://localhost:3000/api/products/1 \
  -H 'Content-Type: application/json' \
  -d '{"price": 899.99}'
```

### DELETE a product
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

## Your Tasks

There are **5 open issues** in this repo. Each one requires you to:

1. Read `data.json` to understand the data
2. Build the appropriate JSON payload
3. Call the API endpoint(s) to make the change
4. Verify the change was applied

Run `gh issue list --repo 10vulture1005/dummy-api` to see all issues.

## Tips

- Always set `Content-Type: application/json` header for POST and PUT requests
- The API reads from and writes to `data.json` on every mutation — you can check the file to verify changes
- IDs are auto-incremented on creation
- If you get a 404, check that the ID exists in `data.json`
