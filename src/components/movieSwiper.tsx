import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../style/movieSwiper.scss";
import "swiper/css";

import { observer } from "mobx-react-lite";
import { moviesAndTvShowsStore } from "../modules/moviesAndTvShowsStore";

const MovieSwiper = observer(() => {
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
                <button>Watch trailer</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default MovieSwiper;
