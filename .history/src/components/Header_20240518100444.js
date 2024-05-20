import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
let [btnName, setbtnName] = useState("Login");


const onlineStatus = useOnlineStatus();

    return (
      <div className="flex">
        <div className="w-20 m-5 h-15">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items flex">
          <ul className="justify-end">
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
  