import React, { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import {HamburgerIcon} from "../hamburgericon";

export const MobileHeader = () => {
  const location = useLocation();
  const hamburgerUnique = 'mobile-nav-hamburger'
  const manageNavBar = () => {
    const navBarElement = document.querySelector('#side-nav-bar-container')
    const hamburgerIcon = document.querySelector(`#${hamburgerUnique}`)
    if (hamburgerIcon.classList.contains('change')) {
      navBarElement.classList.add('showed')
    } else {
      navBarElement.classList.remove('showed')
    }
  }
  useEffect(() => {
    const hamburgerIcon = document.querySelector(`#${hamburgerUnique}`)
    if (hamburgerIcon) {
      hamburgerIcon.classList.remove('change')
      manageNavBar()
    }
  }, [location.pathname])

  return (
    <div id="mobile-header">
      <HamburgerIcon
        onClickCallback={manageNavBar}
        unique={hamburgerUnique}
      />
      <h1>{location.pathname.slice(1) || 'Home'}</h1>
    </div>
  )
}