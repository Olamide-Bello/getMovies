import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import MovieGenrePage from './Pages/MovieGenrePage';
import DetailsPage from "./Pages/DetailsPage";
import TvGenrePage from "./Pages/TvGenrePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:genre" element={<MovieGenrePage />} />
        <Route path="/tv/:genre" element={<TvGenrePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id/:media_type" element={<DetailsPage />} />

        <Route path="*" element={<Navigate to='/' />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
