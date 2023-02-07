import { useContext } from "react";
import { useState } from "react";
import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { classNames } from "../helpers/classnames/classNames";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import "../styles/index.scss";
import { Theme, ThemeContext } from "../theme/themeContext";
import { useTheme } from "../theme/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", {}, [theme])}
    >
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
