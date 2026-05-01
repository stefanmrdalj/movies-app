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
export interface Genre {
  id: number;
  name: string;
}

export interface DetailsData {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genres: Genre[];
}

export interface CastMember {
  id: number;
  name: string;
  profile_path: string | null;
}

export interface DetailsPageData {
  details: DetailsData | null;
  casts: CastMember[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}
