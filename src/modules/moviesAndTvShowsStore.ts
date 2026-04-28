import { moviesAndTvShowsService } from "./moviesAndTvShowsService";
import { makeAutoObservable } from "mobx";
import type { Movie, TvShow } from "../modules/types";

class MoviesAndTvShowsStore {
  trendingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  trendingTvShows: TvShow[] = [];
  topRatedTvShows: TvShow[] = [];

  isLoadingTrendingMovies: boolean = false;
  isLoadingTopRatedMovies: boolean = false;

  isLoadingTrendingTvShows: boolean = false;
  isLoadingTopRatedTvShows: boolean = false;

  trendingMoviesPage: number = 1;
  topRatedMoviesPage: number = 1;

  trendingTvShowsPage: number = 1;
  topRatedTvShowsPage: number = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async getTrendingMovies(loadMore = false) {
    this.isLoadingTrendingMovies = true;
    const page = loadMore ? this.trendingMoviesPage + 1 : 1;
    const response = await moviesAndTvShowsService.getTrendingMovies(page);
    if (loadMore) {
      this.trendingMovies = [...this.trendingMovies, ...response];
      this.trendingMoviesPage = page;
    } else {
      this.trendingMovies = response;
      this.trendingMoviesPage = 1;
    }
    this.isLoadingTrendingMovies = false;
  }

  async getTopRatedMovies(loadMore = false) {
    this.isLoadingTopRatedMovies = true;
    const page = loadMore ? this.topRatedMoviesPage + 1 : 1;
    const response = await moviesAndTvShowsService.getTopRatedMovies(page);
    if (loadMore) {
      this.topRatedMovies = [...this.topRatedMovies, ...response];
      this.topRatedMoviesPage = page;
    } else {
      this.topRatedMovies = response;
      this.topRatedMoviesPage = 1;
    }
    this.isLoadingTopRatedMovies = false;
  }

  async getTrendingTvShows(loadMore = false) {
    this.isLoadingTrendingTvShows = true;
    const page = loadMore ? this.trendingTvShowsPage + 1 : 1;
    const response = await moviesAndTvShowsService.getTrendingTvShows(page);
    if (loadMore) {
      this.trendingTvShows = [...this.trendingTvShows, ...response];
      this.trendingTvShowsPage = page;
    } else {
      this.trendingTvShows = response;
      this.trendingTvShowsPage = 1;
    }
    this.isLoadingTrendingTvShows = false;
  }

  async getTopRatedTvShows(loadMore = false) {
    this.isLoadingTopRatedTvShows = true;
    const page = loadMore ? this.topRatedTvShowsPage + 1 : 1;
    const response = await moviesAndTvShowsService.getTopRatedTvShows(page);
    if (loadMore) {
      this.topRatedTvShows = [...this.topRatedTvShows, ...response];
      this.topRatedTvShowsPage = page;
    } else {
      this.topRatedTvShows = response;
      this.topRatedTvShowsPage = 1;
    }
    this.isLoadingTopRatedTvShows = false;
  }
}

export const moviesAndTvShowsStore = new MoviesAndTvShowsStore();
