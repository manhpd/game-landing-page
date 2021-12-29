/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
import { logo } from '../../assets/images'

export default function Header(props) {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const channel = new BroadcastChannel('react_connect');
  
  const sendMessage = index => {
    props.selectTab(index);
    channel.postMessage({to: 'component_2', index: index});
    console.log(props.selectedTab);
  }

  const tabs = [
    "Home",
    "NFT",
    "Tokenomic",
    "Gameplay",
    "Team",
    "RoadMap",
    "Partners",
    "Community"
  ]

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
          {
            tabs.map((tab, i) => {
              return (
                <a onClick={() => sendMessage(i)} className={`tab ${props.selectedTab === i ? "active" : ""}`}>{tab}</a>
              )
            })
          }
          <button href="/"> Whitepaper</button>
        </div>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        ⚔️
      </button>
    </header>
  );
}
