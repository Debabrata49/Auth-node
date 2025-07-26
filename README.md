# Auth API Project

A simple authentication system API built with Express and MongoDB.

## Features

- User registration (`/api/auth/register`)
- User login (`/api/auth/login`)
- JWT token verification (`/api/auth/verify`)
- Passwords hashed with bcrypt
- Environment variables for configuration

## Setup

1. **Clone the repository**

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the project root:**
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/AuthDB
   JWT_SECRET=your_jwt_secret
   ```

4. **Start MongoDB**
   - Make sure MongoDB is running locally on `mongodb://localhost:27017/AuthDB`.

5. **Run the server**
   ```sh
   npm run dev
   ```
   or
   ```sh
   node src/app.js
   ```

## API Endpoints

### Register

- **POST** `/api/auth/register`
- **Body (JSON):**
  ```json
  {
    "username": "yourUsername",
    "password": "yourPassword123"
  }
  ```

### Login

- **POST** `/api/auth/login`
- **Body (JSON):**
  ```json
  {
    "username": "yourUsername",
    "password": "yourPassword123"
  }
  ```
- **Response:** JWT token

### Verify Token

- **GET** `/api/auth/verify`
- **Headers:**  
  `Authorization: Bearer <your_jwt_token>`

## Project Structure

```
src/
  controllers/
    authController.js
  models/
    User.js
  routes/
    authRoutes.js
  middleware/
    authMiddleware.js
  db.js
  app.js
```

## License
