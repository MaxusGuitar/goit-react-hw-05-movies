import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { MovieDetails } from "../hocks";
import { getMoveItemSearch } from "../servises/getFilm";
//import style from "./Navigation.module.scss";
import { Toaster } from "react-hot-toast";

export const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { item, load, setLoad, setItem, error } = MovieDetails();
  const currentItemPos = searchParams.get("search_film");

  const find_movie = (fromData) => {
    setSearchParams({ search_film: fromData });
  };

  useEffect(() => {
    setLoad(true);
    async function searchMovies() {
      try {
        getMoveItemSearch().then((data) => {
          const {
            data: { results },
          } = data;
          setItem(results);
        });
      } catch (error) {
      } finally {
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      }
    }
    searchMovies();
  }, []);

  return (
    <div>
      <input onSubmit={find_movie} type="text" />
      {!error && (
        <ul>
          {item.map((i) => (
            <li key={i.id}>
              <Link to={`/movies/${i.id}`}>{i.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
