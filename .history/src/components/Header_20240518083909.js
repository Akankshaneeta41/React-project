import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
let [btnName, setbtnName] = useState("Login");


const onlineStatus = useOnlineStatus();

    return (
      <div className="header">
        <div className="w-1">
          <img
            className="logo w-1 h-4"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Online Status:{onlineStatus ? "💹" : "🔴" }</li>
            <li> <Link to="./" >Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li>Cart</li>
            <button className="login" onClick={() => { btnName === "Login" ? setbtnName("Logout") : setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
  