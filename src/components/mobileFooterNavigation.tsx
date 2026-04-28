import { navigationLinks } from "../config/navigationLinks";
import { Link } from "react-router-dom";
import "../style/mobileFooterNavigation.scss";

const MobileFooterNavigation = () => {
  return (
    <div className="footerNavigation">
      {navigationLinks.map((link) => (
        <Link key={link.name} to={link.path}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileFooterNavigation;
