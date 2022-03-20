import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTrend } from "../servises/getFilm";
import { Load } from "../components/Load/Load";

export function HomeView() {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    async function fetchMovies() {
      try {
        getTrend().then((data) => {
          const {
            data: { results },
          } = data;
          setMovies(results);
        });
      } catch (error) {
        setError(error);
      } finally {
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Tranding today</h2>
      {load && <Load />}
      {!error && (
        <ul>
          {movies.map((i) => (
            <li key={i.id}>
              <Link to={`/movies/${i.id}`}>{i.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
