# Maze Of Movies

A movie search web application built with React 19, Vite, TMDB API, Firebase Authentication, Gemini API, and Tailwind 4. This project allows users to search for movies, view details, and explore trending films.

## 🚀 Technologies Used

- **React 19** – Modern UI library for building interactive interfaces.
- **Vite** – Fast build tool for frontend development.
- **Tailwind CSS 4** – Utility-first CSS framework.
- **TMDB API** – Movie database for fetching movie details.
- **Firebase Authentication** – User authentication and management.
- **Gemini API** – Movie recommendation system.

## 📌 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended: v18+)
- [Git](https://git-scm.com/)
- [Firebase](https://firebase.google.com/) (Set up a project and enable authentication)
- TMDB API Key (Sign up at [TMDB](https://www.themoviedb.org/))
- Gemini API Key (Get access from Google's Gemini API)

## 🔧 Installation & Setup

1. **Clone the Repository**

   ```sh
   git clone -b dev https://github.com/arinmandal/Maze-Of-Movies.git
   cd Maze-Of-Movies
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Create an `.env` File**
   Create a `.env` file in the project root and add the following:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173/`

## 🛠 Build for Production

```sh
npm run build
```

The production files will be in the `dist/` directory.
