import { useState } from 'react'
import React from "react";
import NavigationCSS from "../styles/Navigation.module.css";

export default function Navigation(props) {
  const {
    container, 
    logo, 
    list, 
    list_is_expanded,
    line, 
    item, 
    burgerIcon, 
    burger
  } = NavigationCSS
  
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleClick() {
    setIsNavOpen((prevValue) => !prevValue);
  }

  return (
    <nav className={container}>
      <h1 className={logo}>HAUSIFY</h1>

      <div className={burgerIcon}>
        <label className={burger} htmlFor="burger">
          <input
            onClick={handleClick}
            className={line}
            type="checkbox"
            id="burger"
          />
        </label>
      </div>

      <ul
        className={`${list} 
        ${isNavOpen && list_is_expanded}`}
      >
        <li className={item}>
          <a href=""> custom builds </a>
        </li>
        <li className={item}>
          <a href=""> new listings </a>
        </li>
        <li className={item}>
          <a href=""> contact us </a>
        </li>

        <hr className={line}/>

        <li className={item}>
          <a href="">register</a>
        </li>
        <li className={item} onClick={props.toggleLogin}>
          <a href="#">login</a>
        </li>
      </ul>
    </nav>
  );
}
