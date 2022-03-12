import { NavLink, Outlet } from "react-router-dom";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/preview"
        className={style.nav_link}
        style={({ isActive }) => ({
          color: isActive ? "rgb(0, 4, 255)" : "rgb(44, 44, 44)",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={style.nav_link}
        style={({ isActive }) => ({
          color: isActive ? "rgb(0, 4, 255)" : "rgb(44, 44, 44)",
        })}
      >
        Movies
      </NavLink>
      <Outlet />
    </nav>
  );
};

export default Navigation;
