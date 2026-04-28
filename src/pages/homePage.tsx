import Header from "../components/header";
import Content from "../components/content";
import MobileFooterNavigation from "../components/mobileFooterNavigation";
import "../style/home.scss";
import FooterWithLinks from "../components/FooterWithLinks";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Content />
      <FooterWithLinks />
      <MobileFooterNavigation />
    </div>
  );
};

export default Home;
