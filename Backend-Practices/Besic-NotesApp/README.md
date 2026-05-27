# 📝 Basic Notes App - Backend Project

A complete Node.js backend project for a Notes Application with full CRUD operations. This project demonstrates real-world backend development practices with Express.js and MongoDB.

---

## 📂 Project Structure

```
Besic-NotesApp/
├── Code-by-Me/              # ✍️ Code written from scratch individually
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js           # Express app setup (routes inline)
│       ├── Config/
│       │   └── Db.js        # MongoDB connection
│       └── Models/
│           └── notes.model.js # Mongoose schema
│
├── Extra-Features/          # 🚀 Enhanced version with extra features
│   ├── package.json
│   ├── server.js
│   └── src/
│       ├── app.js           # Main app file
│       ├── Config/
│       │   └── Db.js        # Database configuration
│       ├── Models/
│       │   └── notes.models.js  # Enhanced schema
│       ├── Controllers/
│       │   └── notes.controller.js  # Business logic
│       └── Routes/
│           └── notes.route.js   # API endpoints
│
└── Live-Code/               # 📹 Code written during live class session
    ├── package.json
    ├── server.js
    └── src/
        ├── app.js           # Express app setup
        ├── Config/
        │   └── Database connection
        └── Models/
            └── Notes schema
```

---

## 📦 Packages Installed

### **Common Dependencies (All 3 Versions)**

```json
{
  "express": "^5.2.1",
  "mongoose": "^9.6.2"
}
```

### **Additional Dependencies**

| Version        | Package | Version | Purpose                           |
| -------------- | ------- | ------- | --------------------------------- |
| Code-by-Me     | dotenv  | ^17.4.2 | Environment variables management  |
| Extra-Features | dotenv  | ^17.4.2 | Environment variables management  |
| Live-Code      | -       | -       | No dotenv (uses hardcoded values) |

---

## 📋 Project Details

### **1️⃣ Code-by-Me** (Basic Version - From Scratch)

**Overview:** Basic notes application written from scratch with foundational concepts.

**Features:**

- ✅ Create new notes (title & description only)
- ✅ View all notes
- ✅ Input validation:
  - Title minimum 3 characters
  - Description minimum 10 characters
  - Both fields are mandatory

**Database Schema:**

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  createdAt: Date,       // Automatic
  updatedAt: Date        // Automatic
}
```

**API Endpoints:**

```
POST   /api/notes/create       → Create new note
GET    /api/Get-All-Notes      → Fetch all notes
```

**Key Points:**

- All routes inline in `app.js`
- Simple validation logic
- Direct database operations
- No separation of concerns yet

---

### **2️⃣ Extra-Features** (Production Ready - Enhanced Version)

**Overview:** Complete refactored version with proper MVC architecture and additional features.

**Extra Features Added:**

- ✅ **Priority & Category Fields**
  - `priority`: High, Medium, Low
  - `category`: Task categorization
- ✅ **Complete CRUD Operations**
  - Create notes
  - Read all notes
  - Update notes with full fields
  - Delete notes

- ✅ **Better Code Organization**
  - Separate Controllers folder
  - Separate Routes folder
  - MVC architecture
  - Reusable components

- ✅ **Enhanced Validation**
  - Title minimum 3 characters validation
  - Description minimum 10 characters validation
  - Priority field is mandatory
  - Better error messages

- ✅ **Auto Timestamp Management**
  - `createdAt`: When note is created
  - `updatedAt`: Auto updates on any modification using `findByIdAndUpdate()`

**Database Schema:**

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  priority: String,        // NEW: High, Medium, Low
  category: String,        // NEW: Task category
  createdAt: Date,        // Automatic
  updatedAt: Date         // Automatic updates on PUT/DELETE
}
```

**Directory Structure (MVC Pattern):**

```
src/
├── app.js                 # Express configuration
├── Config/
│   └── Db.js             # MongoDB connection
├── Models/
│   └── notes.models.js    # Schema definition
├── Controllers/
│   └── notes.controller.js # Business logic & handlers
└── Routes/
    └── notes.route.js     # API endpoint definitions
```

**API Endpoints:**

```
POST   /api/Notes/create       → Create new note
GET    /api/Notes/view         → Fetch all notes
PUT    /api/Notes/update/:id   → Update note by ID
DELETE /api/Notes/delete/:id   → Delete note by ID
```

**Controller Functions:**

- `CreateNotes()` - Validates and creates notes
- `ViewALLNotes()` - Retrieves all notes from database
- `UpdateNotes()` - Updates specific note with findByIdAndUpdate()
- `DeleteNotes()` - Deletes note by ID

**Key Improvements:**

- ✅ Proper MVC architecture
- ✅ Separation of concerns (Routes, Controllers, Models)
- ✅ Complete CRUD functionality
- ✅ Better error handling
- ✅ Priority & Category support
- ✅ Automatic timestamp management
- ✅ Production-ready code structure

---

### **3️⃣ Live-Code** (Learning Session Version)

**Overview:** Code written during live class session with instructor alongside.

**Features:**

- ✅ Create new notes
- ✅ View all notes
- ✅ Similar validation as Code-by-Me
- ✅ JSDoc comments for documentation

**Database Schema:**

```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Characteristics:**

- Educational comments and JSDoc
- Step-by-step approach
- No dotenv (hardcoded configurations)
- Basic structure
- Good for learning purposes

---

## 🔄 Comparison Table

| Feature                      | Code-by-Me | Extra-Features | Live-Code |
| ---------------------------- | ---------- | -------------- | --------- |
| CRUD Create                  | ✅         | ✅             | ✅        |
| CRUD Read                    | ✅         | ✅             | ✅        |
| CRUD Update                  | ❌         | ✅             | ❌        |
| CRUD Delete                  | ❌         | ✅             | ❌        |
| Priority Field               | ❌         | ✅             | ❌        |
| Category Field               | ❌         | ✅             | ❌        |
| MVC Architecture             | ❌         | ✅             | ❌        |
| Controllers Folder           | ❌         | ✅             | ❌        |
| Routes Folder                | ❌         | ✅             | ❌        |
| Environment Variables (.env) | ✅         | ✅             | ❌        |
| Mongoose Timestamps          | ✅         | ✅             | ✅        |
| Validation                   | ✅         | ✅✅           | ✅        |

---

## 🚀 How to Run

### **Prerequisites**

- Node.js installed
- MongoDB running locally or MongoDB Atlas connection string
- .env file (for Code-by-Me and Extra-Features)

### **Setup Instructions**

#### **For Extra-Features (Recommended)**

```bash
cd Backend-Practices/Besic-NotesApp/Extra-Features

# Install dependencies
npm install

# Create .env file
# Add these environment variables:
# PORT=5000
# MONGO_URL=mongodb://localhost:27017/notes-app

# Start the server
npm start
```

#### **For Code-by-Me**

```bash
cd Backend-Practices/Besic-NotesApp/Code-by-Me

npm install
npm start
```

#### **For Live-Code**

```bash
cd Backend-Practices/Besic-NotesApp/Live-Code

npm install
npm start
```

---

## 📝 Example API Usage

### **Create a Note** (Extra-Features)

```bash
curl -X POST http://localhost:5000/api/Notes/create \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Note",
    "description": "This is a detailed description of my note",
    "priority": "High",
    "category": "Work"
  }'
```

### **Get All Notes**

```bash
curl http://localhost:5000/api/Notes/view
```

### **Update a Note**

```bash
curl -X PUT http://localhost:5000/api/Notes/update/650abc123def \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "description": "Updated description here",
    "priority": "Medium",
    "category": "Personal"
  }'
```

### **Delete a Note**

```bash
curl -X DELETE http://localhost:5000/api/Notes/delete/650abc123def
```

---

## 🎯 Learning Path

**Beginner** → Start with **Code-by-Me**

- Simple structure
- All code in one file
- Good for understanding basics

**Intermediate** → Watch **Live-Code**

- Real-time development
- Educational comments
- Step-by-step approach

**Advanced** → Study **Extra-Features**

- MVC architecture
- Complete CRUD
- Production-ready code
- Best practices

---

## ✨ Key Takeaways

---

## 🐛 Common Issues & Solutions

### **MongoDB Connection Error**

- Check MongoDB is running
- Verify MONGO_URL in .env is correct
- Check network connectivity

### **Port Already in Use**

- Change PORT in .env
- Or kill the process using the port

### **Validation Errors**

- Title must be at least 3 characters
- Description must be at least 10 characters
- Priority field is required in Extra-Features

---

## 🔗 Technologies I Used

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Runtime:** Node.js
- **Package Manager:** npm
- **Environment Management:** dotenv

---

## 👨‍💻 Author Notes

**Created by:** Swarup Das 🎯

This project demonstrates the progression from basic backend development to production-ready code. The three versions show how to evolve from simple implementations to scalable, maintainable applications following industry best practices.

### 🤝 Let's Connect & Collaborate!

If you found this project helpful or interesting, I'd love to hear from you! Whether you want to:

- 💡 Share ideas and suggestions
- 🐛 Report issues or improvements
- 📚 Collaborate on future projects
- 💬 Discuss backend development practices
- 🚀 Work together on exciting initiatives

**Feel free to reach out! I'm always happy to connect with fellow developers and explore collaboration opportunities.**

Let's build something amazing together! 🚀

---
