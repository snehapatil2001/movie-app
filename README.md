# Movie Search App 🎬

A modern movie search application built with React and Vite, featuring real-time search capabilities, trending movies tracking, and a beautiful responsive UI. Powered by TMDB API for movie data and Appwrite for backend services. Features include debounced search, trending movies analytics, and comprehensive movie information display.

Tech Stack: React.js, Vite, TailwindCSS, Appwrite, TMDB API

## 🌟 Features

- **Real-time Movie Search**: Search through thousands of movies with instant results
- **Trending Movies**: View the most searched movies by other users
- **Detailed Movie Information**: Get access to ratings, release years, and language information
- **Responsive Design**: Fully responsive interface that works on all device sizes
- **Debounced Search**: Optimized search functionality to prevent API rate limiting

## 🛠️ Technologies Used

- **Frontend**: React.js with Vite
- **Styling**: TailwindCSS
- **Backend**: Appwrite
- **API**: TMDB (The Movie Database)
- **State Management**: React Hooks
- **Performance**: React-Use for debounced search

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Appwrite account
- TMDB API key

### 📋 Project Structure

```plaintext
movie-app/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── app.jsx         # Main application component
│   ├── appwrite.js     # Appwrite configuration and utilities
│   ├── index.css       # Global styles
│   └── app.css         # Application-specific styles
├── .env.local          # Environment variables
└── package.json        # Project dependencies and scripts
```

### Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Installation

**Clone the repository:**

```env
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

**Install dependencies:**

```env
npm install
# or
yarn install
```

**Start the development server:**

```env
npm run dev
# or
yarn dev
```

### 🎯 Core Functionality

**Movie Search**

Real-time search functionality with debouncing
Integration with TMDB API for comprehensive movie data
Error handling for failed API requests

**Trending Movies**

Tracks and displays most searched movies
Utilizes Appwrite backend to store search statistics
Updates in real-time as users perform searches

**UI Components**

MovieCard: Displays individual movie information
Search: Handles user input with debounced searching
Spinner: Loading state indicator
