import { useState } from "react";
import toast from "react-hot-toast";

export default function MovieSearch({ submitValue }) {
  const { searchValue, setSearchValue } = useState("");

  const handleChange = (e) => {
    const v = e.currentTarget.value.toLowerCase();

    setSearchValue(v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue === "") {
      toast.error("Please, enter the movie name!");
      return;
    }
    submitValue(searchValue);
    setSearchValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search movies"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
}
