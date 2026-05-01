import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { moviesAndTvShowsStore } from "../modules/moviesAndTvShowsStore";
import "../style/content.scss";
import MovieSwiper from "./movieSwiper";
import { NavLink } from "react-router-dom";

const Content = observer(() => {
  useEffect(() => {
    moviesAndTvShowsStore.getTrendingMovies();
    moviesAndTvShowsStore.getTopRatedMovies();
    moviesAndTvShowsStore.getTrendingTvShows();
    moviesAndTvShowsStore.getTopRatedTvShows();
  }, []);
  return (
    <div className="content">
      <div className="movieSwiper-wrapper">
        <MovieSwiper />
      </div>
      <div className="content-wrapper">
        <div className="content-title">
          <div>
            <h4>Trending movies</h4>
          </div>
          <div>
            <button onClick={() => moviesAndTvShowsStore.getTrendingMovies(true)}>View more</button>
          </div>
        </div>
        <div className="content-cards">
          {moviesAndTvShowsStore.trendingMovies.map((movie) => (
            <NavLink to={`/details/movie/${movie.id}`} className="card" key={movie.id}>
              <div className="card-photo">
                <img src={movie.poster_path} alt="movie-poster" />
              </div>
              <div className="card-title">
                <h3>{movie.title}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-title">
          <div>
            <h4>Top rated movies</h4>
          </div>
          <div>
            <button onClick={() => moviesAndTvShowsStore.getTopRatedMovies(true)}>View more</button>
          </div>
        </div>
        <div className="content-cards">
          {moviesAndTvShowsStore.topRatedMovies.map((movie) => (
            <NavLink to={`/details/movie/${movie.id}`} className="card" key={movie.id}>
              <div className="card-photo">
                <img src={movie.poster_path} alt="movie-poster" />
              </div>
              <div className="card-title">
                <h3>{movie.title}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-title">
          <div>
            <h4>Trending TV shows</h4>
          </div>
          <div>
            <button onClick={() => moviesAndTvShowsStore.getTrendingTvShows(true)}>View more</button>
          </div>
        </div>
        <div className="content-cards">
          {moviesAndTvShowsStore.trendingTvShows.map((tvShow) => (
            <NavLink to={`/details/tv/${tvShow.id}`} className="card" key={tvShow.id}>
              <div className="card-photo">
                <img src={tvShow.poster_path} alt="tvShow-poster" />
              </div>
              <div className="card-title">
                <h3>{tvShow.name}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="content-wrapper">
        <div className="content-title">
          <div>
            <h4>Top rated TV shows</h4>
          </div>
          <div>
            <button onClick={() => moviesAndTvShowsStore.getTopRatedTvShows(true)}>View more</button>
          </div>
        </div>
        <div className="content-cards">
          {moviesAndTvShowsStore.topRatedTvShows.map((tvShow) => (
            <NavLink to={`/details/tv/${tvShow.id}`} className="card" key={tvShow.id}>
              <div className="card-photo">
                <img src={tvShow.poster_path} alt="tvShow-poster" />
              </div>
              <div className="card-title">
                <h3>{tvShow.name}</h3>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Content;
