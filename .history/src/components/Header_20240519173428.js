import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);
  log

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="w-20 m-5 h-15">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex justify-end">
          <li className="px-5">Online Status: {onlineStatus ? "💹" : "🔴"}</li>
          <li className="px-5"> <Link to="/">Home</Link></li>
          <li className="px-5"> <Link to="/about">About Us</Link></li>
          <li className="px-5"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-5"> <Link to="/grocery">Grocery</Link></li>
          <li className="px-5">Cart</li>
          <li>
            <button className="login" onClick={() => { setBtnName(btnName === "Login" ? "Logout" : "Login") }}>{btnName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
