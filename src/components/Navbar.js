import React from "react";
import logo from '../netflixappimgs/logo.png';
import { FaPowerOff, FaSearch } from "react-icons/fa";
import "../components/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src={logo} alt="Netflix" className="logo" />
        <a href="#" className="afirst">Home</a>
        <a href="#">TV Shows</a>
        <a href="#">Movies</a>
        <a href="#">My List</a>
      </div>
      <div className="right">
        <div className="iconsearch" onClick={() => console.log("Search clicked")}>
          <FaSearch />
        </div>
        <div className="iconoff" onClick={() => console.log("Power Off clicked")}>
          <FaPowerOff />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
