import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView/HomeView";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="preview" element={<HomeView />} />
        <Route path="movies" element={<div>sdfdsf</div>} />
      </Route>
    </Routes>
  );
}

export default App;
