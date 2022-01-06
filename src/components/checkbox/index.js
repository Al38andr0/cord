import React from "react";

export const CheckBox = props => {
  const { data } = props;

  return (
      <label className="checkbox-field">
        <input type="checkbox"/>
        <span>{data.label}</span>
      </label>
    )
}
