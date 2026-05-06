import "../style/header.scss";
import { navigationLinks } from "../config/navigationLinks";
import { NavLink } from "react-router-dom";
import Logo from "../assets/photos/logo.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={Logo} alt="logo" />
        <h1>Movies</h1>
      </div>
      <div className="navigation">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
