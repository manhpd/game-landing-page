/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { logo } from '../../assets/images'

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const channel = new BroadcastChannel('react_connect');

  const sendMessage = index => {
    channel.postMessage({to: 'component_2', index: index})
  }

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
        <div className="Nav">
          <a onClick={() => sendMessage(0)}>Home</a>
          <a onClick={() => sendMessage(1)}>NFT Heroes</a>
          <a onClick={() => sendMessage(2)}>NFT Pet</a>
          <a onClick={() => sendMessage(3)}>Gameplay</a>
          <a onClick={() => sendMessage(4)}>Team</a>
          <a onClick={() => sendMessage(5)}>RoadMap</a>
          <a onClick={() => sendMessage(6)}>Partners</a>
          <a onClick={() => sendMessage(7)}>Community</a>
        </div>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        ⚔️
      </button>
    </header>
  );
}
