import axiosInstance from "../api/axiosInstance";
import type { AxiosResponse } from "axios";
import type { MoviesResponse, TvShowsResponse } from "./types";

class MoviesAndTvShowsRepo {
  getTrendingMovies(page: number = 1): Promise<AxiosResponse<MoviesResponse>> {
    return axiosInstance.get("/trending/movie/day", {
      params: { page },
    });
  }
  getTopRatedMovies(page: number = 1): Promise<AxiosResponse<MoviesResponse>> {
    return axiosInstance.get("/movie/top_rated", {
      params: { page },
    });
  }
  getTrendingTvShows(page: number = 1): Promise<AxiosResponse<TvShowsResponse>> {
    return axiosInstance.get("/trending/tv/day", {
      params: { page },
    });
  }
  getTopRatedTvShows(page: number = 1): Promise<AxiosResponse<TvShowsResponse>> {
    return axiosInstance.get("/tv/top_rated", {
      params: { page },
    });
  }
  getAllMovies(page: number = 1): Promise<AxiosResponse<MoviesResponse>> {
    return axiosInstance.get("/discover/movie", {
      params: { page },
    });
  }
  getAllTvShows(page: number = 1): Promise<AxiosResponse<TvShowsResponse>> {
    return axiosInstance.get("/discover/tv", {
      params: { page },
    });
  }
  searchMovies(query: string, page: number = 1): Promise<AxiosResponse<MoviesResponse>> {
    return axiosInstance.get("/search/movie", {
      params: { query, page },
    });
  }
  searchTvShows(query: string, page: number = 1): Promise<AxiosResponse<TvShowsResponse>> {
    return axiosInstance.get("/search/tv", {
      params: { query, page },
    });
  }
}

export const moviesAndTvShowsRepository = new MoviesAndTvShowsRepo();
