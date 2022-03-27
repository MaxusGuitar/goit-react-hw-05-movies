import { Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { MovieDetailsPage } from "./views/MovieDetailsPage";
import { HomeView } from "./views/HomeView";
import { Movie } from "./views/Movie";
import "./App.css";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<HomeView />} />
        <Route path="movies" element={<Movie />} />
        <Route path="/movies/:moviesId" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
