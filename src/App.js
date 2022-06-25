import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import MapPage from "./pages/mapPage/MapPage";
import NavBar from "./components/NavBar/NavBar";
import FilterPage from "./pages/FilterPage/FilterPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>
    </>
  );
}

export default App;
