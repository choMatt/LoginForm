import { useState } from 'react'
import React from "react";
import LoginPanelCSS from "../styles/LoginPanel.module.css";

export default function LoginPanel() {
    
const {
    container,
    title,
    emailInput,
    passwordInput,
    createAccountButton,
    forgotPassword,
    loginLink,
} = LoginPanelCSS;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <section className={container}>
      <h1 className={title}>building your dream home</h1>

      <form>
        <label htmlFor="email">Email Address:</label>
        <input
          className={emailInput}
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          className={passwordInput}
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
        />

        <button className={createAccountButton}>create an account</button>
      </form>
      <span className={forgotPassword}>forgot password</span>
      <span className={loginLink}>
        already have an account login
      </span>
    </section>
  );
}
