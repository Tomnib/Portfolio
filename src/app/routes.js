import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Education } from "../pages/Education";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="s_c">
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={400}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default AppRoutes;
