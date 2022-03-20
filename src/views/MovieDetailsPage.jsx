import { useState, useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getMoveItem } from "../servises/getFilm";
import toast from "react-hot-toast";
import { Load } from "../components/Load/Load";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const noPosterImg =
  "https://sd.keepcalms.com/i/sorry-no-picture-available-2.png";

export function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);

    getMoveItem(moviesId)
      .then((data) => {
        const {
          data: { poster_path, title, name, overview, vote_average, genres },
        } = data;

        setItem({
          poster_path,

          title,
          name,
          overview,
          vote_average,
          genresValues:
            genres.length === 0
              ? "There are no genres"
              : genres.map(({ name }) => [name]).join(", "),
        });
      })
      .catch((error) => {
        return toast.error("There is no movie on this page!");
      })
      .finally(() =>
        setTimeout(() => {
          setLoad(false);
        }, 1000)
      );
  }, [moviesId]);

  return (
    <main>
      {load && <Load />}
      <Link to="/preview">
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
          <p>User Score: {item.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{item.overview}</p>
          <h3>Genres</h3>
          <p>{item.genresValues}</p>
        </div>
      )}
    </main>
  );
}
