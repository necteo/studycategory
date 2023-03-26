import gosoo_logo from "../logo/gosoo_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={gosoo_logo} alt="GoSoo Academy" />
      </div>
    </div>
  );
};

export default Navbar;
