import { useState } from "react";
import "./Header.scss";
import logo from "../assets/images/logo.svg";
import buy from "../assets/images/buy.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`menu ${isOpen ? "open" : "closed"}`}>

        <div className="burger" onClick={handleMenuClick}>
          <button className="button_menu" type="button">
            <span class="btn_line"></span>
            <span class="btn_line"></span>
            <span class="btn_line"></span>
            <span class="btn_line"></span>
          </button>
        </div>
        
        <div className="menu-left">
          <a href="/" className="menu-link">
            Furniture
          </a>
          <a href="/" className="menu-link">
            Why Feather
          </a>
          <a href="/" className="menu-link">
            Feather for Business
          </a>
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="menu-right">
          <a href="/" className="menu-link">
            Check if We Deliver
          </a>
          <a href="/" className="menu-link">
            Search
          </a>
          <a href="/" className="menu-link">
            Account
          </a>
          <a href="/" className="menu-link">
            <img src={buy} alt="buy" />
          </a>
        </div>

        <div className="menu-add">
          <a href="/" className="menu-link">
            Furniture
          </a>
          <a href="/" className="menu-link">
            Why Feather
          </a>
          <a href="/" className="menu-link">
            Feather for Business
          </a>
          <a href="/" className="menu-link">
            Check if We Deliver
          </a>
          <a href="/" className="menu-link">
            Search
          </a>
          <a href="/" className="menu-link">
            Account
          </a>
          <a href="/" className="menu-link">
            <img src={buy} alt="buy" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
