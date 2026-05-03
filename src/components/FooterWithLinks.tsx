import "../style/footerWithLinks.scss";
import logo from "../assets/photos/logo.png";
import { NavLink } from "react-router-dom";
import { EXTERNAL_LINKS } from "../config/navigationLinks";

const FooterWithLinks = () => {
  return (
    <div className="footer-with-links">
      <div className="links-title">
        <img src={logo} alt="logo" />
        <h2>Movies</h2>
      </div>
      <div className="links-container">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/movies">Movies</NavLink>
        </div>
        <div>
          <NavLink to="/shows">Tv shows</NavLink>
        </div>
      </div>
      <div className="links-container">
        <div>
          <a href={EXTERNAL_LINKS.imdbWhatToWatch} target="_blank" rel="noopener noreferrer">
            What to watch
          </a>
        </div>
        <div>
          <a href={EXTERNAL_LINKS.imdbTopMovies} target="_blank" rel="noopener noreferrer">
            Top IMDB movies
          </a>
        </div>
        <div>
          <a href={EXTERNAL_LINKS.imdbTopTvShows} target="_blank" rel="noopener noreferrer">
            Top IMDB Tv shows
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterWithLinks;
