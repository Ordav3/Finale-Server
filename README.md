# Finale Server API Documentation

This document provides all the necessary information to get started with the Finale Server, including how to install and run the server, as well as detailed descriptions of the available API endpoints.

## Getting Started

### Installation

To set up the Finale Server on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Ordav3/Finale-Server.git
   ```

2. Change into the project directory:

   ```bash
   cd Finale-Server
   ```

3. Install the required node modules:
   ```bash
   npm install
   ```

## Running the Server

You have a couple of options for running the Finale Server:

### `npm start`

- This command will run the app using node. Note that the page will not reload if you make edits.

### `npm run dev`

- This runs the app with nodemon, which will automatically reload the page if you make edits.
- Terminal output for a successful run should display:
  ```plaintext
  server run on: http://localhost:8181/
  ```
  and upon successful database connection:
  ```plaintext
  connected to MongoDb!
  ```

## API Endpoints

The server provides a set of endpoints for managing users and cards:

### User Operations

- **Register a New User**
  ```http
  POST /api/users
  ```
- **Login a User**
  ```http
  POST /api/users/login
  ```
- **Get All Users (Admin only)**
  ```http
  GET /api/users
  ```
- **Get Logged-in User's Information**
  ```http
  GET /api/users/userInfo
  ```
- **Update Logged-in User's Information**
  ```http
  PUT /api/users/userInfo/:id
  ```
- **Delete a User (Admin only)**
  ```http
  DELETE /api/users/:id
  ```

### Card Operations

- **Get All Cards**
  ```http
  GET /api/cards
  ```
- **Get Logged-in User's Cards**
  ```http
  GET /api/cards/my-cards
  ```
- **Get Logged-in User's Favorite Cards**
  ```http
  GET /api/cards/fav
  ```
- **Get a Specific Card**
  ```http
  GET /api/cards/:id
  ```
- **Create a New Card (Admin only)**
  ```http
  POST /api/cards
  ```
- **Update a Card (Admin only)**
  ```http
  PUT /api/cards/:id
  ```
- **Like/Unlike a Card**
  ```http
  PATCH /api/cards/:id
  ```
- **Delete a Card (Admin only)**
  ```http
  DELETE /api/cards/:id
  ```

## Validations and Constraints

- All endpoints that require user authentication expect an auth token in the request headers.
- Payloads are validated using Joi, and any validation errors will result in a `400 Bad Request` response.
- Authorization is required for certain operations, and unauthorized access will result in a `403 Forbidden` or `404 Not Found` response.
- Server-side errors will result in a `500 Internal Server Error` response.

# Card Schema

- title:
  -- string
  -- required
  -- min 1
  -- max 256
- subTitle:
  -- string
  -- required
  -- min 1
  -- max 256
- description:
  -- string
  -- required
  -- min 1
  -- max 1024
- phone:
  -- string
  -- required
  -- regex pattern: /^[0-9]{10}$/
- email:
  -- string
  -- required
  -- min 1
  -- max 256
- web:
  -- string
  -- max 1024
- state:
  -- string
  -- max 256
- country:
  -- string
  -- required
  -- min 1
  -- max 256
- city:
  -- string
  -- required
  -- min 1
  -- max 256
- street:
  -- string
  -- required
  -- min 1
  -- max 256
- houseNumber:
  -- number
  -- required
- zip:
  -- number
  -- max 99999999
- url:
  -- string
  -- regex pattern: /^(https?:\/\/)?[^\s\/]+\.[^\s\/]+\/\S+\.(jpg|jpeg|png|gif)$/
- alt:
  -- string
  -- max 256
- likes:
  -- array of strings
- createdAt:
  -- date
- user_id:
  -- ObjectId (reference to User model)

# User Schema

- firstName:
  -- string
  -- required
  -- min 2
  -- max 15
- middleName:
  -- string
  -- max 15
- lastName:
  -- string
  -- required
  -- min 2
  -- max 15
- phone:
  -- string
  -- required
  -- regex pattern: /^[0-9]{10}$/
- email:
  -- string
  -- required
  -- max 256
  -- unique
- password:
  -- string
  -- required
- imageUrl:
  -- string
  -- max 1024
- imageAlt:
  -- string
  -- max 256
- state:
  -- string
  -- max 256
- country:
  -- string
  -- required
  -- max 256
- city:
  -- string
  -- required
  -- max 256
- street:
  -- string
  -- required
  -- max 256
- houseNumber:
  -- string
  -- required
  -- max 256
- zip:
  -- string
  -- max 256
- createdAt:
  -- date
  -- default to current date/time
- isAdmin:
  -- boolean
  -- default false
