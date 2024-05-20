import React from "react";
import User from "./user";
import UserClass from "../../UserClass";
import { Component } from "react";

class About extends  Component {
constructor(props) {
super(props)
console.log("Parent render");
}

componentDidMount() {
  console.log("mount render");
}

 render() {
  console.log("parent render");
  return (
    <div>
      <h1>About</h1>
      <h2>This is about page....</h2>
     
      <UserClass name={"Akanksha Singh (class)"} location={"Varanasi"} />
    </div>
  );
}
 }

export default About;
