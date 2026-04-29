export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | undefined;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  popularity: number;
  genre_ids: number[];
  adult: boolean;
  original_language: string;
}
export interface TvShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | undefined;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
  popularity: number;
  genre_ids: number[];
  original_language: string;
  origin_country: string[];
}
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface TvShowsResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}
