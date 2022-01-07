import React from "react"
import './style.scss';

export const HamburgerIcon = props => {
  const { onClickCallback, unique } = props
  const handleClick = e => {
    e.target.classList.toggle("change");
    onClickCallback()
  }

  return (
    <div
      id={unique}
      className="hamburger-container"
      onClick={e => handleClick(e)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}