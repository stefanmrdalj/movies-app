import FooterWithLinks from "../components/FooterWithLinks";
import Header from "../components/header";
import MediaComponent from "../components/mediaComponent";
import MobileFooterNavigation from "../components/mobileFooterNavigation";
import "../style/moviesPage.scss";

const Movies = () => {
  return (
    <div className="moviesPage">
      <Header />
      <MediaComponent type="movie" title="Movies" />
      <FooterWithLinks />
      <MobileFooterNavigation />
    </div>
  );
};

export default Movies;
