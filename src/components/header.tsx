import "../style/header.scss";
import { navigationLinks } from "../config/navigationLinks";
import { Link } from "react-router-dom";
import Logo from "../assets/photos/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const homeElement = document.querySelector(".home");
    if (!homeElement) return;
    const onScroll = () => {
      setScrolled(homeElement.scrollTop > 50);
    };
    homeElement.addEventListener("scroll", onScroll);
    return () => {
      homeElement.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>Movies</h1>
      </div>
      <div className="navigation">
        {navigationLinks.map((link) => (
          <Link key={link.name} to={link.path}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
