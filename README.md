# Mini Feed App

A simple full-stack post feed application where users can upload an image with a caption and view posts in a feed.

## What It Does

- Create a new post with an image and caption
- Upload images to ImageKit from the backend
- Save post data in MongoDB with Mongoose
- Fetch and display posts in a React feed

## Tech Stack

- Frontend: React, Vite, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, Multer, CORS
- Image storage: ImageKit

## Project Structure

- `backend/` - Express API and MongoDB logic
- `frontend/` - React UI

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Backend environment variables

Create a `.env` file inside `backend/` with these values:

```env
MONGODB=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

### 3. Install dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

### 4. Run the app

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

## Available Routes

Backend API:

- `POST /create-post` - upload an image and caption
- `GET /posts` - fetch all posts

Frontend pages:

- `/create-post` - create a new post
- `/feed` - view the post feed

## Screenshots / Demo

This section is optional, but it is a good idea to add it if you want other people to understand the project quickly.

Screenshots:

![Project Screenshot 1](project_image1.png)
![Project Screenshot 2](project_image2.png)


## Notes

- Do not commit your `.env` file
- The screenshot files `project_image1.png` and `project_image2.png` are ignored locally so they do not get uploaded to the repository
- Make sure MongoDB and ImageKit credentials are valid before running the backend
