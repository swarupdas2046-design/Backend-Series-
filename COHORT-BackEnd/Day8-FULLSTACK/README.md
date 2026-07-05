# Day 8 - Full Stack CRUD Application

This project is a simple full stack Notes CRUD application. It has a Node.js + Express + MongoDB backend and a React + Vite + Tailwind CSS frontend.

The backend stores notes in MongoDB, and the frontend fetches those notes and displays them as clean course-style cards with day, title, and description.

## Project Structure

```txt
Day8-FULLSTACK/
  Backend/
    server.js
    package.json
    src/
      app.js
      Config/
        db.js
      Models/
        notes.models.js

  Frontend/
    package.json
    vite.config.js
    src/
      App.jsx
      main.jsx
      index.css

  README.md
```

## Tech Stack

**Backend**

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv
- Nodemon

**Frontend**

- React
- Vite
- Tailwind CSS
- Axios

## Features

- Create a new note
- Get all notes
- Update a note by ID
- Delete a note by ID
- Display notes on the frontend as responsive cards
- MongoDB timestamps for created and updated records

## Backend Setup

Go to the backend folder:

```bash
cd Backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `Backend` folder:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3000
```

Start the backend server:

```bash
npm run dev
```

The server will run on:

```txt
http://localhost:3000
```

Note: `server.js` has a default port of `5000`, but the current frontend is calling `http://localhost:3000/getNotes`. So keep `PORT=3000` in `.env`, or update the Axios URL in `Frontend/src/App.jsx`.

## Backend API Routes

### Create Note

```txt
POST /createNotes
```

Request body:

```json
{
  "day": 8,
  "title": "Full Stack Development",
  "description": "Learning frontend and backend integration."
}
```

### Get All Notes

```txt
GET /getNotes
```

Response contains all notes from MongoDB.

### Update Note

```txt
PUT /update/:id
```

Request body:

```json
{
  "day": 8,
  "title": "Updated title",
  "description": "Updated description"
}
```

### Delete Note

```txt
DELETE /delete/:id
```

Deletes a note using its MongoDB `_id`.

## Notes Model

```js
{
  day: Number,
  title: String,
  description: String
}
```

Mongoose also adds `createdAt` and `updatedAt` because timestamps are enabled.

## Frontend Setup

Go to the frontend folder:

```bash
cd Frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The Vite app usually runs on:

```txt
http://localhost:5173
```

## Frontend Flow

The frontend starts with sample card data. After the page loads, `useEffect` calls the backend API:

```js
axios.get("http://localhost:3000/getNotes")
```

When data comes from MongoDB, it updates the React state and renders each note as a card.

Each card displays:

- Day number
- Note title
- Note description
- Explore Course button

## How To Test With Postman

1. Start MongoDB or use MongoDB Atlas.
2. Start the backend with `npm run dev`.
3. Send a `POST` request to `http://localhost:3000/createNotes`.
4. Send a `GET` request to `http://localhost:3000/getNotes`.
5. Use a note `_id` to test update and delete routes.
6. Start the frontend and check if notes are visible as cards.

## Common Issues

**Frontend data is not showing**

- Check that backend is running.
- Check that `.env` has `PORT=3000`.
- Check that MongoDB is connected.
- Open browser console and check Axios errors.

**MongoDB is not connecting**

- Check `MONGO_URL` in `.env`.
- Make sure your MongoDB Atlas IP access is allowed.
- Make sure the connection string username and password are correct.

**Update API gives `title is not defined`**

- Make sure the update route has this line:

```js
const { title, description, day } = req.body;
```

## Summary

This Day 8 project connects a React frontend with an Express backend. The backend handles CRUD operations for notes, stores data in MongoDB, and the frontend displays that data in a clean card UI.
