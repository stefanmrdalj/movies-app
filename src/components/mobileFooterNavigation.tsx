import { navigationLinks } from "../config/navigationLinks";
import "../style/mobileFooterNavigation.scss";
import { NavLink } from "react-router-dom";

const MobileFooterNavigation = () => {
  return (
    <div className="footerNavigation">
      {navigationLinks.map((link) => (
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          key={link.name}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MobileFooterNavigation;
