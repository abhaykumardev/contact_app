# Contact App - MERN Stack Project

## 📌 Project Overview

Contact App is a RESTful API built using the MERN stack technologies. The application allows users to manage their contacts efficiently by performing CRUD (Create, Read, Update, Delete) operations. It also includes user authentication using JSON Web Tokens (JWT) to secure contact data and ensure that users can only access their own contacts.

This project was developed as part of my MERN Stack learning journey to gain hands-on experience with backend development, REST APIs, MongoDB, authentication, middleware, and Express.js.

---

## 🚀 Features

### User Authentication

* User Registration
* User Login
* JWT Token Generation
* Protected Routes
* Current Logged-in User Information

### Contact Management

* Create Contact
* View All Contacts
* View Single Contact
* Update Contact
* Delete Contact

### Security

* Password Hashing using bcrypt
* JWT Authentication
* Protected API Endpoints
* Environment Variables for Sensitive Data

### Error Handling

* Centralized Error Handling Middleware
* Validation Errors
* Unauthorized Access Handling
* Resource Not Found Handling

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JSON Web Token (JWT)
* bcrypt

### Development Tools

* Nodemon
* Thunder Client
* Git & GitHub

---

## 📂 Project Structure

```bash
contact_app/
│
├── config/
│   └── dbconnection.js
│
├── controllers/
│   ├── contactController.js
│   └── userController.js
│
├── middleware/
│   ├── errorHandler.js
│   └── validateTokenHandler.js
│
├── models/
│   ├── contactModel.js
│   └── userModel.js
│
├── routes/
│   ├── contactRoute.js
│   └── userRoute.js
│
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/contact-app.git
```

### Move Into Project Folder

```bash
cd contact-app
```

### Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=3000

CONNECTION_STRING=

JWT_SECRET=your_secret_key
```

---

## ▶️ Running the Project

### Development Mode

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

Server will start on:

```text
http://localhost:3000
```

---

## 📡 API Endpoints

### User Routes

#### Register User

```http
POST /api/users/register
```

Request Body:

```json
{
  "username": "Abhay",
  "email": "abhay@example.com",
  "password": "password123"
}
```

---

#### Login User

```http
POST /api/users/login
```

Request Body:

```json
{
  "email": "abhay@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "accessToken": "jwt_token"
}
```

---

#### Current User

```http
GET /api/users/current
```

Headers:

```http
Authorization: Bearer <token>
```

---

## Contact Routes

### Get All Contacts

```http
GET /api/contacts
```

Headers:

```http
Authorization: Bearer <token>
```

---

### Get Contact By ID

```http
GET /api/contacts/:id
```

---

### Create Contact

```http
POST /api/contacts
```

Request Body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}
```

---

### Update Contact

```http
PUT /api/contacts/:id
```

Request Body:

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "phone": "9999999999"
}
```

---

### Delete Contact

```http
DELETE /api/contacts/:id
```

---

## 🔐 Authentication Flow

1. User registers an account.
2. User logs in using email and password.
3. Server validates credentials.
4. JWT token is generated.
5. Token is returned to the client.
6. Client sends token in Authorization header.
7. Middleware verifies token.
8. Protected resources become accessible.

---

## 🧪 Testing

API endpoints can be tested using:

* Thunder Client
* Postman
* Insomnia

Example Authorization Header:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## 📚 Learning Outcomes

Through this project, I learned:

* Express.js Routing
* REST API Development
* MongoDB Integration
* Mongoose ODM
* JWT Authentication
* Middleware Creation
* Error Handling
* Environment Variables
* Git & GitHub Workflow
* CRUD Operations
* API Testing

---

## 🔮 Future Improvements

* React Frontend Integration
* Contact Search Functionality
* Pagination
* Profile Management
* Password Reset Feature
* Email Verification
* Role-Based Authorization
* Docker Deployment
* Cloud Deployment

---

## 👨‍💻 Author

**Abhay**

MERN Stack Developer | Learning Full Stack Web Development

GitHub: https://github.com/your-username

---

## 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for educational purposes.
