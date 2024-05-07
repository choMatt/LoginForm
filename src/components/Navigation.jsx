import React from "react";
import NavigationCSS from "../styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={NavigationCSS.container}>

      <h1 className={NavigationCSS.logo}>
        HAUSIFY
      </h1>

      <ul className={NavigationCSS.list}>
        <li className={NavigationCSS.item}>
          <a href=""> custom builds </a>
        </li>
        <li className={NavigationCSS.item}>
          <a href=""> new listings </a>
        </li>
        <li className={NavigationCSS.item}>
          <a href=""> contact us </a>
        </li>
        <li className={NavigationCSS.item}>
          <a href="">register</a>
        </li>
        <li className={NavigationCSS.item}>
          <a href="">login</a>
        </li>
      </ul>
    </nav>
  );
}
