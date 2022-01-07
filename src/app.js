import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { SideNavBar } from "./components/sidenavbar";
import { Discover } from "./pages/discover";
import {MobileHeader} from "./components/mobileheader";
import './css/app.css';

export const App = () => {
  return (
    <Router>
      <main>
        <SideNavBar/>
        <MobileHeader/>
        <div id="main-container">
          <Routes>
            <Route
              path="/discover"
              element={<Discover/>}
            />
          </Routes>
        </div>
      </main>
    </Router>
  )
}
