import React from "react";
import NavigationCSS from "../styles/Navigation.module.css";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function handleClick() {
    setIsNavOpen((prevValue) => !prevValue);
  }

  return (
    <nav className={NavigationCSS.container}>
      <h1 className={NavigationCSS.logo}>HAUSIFY</h1>

      <div className={NavigationCSS.burgerIcon}>
        <label className={NavigationCSS.burger} for="burger">
          <input
            onClick={handleClick}
            className={NavigationCSS.line}
            type="checkbox"
            id="burger"
          />
        </label>
      </div>

      <ul
        className={`${NavigationCSS.list} 
        ${isNavOpen ? NavigationCSS.list_open : NavigationCSS.list_closed}`}
      >
        <li className={NavigationCSS.item}>
          <a href=""> custom builds </a>
        </li>
        <li className={NavigationCSS.item}>
          <a href=""> new listings </a>
        </li>
        <li className={NavigationCSS.item}>
          <a href=""> contact us </a>
        </li>

        <hr className={NavigationCSS.line}/>

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
