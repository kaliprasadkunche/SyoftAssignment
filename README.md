# Syoft ReactJS Assignment

## Overview
This React application provides a user interface for user registration, login, and a dashboard that displays user information. It communicates with the Node.js backend API to perform these operations.

### Table of Contents
- [Environment Setup](#environment-setup-1)
- [Pages](#pages)
- [Core Requirements](#core-requirements)
- [Installation](#installation-1)
- [Usage](#usage-1)
- [Design Considerations](#design-considerations)

### Environment Setup
1. Ensure Node.js is installed.
2. Set up a React project using Create React App.

### Pages
1. **Sign Up Page**
   - API URL: `https://syoft.dev/Api/user_registeration/api/user_registeration`
   - Collects user data and sends a POST request for registration.
   - ![Screenshot 2024-07-16 000703](https://github.com/user-attachments/assets/95ab6907-e4d0-4048-820a-c3e15a5215b0)


2. **Log In Page**
   - API URL: `https://syoft.dev/Api/userlogin/api/userlogin`
   - Collects email and password for login and stores JWT in local storage.
   - ![Screenshot 2024-07-16 000647](https://github.com/user-attachments/assets/1d0c07fb-bbb4-460b-a17c-fa1f6c95835c)


3. **Dashboard Page**
   - Displays user information retrieved from local storage post-login.
   - ![Untitled design (1)](https://github.com/user-attachments/assets/1e57fda3-cdbd-4878-818d-51b6dc87f45f)

### Core Requirements
- **Framework**: React
- **Responsiveness**: Ensure compatibility with both desktop and mobile.
- **Form Validations**: Validate all input fields before submission.

### Installation
1. Clone the repository.
2. Navigate to the frontend project folder.
3. Run `npm install` to install dependencies.

### Usage
1. Start the React application with `npm start`.
2. Access the application in your browser at `http://localhost:3000`.

### Design Considerations
- Ensure responsive design for various devices.
- Use CSS or frameworks like Bootstrap for styling.
- Implement user-friendly interfaces with clear navigation.


----------------------------------------------------------------------

# Syoft NodeJS Assignment

## Overview
This Node.js application implements a RESTful API with user authentication and product management functionalities. It includes user registration, login, and CRUD operations for products, secured by JWT authentication.

### Table of Contents
- [Environment Setup](#environment-setup)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

### Environment Setup
1. **Node.js**: Ensure Node.js is installed on your machine.
2. **Database**: Choose between PostgreSQL, MySQL, or SQLite and set it up.

### API Endpoints
1. **Register**
   - **Method**: `POST`
   - **Endpoint**: `/api/register`
   - **Body**: 
     ```json
     {
         "username": "JohnDoe",
         "email": "john@example.com",
         "password": "password123",
         "role": "admin"
     }
     ```
   - **Response**: `201 Created` with message "User created".

2. **Login**
   - **Method**: `POST`
   - **Endpoint**: `/api/login`
   - **Body**: 
     ```json
     {
         "email": "john@example.com",
         "password": "password123"
     }
     ```
   - **Response**: `200 OK` with JWT token.

3. **Product CRUD Operations**
   - **Create**: `POST /api/products`
   - **Read**: `GET /api/products`
   - **Update**: `PUT /api/products/:id`
   - **Delete**: `DELETE /api/products/:id`
   - **Authorization**: Admin/Manager roles required for respective operations.

### Technologies Used
- **Node.js**
- **Express.js**
- **JWT for authentication**
- **Database**: Choose from PostgreSQL, MySQL, SQLite

### Installation
1. Clone the repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.

### Usage
1. Start the server with `npm start`.
2. Use Postman or any REST client to interact with the API endpoints.

### Testing
- Ensure all endpoints are tested using Postman.
- Validate token generation and access control for product operations.
