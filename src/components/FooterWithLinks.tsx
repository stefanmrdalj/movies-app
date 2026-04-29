import "../style/footerWithLinks.scss";
import logo from "../assets/photos/logo.png";

const FooterWithLinks = () => {
  return (
    <div className="footer-with-links">
      <div className="links-title">
        <img src={logo} alt="logo" />
        <h2>Movies</h2>
      </div>
      <div className="links-container">
        <div>
          <a href="">Home</a>
        </div>
        <div>
          <a href="">Contact us</a>
        </div>
        <div>
          <a href="">Terms of service</a>
        </div>
        <div>
          <a href="">About us</a>
        </div>
        <div>
          <a href="">You must watch</a>
        </div>
        <div>
          <a href="">Recent release</a>
        </div>
        <div>
          <a href="">Top IMDB</a>
        </div>
      </div>
      <div className="links-container">
        <div>
          <a href="">Live</a>
        </div>
        <div>
          <a href="">FAQ</a>
        </div>
        <div>
          <a href="">Premium</a>
        </div>
        <div>
          <a href="">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default FooterWithLinks;
