import "./Box.css";
// import { useState } from "react";

export default function Box({ isActive, toggle }) {


  return <div 
  onClick={toggle} className="Box" style={{backgroundColor: isActive ? "red" : 'black'}}>
    
  </div>
}