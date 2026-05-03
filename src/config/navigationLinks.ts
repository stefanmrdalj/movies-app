interface NavigationLinks {
  name: string;
  path: string;
}

export const navigationLinks: NavigationLinks[] = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "Tv Shows", path: "/shows" },
];

export const EXTERNAL_LINKS = {
  imdbTopMovies: "https://www.imdb.com/chart/top/?ref_=vi_tr_nv_menu",
  imdbTopTvShows: "https://www.imdb.com/chart/toptv/?ref_=vi_tr_nv_menu",
  imdbWhatToWatch: "https://www.imdb.com/what-to-watch/?ref_=vi_tr_nv_menu",
};
