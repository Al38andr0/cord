import React from "react";
import { NavLink } from "react-router-dom";

export const SideNavMainLink = props => {
  const { isMain, url, imageSrc, imageAlt, label } = props
  const isMainClassName = isMain ? 'main-nav-link' : ''

  return (
    <NavLink
      className={`menu-nav-link ${isMainClassName} ${isActive => isActive ? "active" : null}`}
      to={url}>
      {label}
      <img src={imageSrc} alt={imageAlt}/>
    </NavLink>
  );
}
