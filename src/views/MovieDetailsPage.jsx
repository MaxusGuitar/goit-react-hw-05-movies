import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Load } from "../components/Load/Load";
import { MovieDetails } from "../hocks";

export function MovieDetailsPage() {
  const { load, error, item } = MovieDetails();

  return (
    <main>
      {load && <Load />}
      <Link to="/">
        <FaArrowLeft />
        Back
      </Link>
      {!error && (
        <div>
          <img
            src={item.poster_path}
            alt={item.title ? item.title : item.name}
          />
          <h1>{item.title ? item.title : item.name}</h1>
          <p>User Score: {item.vote_average}%</p>
          <h2>Overview</h2>
          <p>{item.overview}</p>
          <h3>Genres</h3>
          <p>{item.genresValues}</p>
        </div>
      )}
    </main>
  );
}
