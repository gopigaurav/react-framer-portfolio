import React, { useState } from "react";
import {Link} from "react-router-dom"
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo
} from "./NavbarElements";
import useWindowSize from "../useWindowHooks"
import SoundBar from "../../subComponents/SoundBar";
import MobileNav from "./NavigationMobile"
const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const {widthx, heighty} = useWindowSize()

  return (
    <>
      <Nav>
        <Bars onClick={() => setMobileView(true)} />
        <NavBtn>
          <Logo
            //onMouseEnter={() => onCursor("hovered")}
            //onMouseLeave={onCursor}
          >
            <Link to="/">G</Link>
            <span
              //onClick={toggleTheme}
              //onMouseEnter={() => onCursor("pointer")}
              //onMouseLeave={onCursor}
            ></span>
            <Link to="/">PI</Link>
          </Logo>
          <SoundBar />
        </NavBtn>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Annual Report
          </NavLink>
          <NavLink to="/team" activeStyle>
            Teams
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
      </Nav>
      {mobileView && <MobileNav toggleMenu={mobileView}/>}
    </>
  );
};

export default Header;
