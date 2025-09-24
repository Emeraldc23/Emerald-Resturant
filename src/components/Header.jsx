import logo from "../assets/images/Restaurant-logo.png";
import menuOpen from "../assets/images/menu_open.svg";
import menuClose from "../assets/images/menu_close.svg";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  const [menu, setMenu] = useState("home");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // set the window size
    const handleSize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleSize);

    // clean up window size
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  const menuRef = useRef();

  function openMenu() {
    menuRef.current.style.right = "0";
  }
  function closeMenu() {
    menuRef.current.style.right = "-350px";
  }
  return (
    <header>
      <div className="logoDetails">
        <img src={logo} alt="" />
        <div className="logoTitle">
          <p className="bizName">
            Emerald <span className="changeColor">Resturant</span>
          </p>
          <p className="services-red">RESTURENT/CATERING/BANQUET</p>
        </div>
      </div>
      <img src={menuOpen} alt="" onClick={openMenu} className="menus" />
      <div className="list">
        <ul ref={menuRef} className="listItems">
          <img
            src={menuClose}
            alt=""
            onClick={closeMenu}
            className="menuClose"
          />
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/banquet">BANQUEST FACILITY</Link>
          </li>
          <li>
            <Link to="/gallery">GALLERY</Link>
          </li>
          <li>
            <Link to="/catering">CATERING</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>

          <div className="booking-ticket mobile-btn">
            <button className="btn-booking">BOOK A BANQUET</button>
          </div>
        </ul>
        <div className="booking-ticket desktop-btn">
          <button className="btn-booking">BOOK A BANQUET</button>
        </div>
      </div>
    </header>
  );
}
