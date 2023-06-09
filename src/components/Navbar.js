import gosoo_logo from "../assets/icon/gosoo_logo.png";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={gosoo_logo} alt="GoSoo Academy" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
