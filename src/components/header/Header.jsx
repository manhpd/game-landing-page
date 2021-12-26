/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { logo } from '../../assets/images'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="Logo" alt="logo" />
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/?slide=0">Home</a>
          <a href="/?slide=1">NFT Heroes</a>
          <a href="/?slide=2">NFT Pet</a>
          <a href="/?slide=3">Gameplay</a>
          <a href="/?slide=4">Team</a>
          <a href="/?slide=5">RoadMap</a>
          <a href="/?slide=6">Partners</a>
          <a href="/?slide=7">Community</a>
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        ⚔️
      </button>
    </header>
  );
}
