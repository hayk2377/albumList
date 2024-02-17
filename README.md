# albumList

## Overview

albumList is a full-stack website showcasing a beautifully designed list of albums, built with modern technologies and best practices.

## Key Features

* Dynamically fetch and display album data.
* Clean, readable, and maintainable codebase for both frontend and backend.
* Well-structured application architecture using modular components and asynchronous data fetching.
* Customizable styling options using your preferred library (styled-components or emotion).
* Optional add-ons: filtering, sorting, album details, user interaction features.

## Technologies Used

**Frontend:**

* React: Efficient JS library for building interactive UIs.
* Redux Toolkit: Streamlined state management library for predictable state updates.
* Redux Saga: Powerful middleware for managing asynchronous data fetching and side effects.
* Axios: User-friendly library for making HTTP requests to your backend API.
* Styled Components/Emotion: Flexible CSS-in-JS solutions for crafting pixel-perfect styles.

**Backend:**

* Golang: High-performance, expressive language for building robust web applications.
* Gin: Lightweight web framework designed for speed and flexibility.

## Development Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/hayk2377/albumList](https://github.com/hayk2377/albumList/)

2. start the backend:
    ```bash
    cd backend
    go mod tidy
    go run main.go
3. start the frontend
    ```bash
    cd frontend
    npm install
    npm run dev
4.go to the browser.
    it is on port 5173 for frontend