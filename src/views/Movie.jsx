import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { MovieDetails } from "../hocks";
import { getMoveItemSearch } from "../servises/getFilm";
import MovieSearch from "../components/Search/MovieSearch";
import { Load } from "../components/Load/Load";
//import style from "./Navigation.module.scss";
import toast from "react-hot-toast";

export default function Movie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [item, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const currentItemPos = searchParams.get("search_film");
  const location = useLocation();

  const find_movie = (e) => {
    setSearchParams({ search_film: e });
  };

  useEffect(() => {
    if (currentItemPos === "") {
      return;
    }

    if (currentItemPos) {
      setLoad(true);

      getMoveItemSearch(currentItemPos)
        .then((data) => {
          const {
            data: { results },
          } = data;
          if (results.length === 0) {
            return toast.error(
              "Sorry, there are no movies. Try another request..."
            );
          }
          setItem(results);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setTimeout(() => {
            setLoad(false);
          }, 1000);
        });
    }
  }, [currentItemPos]);

  return (
    <div>
      <MovieSearch submitValue={find_movie} />
      {load && <Load />}
      <ul>
        {item.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {title ? title : name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
