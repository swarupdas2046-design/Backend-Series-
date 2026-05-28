# 📝 Notes App with Authentication (Backend API)

A robust and secure backend REST API for a Notes application. This project features user authentication, authorization, and basic CRUD (Create, Read, Update, Delete) operations for notes. It ensures that users can only access and manage their own notes using JWT-based cookie authentication.

## 🚀 Tech Stack

* **Runtime Environment:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **Authentication:** JSON Web Tokens (JWT) & Cookies
* **Security:** Bcrypt (Password Hashing)

## 📂 Folder Structure

The project follows a standard MVC-inspired architecture for better scalability and maintainability:

    NotesApp-With-Authentication/
    ├── node_modules/
    ├── src/
    │   ├── Config/
    │   │   └── Database.js          # MongoDB connection setup
    │   ├── Controllers/
    │   │   ├── auth.controller.js   # Logic for user register/login
    │   │   └── notes.controller.js  # Logic for notes CRUD operations
    │   ├── Middlewares/
    │   │   └── auth.middleware.js   # JWT token verification via cookies
    │   ├── Models/
    │   │   ├── auth.model.js        # User database schema
    │   │   └── notes.models.js      # Notes database schema
    │   ├── Routes/
    │   │   ├── auth.routes.js       # Endpoints for authentication
    │   │   └── notes.route.js       # Endpoints for notes operations
    │   └── app.js                   # Express app configuration & route mounting
    ├── .env                         # Environment variables (Ignored in Git)
    ├── .gitignore                   # Files to ignore in version control
    ├── package-lock.json
    ├── package.json                 # Project dependencies & scripts
    └── server.js                    # Entry point of the application

## ✨ Features

* **User Authentication:** Secure registration and login using bcrypt for password hashing.
* **Session Management:** Uses jsonwebtoken (JWT) stored securely in HTTP cookies.
* **Protected Routes:** Custom middleware ensures only authenticated users can access note routes.
* **Data Privacy:** Users can only view, update, and delete the notes they created.
* **Input Validation:** Basic validation for character length and required fields.

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/register` | Register a new user | Public |
| POST | `/login` | Authenticate user & set cookie | Public |

### Notes Routes (`/api/Notes`)
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| POST | `/create` | Create a new note | Protected |
| GET | `/view` | Get all notes for the logged-in user | Protected |
| PUT | `/update/:id` | Update an existing note by ID | Protected |
| DELETE | `/delete/:id` | Delete a note by ID | Protected |


## ⚙️ Controller Functions

### Auth Controllers (`auth.controller.js`)
* **UserRegister()** - Validates input, hashes passwords with bcrypt, creates user, and sets JWT token.
* **UserLogin()** - Verifies credentials, compares hashed passwords, and logs user in.

### Notes Controllers (`notes.controller.js`)
* **CreateNotes()** - Validates and creates notes tied to the authenticated user.
* **ViewALLNotes()** - Retrieves all notes from the database for the logged-in user.
* **UpdateNotes()** - Updates a specific note using `findByIdAndUpdate()`.
* **DeleteNotes()** - Deletes a note by its ID using `findByIdAndDelete()`.

## 🛠️ Installation and Setup

Follow these steps to run the project locally on your machine:

1. **Clone the repository:**
    git clone <your-github-repo-url>
    cd NotesApp-With-Authentication

2. **Install Dependencies:**
    npm install

3. **Set up Environment Variables:**
    Create a `.env` file in the root directory and add the following variables:
    PORT=8000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET_KEY=your_secret_key_here

4. **Start the Server:**
    npm start
    
    The server should now be running on http://localhost:3000 (or your defined port).

## 📦 Dependencies Used

* `express`: Fast, unopinionated, minimalist web framework.
* `mongoose`: Elegant MongoDB object modeling.
* `bcrypt`: Library to help you hash passwords.
* `jsonwebtoken`: For generating and verifying authentication tokens.
* `cookie-parser`: Parse Cookie header and populate req.cookies.
* `dotenv`: Loads environment variables from a .env file.

## 👨‍💻 Author Notes

Created by: **Swarup Das** 🎯

This project demonstrates the progression from basic backend development to production-ready code. The three versions show how to evolve from simple implementations to scalable, maintainable applications following industry best practices.

## 🤝 Let's Connect & Collaborate!

If you found this project helpful or interesting, I'd love to hear from you! Whether you want to:
* 💡 Share ideas and suggestions
* 🐛 Report issues or improvements
* 📚 Collaborate on future projects
* 💬 Discuss backend development practices
* 🚀 Work together on exciting initiatives

Feel free to reach out! I'm always happy to connect with fellow developers and explore collaboration opportunities.

**Let's build something amazing together! 🚀**