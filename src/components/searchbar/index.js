import React from "react";

export const SearchBar = props => {
  const { data } = props;

  return (
    <div className="input-field">
      <img src={data.imageSrc} alt={data.imageAlt}/>
      <input
        type={data.type}
        id={data.unique}
        placeholder={data.placeholder}
        onChange={e => data.callback(e.target.value)}
      />
    </div>
  )
}