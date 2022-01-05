import React, { useState } from "react";
import {SideNavMainLink} from "../sidenavmainlink";
import {SideNavGroup} from "../sidenavgroup";

import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";

export const SideNavBar = () => {
  const [isOpen] = useState('active')
  const links = [
    {
      id: 1,
      isMain: true,
      url: '',
      imageSrc:Arrow,
      imageAlt:"Homepage",
      label: "Wesley"
    },
    {
      id: 2,
      isMain: false,
      url: '/discover',
      imageSrc:SearchWhite,
      imageAlt:"Discover",
      label: "Discover"
    }
  ]
  const groups = [
    {
      id: 1,
      url: 'watched',
      label: 'Watched'
    },
    {
      id: 2,
      url: 'saved',
      label: 'Saved'
    }
  ]

  return (
    <div
      id="side-nav-bar-container"
      className={isOpen ? 'visible' : ''}
    >
      {links.map(i => {
        return (
          <SideNavMainLink
            key={i.id}
            isMain={i.isMain}
            url={i.url}
            imageSrc={i.imageSrc}
            imageAlt={i.imageAlt}
            label={i.label}
          />
        )
      })}
      {groups.map(i => {
        return (
          <SideNavGroup
            key={i.id}
            isMain={i.isMain}
            url={i.url}
            imageSrc={i.imageSrc}
            imageAlt={i.imageAlt}
            label={i.label}
          />
        )
      })}
    </div>
  );
}