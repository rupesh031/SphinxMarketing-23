import React from "react";
import burger from "../../assets/burger.png";
import Slogo from "../../assets/Slogo.png";
import Menu from "../../components/menu/menu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      {isMenuOpen ? (
        <Menu setMenu={setIsMenuOpen} classN={"background"} />
      ) : (
        <></>
      )}
      <div className="header">
        <div className="logo">
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
