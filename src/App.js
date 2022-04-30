import { Route, Switch, useLocation } from "react-router";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import LogoComponent from "./subComponents/LogoComponent";
import SocialIcons from "./subComponents/SocialIcons";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
import Sticky from "react-stickynode";
import Header from "./components/header/header";

function App() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <div>
          <SoundBar />
          <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
            <Header className={`${isSticky ? "sticky" : "unSticky"}`} />
          </Sticky>
          <LogoComponent theme={DarkTheme ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />
          {/* For framer-motion animation on page change! */}
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              {/*<Route exact path="/blog" component={BlogPage} />*/}
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/skills" component={MySkillsPage} />
            </Switch>
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
