import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavGroup = props => {
  const { url, label } = props

  return (
    <div className="menu-nav-group">
      <p>{label}</p>
      <NavLink
        to={`${url}/movies`}>
        Movies
      </NavLink>
      <NavLink
        to={`${url}/tv-shows`}>
        TV Shows
      </NavLink>
    </div>
  )
}