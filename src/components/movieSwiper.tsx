import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../style/movieSwiper.scss";
import "swiper/css";

import { observer } from "mobx-react-lite";
import { moviesAndTvShowsStore } from "../modules/moviesAndTvShowsStore";
import { useEffect } from "react";

const MovieSwiper = observer(() => {
  useEffect(() => {
    if (moviesAndTvShowsStore.isHomePageTrailerModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [moviesAndTvShowsStore.isHomePageTrailerModalOpen]);
  return (
    <div className="movieSwiper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        slidesPerView={1}
        loop={true}
      >
        {moviesAndTvShowsStore.trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              className="slide"
              style={{
                backgroundImage: movie.backdrop_path
                  ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                  : "none",
              }}
            >
              <div className="slide-title">
                <h2>{movie.title}</h2>
              </div>
              <div className="slide-description">{movie.overview}</div>
              <div className="slide-button">
                <button onClick={() => moviesAndTvShowsStore.getHomePageTrailer("movie", String(movie.id))}>
                  Watch trailer
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {moviesAndTvShowsStore.isHomePageTrailerModalOpen && (
        <div className="trailerModal">
          <div className="trailerModal-content">
            <button onClick={() => (moviesAndTvShowsStore.isHomePageTrailerModalOpen = false)}>Close</button>

            <iframe
              src={`https://www.youtube.com/embed/${moviesAndTvShowsStore.mediaTrailerKey}`}
              title="Trailer"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default MovieSwiper;
