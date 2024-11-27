# Music_App

This project is a Full Stack application developed with React on the frontend and Node.js/Express on the backend, using MongoDB as the database. Its purpose is to [describe the goal, e.g., manage information, perform CRUD operations, etc.].

## Features

### Frontend

- React: Building the user interface.

- React Router DOM: Navigation between pages.

- Formik & Yup: Dynamic forms and robust validation.

- Axios: HTTP requests to the backend.

- Bootstrap: Responsive design and styling.

### Backend

- Express: Framework to build the REST API.

- Mongoose: MongoDB database management.

- Cors: Handle cross-origin requests.

- Dotenv: Environment variable configuration.

# Technologies Used

### Frontend

- React
- React Router DOM
- Formik & Yup
- Axios
- Bootstrap

### Backend

- Node.js
- Express
- Mongoose
- Cors
- Dotenv

# Installation and Execution

### Prerequisites

- **Node.js** installed.
- **MongoDB** configured and running.

### Clone the Repository

```
git clone <repository URL>
cd <project name>
```

### Backend Setup

1. Navigate to the `server` directory:

```
cd server
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file based on the example:

```
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=5000
```

4. Start the server in development mode:

```
npm run dev
```

### Frontend Setup

1. Navigate to the `client` directory:

```
cd client
```

2. Install dependencies:

```
npm install
```

3. Start the application in development mode:

```
npm run dev
```

## Usage

1. Ensure both the backend and frontend are running.

2. Access the application in your browser at `http://localhost:5173.`

## Available Scripts

### Frontend (client)

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the application for production.
- `pm run lint`: Lints the code to maintain quality.

### Backend (server)

- `npm run dev`: Starts the server in development mode with Nodemon.
- `npm start`: Starts the server in production mode.

### Contributions

If you want to contribute, please fork the repository, create a branch for your changes, and submit a pull request.

#

Thank you for exploring this project! If you have any questions, feel free to reach out.
