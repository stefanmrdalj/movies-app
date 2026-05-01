import "./App.scss";
import DetailsPage from "./pages/detailsPage";
import Home from "./pages/homePage";
import Movies from "./pages/moviesPage";
import TvShows from "./pages/tvShowsPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="shows" element={<TvShows />} />
          <Route path="/details/:type/:id" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
