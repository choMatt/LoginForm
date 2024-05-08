import { useState } from 'react'
import React from "react";
import LoginPanelCSS from "../styles/LoginPanel.module.css";

export default function LoginPanel() {
  const { container, title } = LoginPanelCSS;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  function handleChange(event){
    const { value, name } = event.target
    setFormData((prevFormData) => {
        return {
            ...prevFormData,
            [name] : value
        }
    })
  }

  return (
    <section className={container}>
      <h1 className={title}>building your dream home</h1>

      <form>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />

        <button>create an account</button>
      </form>
    </section>
  );
}
