import React from "react";
import { debounce } from "../../mixins";

export const SearchBar = props => {
  const { data } = props;

  const setValue = e => data.callback(e.target.value)

  return (
    <div className="input-field">
      <img src={data.imageSrc} alt={data.imageAlt}/>
      <input
        type={data.type}
        id={data.unique}
        placeholder={data.placeholder}
        onInput={debounce(setValue, 250)}
      />
    </div>
  )
}