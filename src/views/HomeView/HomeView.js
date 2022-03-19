import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getTrend from "../../servises/getFilm";
import { Load } from "../../components/Load/Load";

export default function HomeView() {
  const [items, setItems] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    async function fetchMovies() {
      try {
        getTrend().then((data) => {
          const {
            data: { results },
          } = data;
          setItems(results);
        });
      } catch (error) {
      } finally {
        setLoad(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Tranding today</h2>
      {load && <Load />}
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <Link to={`/movies/${i.id}`}>{i.original_title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
