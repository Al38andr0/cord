import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import styled from 'styled-components';
import { SideNavBar } from "./components/sidenavbar";
import { Discover } from "./pages/discover";
import './css/app.css'; 

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <PageContainer>
          <SideNavBar/>
          <div id="main-container">
            <Routes>
              <Route path="/discover" element={<Discover/>}/>
            </Routes>
          </div>
        </PageContainer>
      </Router>
    );
  }
}

const PageContainer = styled.main`
  overflow-x: hidden;
`
