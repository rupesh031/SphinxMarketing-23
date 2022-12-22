import React from "react";
import burger from "../../assets/burger.png";
import Slogo from "../../assets/Slogo.png";
import Menu from "../../components/menu/menu";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogoClick = () => navigate("/");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      {isMenuOpen ? (
        <Menu setMenu={setIsMenuOpen} classN={"background"} />
      ) : (
        <></>
      )}
      <div className="header">
        <div className="logo" onClick={handleLogoClick}>
          <img className="Slogo" src={Slogo} alt=""></img>
        </div>

        <img
          className="burger shadowfilter"
          src={burger}
          alt=""
          onClick={() => setIsMenuOpen(true)}
        ></img>
      </div>
    </>
  );
}

export default Navbar;
