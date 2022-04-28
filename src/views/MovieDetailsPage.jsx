import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Load } from "../components/Load/Load";
import { MovieDetails } from "../hocks";
import { useRef } from "react";

export default function MovieDetailsPage() {
  const { load, error, item, noImg } = MovieDetails();
  const location = useLocation();
  const backPage = useRef(location);

  return (
    <main>
      {load && <Load />}
      <Link
        to={backPage.current?.state?.from ?? `/`}
        state={{ from: backPage.current }}
      >
        <FaArrowLeft />
        Back
      </Link>
      {!error && (
        <div>
          {item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt=""
              min-width={"100px"}
            />
          ) : (
            <img src={noImg} alt="" />
          )}
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
