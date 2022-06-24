import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import MapPage from './pages/mapPage/MapPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/map' element={<MapPage />} />
    </Routes>
  );
}

export default App;
