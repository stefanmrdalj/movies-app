import { useEffect, useState } from "react";
import "../style/mediaComponent.scss";
import { moviesAndTvShowsStore } from "../modules/moviesAndTvShowsStore";
import { observer } from "mobx-react-lite";

interface MediaComponentProps {
  type: "movie" | "tv";
  title: string;
}

const MediaComponent = observer(({ type, title }: MediaComponentProps) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  //   const data = type === "movie" ? moviesAndTvShowsStore.allMovies : moviesAndTvShowsStore.allTvShows;

  const isSearching = debouncedSearch.trim().length > 0;

  const data =
    type === "movie"
      ? isSearching
        ? moviesAndTvShowsStore.searchedMovies
        : moviesAndTvShowsStore.allMovies
      : isSearching
        ? moviesAndTvShowsStore.searchedTvShows
        : moviesAndTvShowsStore.allTvShows;

  const handleLoadMore = () => {
    if (type === "movie") {
      if (debouncedSearch) {
        moviesAndTvShowsStore.searchMovies(debouncedSearch, true);
      } else {
        moviesAndTvShowsStore.getAllMovies(true);
      }
    } else {
      if (debouncedSearch) {
        moviesAndTvShowsStore.searchTvShows(debouncedSearch, true);
      } else {
        moviesAndTvShowsStore.getAllTvShows(true);
      }
    }
  };

  useEffect(() => {
    if (type === "movie") {
      moviesAndTvShowsStore.getAllMovies();
    } else {
      moviesAndTvShowsStore.getAllTvShows();
    }
  }, [type]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 400);

    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    if (debouncedSearch.trim() === "") return;

    if (type === "movie") {
      moviesAndTvShowsStore.searchMovies(debouncedSearch);
    } else {
      moviesAndTvShowsStore.searchTvShows(debouncedSearch);
    }
  }, [debouncedSearch, type]);

  return (
    <div className="mediaComponent">
      <div className="media-title">
        <h2>{title}</h2>
      </div>
      <div className="media-content">
        <div className="searchBar">
          <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="cards">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-photo">
                <img src={item.poster_path} alt="" />
              </div>
              <div>
                <h3>{"title" in item ? item.title : item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="media-button">
          <button onClick={handleLoadMore}>Load more</button>
        </div>
      </div>
    </div>
  );
});

export default MediaComponent;
