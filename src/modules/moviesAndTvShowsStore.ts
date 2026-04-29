import { moviesAndTvShowsService } from "./moviesAndTvShowsService";
import { makeAutoObservable } from "mobx";
import type { Movie, TvShow } from "../modules/types";

class MoviesAndTvShowsStore {
  trendingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  trendingTvShows: TvShow[] = [];
  topRatedTvShows: TvShow[] = [];

  allMovies: Movie[] = [];
  allTvShows: TvShow[] = [];

  searchedMovies: Movie[] = [];
  searchedTvShows: TvShow[] = [];

  isLoadingTrendingMovies: boolean = false;
  isLoadingTopRatedMovies: boolean = false;

  isLoadingTrendingTvShows: boolean = false;
  isLoadingTopRatedTvShows: boolean = false;

  isLoadingAllMovies: boolean = false;
  isLoadingAllTvShows: boolean = false;

  isSearchingMovies: boolean = false;
  isSearchingTvShows: boolean = false;

  trendingMoviesPage: number = 1;
  topRatedMoviesPage: number = 1;

  trendingTvShowsPage: number = 1;
  topRatedTvShowsPage: number = 1;

  allMoviesPage: number = 1;
  allTvShowsPage: number = 1;

  searchedMoviesPage: number = 1;
  searchedTvShowsPage: number = 1;

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

  async getAllMovies(loadMore = false) {
    this.isLoadingAllMovies = true;
    const page = loadMore ? this.allMoviesPage + 1 : 1;
    const response = await moviesAndTvShowsService.getAllMovies(page);
    if (loadMore) {
      this.allMovies = [...this.allMovies, ...response];
      this.allMoviesPage = page;
    } else {
      this.allMovies = response;
      this.allMoviesPage = 1;
    }
    this.isLoadingAllMovies = false;
  }

  async getAllTvShows(loadMore = false) {
    this.isLoadingAllTvShows = true;
    const page = loadMore ? this.allTvShowsPage + 1 : 1;
    const response = await moviesAndTvShowsService.getAllTvShows(page);
    if (loadMore) {
      this.allTvShows = [...this.allTvShows, ...response];
      this.allTvShowsPage = page;
    } else {
      this.allTvShows = response;
      this.allTvShowsPage = 1;
    }
    this.isLoadingAllTvShows = false;
  }

  async searchMovies(query: string, loadMore = false) {
    this.isSearchingMovies = true;
    const page = loadMore ? this.searchedMoviesPage + 1 : 1;
    const response = await moviesAndTvShowsService.searchMovies(query, page);
    if (loadMore) {
      this.searchedMovies = [...this.searchedMovies, ...response];
      this.searchedMoviesPage = page;
    } else {
      this.searchedMovies = response;
      this.searchedMoviesPage = 1;
    }
    this.isSearchingMovies = false;
  }
  async searchTvShows(query: string, loadMore = false) {
    this.isSearchingTvShows = true;
    const page = loadMore ? this.searchedTvShowsPage + 1 : 1;
    const response = await moviesAndTvShowsService.searchTvShows(query, page);
    if (loadMore) {
      this.searchedTvShows = [...this.searchedTvShows, ...response];
      this.searchedTvShowsPage = page;
    } else {
      this.searchedTvShows = response;
      this.searchedTvShowsPage = 1;
    }
    this.isSearchingTvShows = false;
  }
}

export const moviesAndTvShowsStore = new MoviesAndTvShowsStore();
