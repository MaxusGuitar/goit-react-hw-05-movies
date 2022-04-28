import { Route, Routes, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { item } from "./hocks/MovieDetails";

const Movie = lazy(() => import("./views/Movie.jsx"));
const HomeView = lazy(() => import("./views/HomeView.jsx"));
const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage.jsx"));
const Navigation = lazy(() => import("./components/Navigation/Navigation.jsx"));

export function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<Movie />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
