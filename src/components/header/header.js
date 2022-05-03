import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <>
      <Nav>
        <Bars onClick={() => console.log("hi")} />
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
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
      {mobileView && 
      <div>
        </div>}
    </>
  );
};

export default Header;
