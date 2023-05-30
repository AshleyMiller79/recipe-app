import React, { useState } from "react";
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [acik, setAcik] = useState(false);
  //!!  setAcık stile props yollayınca dropdown ı açılır kapanır yapmış oluyor, height a 300px yada 0 vererek
  return (
    <Nav>
      {/* logo daki setAcik ayrıntı bişey merdiven açıkken home a basılırsa kapansın diye*/}
      <Logo to="/home" onClick={() => setAcik(false)}>
        <i>{"<Clarusway>"}</i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={() => setAcik(!acik)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu osman={acik} onClick={() => setAcik(!acik)}>
        <MenuLink to="/about">About</MenuLink>

        <a href="https://github.com/" target="blank">
          Github
        </a>
        {/* github linki için a tag i yerine, react-router-dom dan Link kullanmak istersek, alttaki yorumları açmalıyız */}
        {/* <MenuLink
          to="/external"
          target="_blank"
        >Github</MenuLink> */}

        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
