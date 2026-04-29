import FooterWithLinks from "../components/FooterWithLinks";
import Header from "../components/header";
import MediaComponent from "../components/mediaComponent";
import MobileFooterNavigation from "../components/mobileFooterNavigation";

const TvShows = () => {
  return (
    <div className="tvShowsPage">
      <Header />
      <MediaComponent type="tv" title="Tv shows" />
      <FooterWithLinks />
      <MobileFooterNavigation />
    </div>
  );
};

export default TvShows;
