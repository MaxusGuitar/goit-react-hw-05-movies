import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getTrend from "../../servises/getFilm";

export default function HomeView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrend();
        setItems(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main>
      <h2>Tranding today</h2>
      <ul>
        {items.map((i) => (
          <li>
            <Link to={`/movies/${i.id}`}>{i.original_title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
