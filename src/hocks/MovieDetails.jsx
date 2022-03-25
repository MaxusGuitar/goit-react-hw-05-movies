import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoveItem } from "../servises/getFilm";
import toast from "react-hot-toast";

const noPosterImg =
  "https://sd.keepcalms.com/i/sorry-no-picture-available-2.png";

export const MovieDetails = () => {
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

  return { load, error, item };
};
