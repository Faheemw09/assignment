# Task Management API

This is a RESTful API designed for managing tasks with user authentication and role-based access control. It allows users to sign up, log in, create, update, and delete tasks. The API is built with Node.js, Express, MongoDB, and JWT for secure authentication.

## Features

- **User Authentication:** Secure user login with JWT token generation.
- **Role-Based Access Control:** Different access levels for users and admins.
- **Task Management:** Users can create, update, and delete tasks.
- **Error Handling:** Comprehensive error handling for all API endpoints.
- **MongoDB Integration:** Persistent storage of users and tasks.






 ## Usage
## API Endpoints
User Routes
1. ## Sign Up
Endpoint: POST /users/signup

Description: Register a new user.

Request Body:

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "yourpassword",
  "role": "user" // or "admin"
}
Response:


{
  "message": "Register user successfully",
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user"
  }
}

2. ## Login
Endpoint: POST /users/login

Description: Authenticate a user and obtain a JWT token.

Request Body:

{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
Response:

{
  "msg": "login successful",
  "token": "your_jwt_token"
}
Task Routes

3. # Create Task

Endpoint: POST /tasks/create

Description: Create a new task. (Requires authentication)

Headers:

Authorization: Bearer your_jwt_token
Request Body:

{
  "title": "New Task",
  "description": "Task description",
  "assignedTo": "user_id"
}
Response:


{
  "message": "Task created successfully",
  "data": {
    "_id": "task_id",
    "title": "New Task",
    "description": "Task description",
    "assignedTo": "user_id"
  }
}

##### 4. Get Task

- Endpoint: `GET /tasks/get`
- Description: Retrieve the details of a specific task. (Requires authentication)

  Authorization: Bearer your_jwt_token
Request Body:
{
  "data": {
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "assignedTo": "user_id"
  }
}
Query Parameters:

priority (optional) - Filter tasks by priority.
status (optional) - Filter tasks by status.

5. ## Update Task

Endpoint: PATCH /tasks/update/:id

Description: Update an existing task. (Requires authentication and authorization)


Authorization: Bearer your_jwt_token
Request Body:



{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
Response:

{
  "message": "Task has been updated successfully",
  "data": {
    "_id": "task_id",
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "assignedTo": "user_id"
  }
}

6. # Delete Task
Endpoint: DELETE /tasks/delete/:id

Description: Delete an existing task. (Requires authentication and authorization)

Headers:


Authorization: Bearer your_jwt_token
Response:


{
  "message": "Task has been deleted successfully",
  "data": {
    "_id": "task_id",
    "title": "Deleted Task Title",
    "description": "Deleted Task Description",
    "assignedTo": "user_id"
  }
}
