import { moviesAndTvShowsRepository } from "./moviesAndTvShowsRepo";
import type { Movie, TvShow } from "../modules/types";
import to from "await-to-js";

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

class MoviesAndTvShowsService {
  async getTrendingMovies(page: number = 1): Promise<Movie[]> {
    const [error, response] = await to(moviesAndTvShowsRepository.getTrendingMovies(page));
    if (error) {
      console.error("Error fetching trending movies: ", error);
      return [];
    }
    return response.data.results.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path ? `${IMG_BASE}${movie.poster_path}` : "undefined",
    }));
  }

  async getTopRatedMovies(page: number = 1): Promise<Movie[]> {
    const [error, response] = await to(moviesAndTvShowsRepository.getTopRatedMovies(page));
    if (error) {
      console.error("Error fetching top rated movies: ", error);
      return [];
    }
    return response.data.results.map((movie) => ({
      ...movie,
      poster_path: movie.poster_path ? `${IMG_BASE}${movie.poster_path}` : "undefined",
    }));
  }

  async getTrendingTvShows(page: number = 1): Promise<TvShow[]> {
    const [error, response] = await to(moviesAndTvShowsRepository.getTrendingTvShows(page));
    if (error) {
      console.error("Error fetching trending TV shows: ", error);
      return [];
    }
    return response.data.results.map((tvShow) => ({
      ...tvShow,
      poster_path: tvShow.poster_path ? `${IMG_BASE}${tvShow.poster_path}` : "undefined",
    }));
  }
  async getTopRatedTvShows(page: number = 1): Promise<TvShow[]> {
    const [error, response] = await to(moviesAndTvShowsRepository.getTopRatedTvShows(page));
    if (error) {
      console.error("Error fetching top rated TV shows: ", error);
      return [];
    }
    return response.data.results.map((tvShows) => ({
      ...tvShows,
      poster_path: tvShows.poster_path ? `${IMG_BASE}${tvShows.poster_path}` : "undefined",
    }));
  }
}

export const moviesAndTvShowsService = new MoviesAndTvShowsService();
