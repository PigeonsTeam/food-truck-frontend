import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import MapPage from "./pages/mapPage/MapPage";
import FilterPage from "./pages/FilterPage/FilterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import BucketListPage from "./pages/BucketListPage/BucketList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/bucketList" element={<BucketListPage />} />
      </Routes>
    </>
  );
}

export default App;
