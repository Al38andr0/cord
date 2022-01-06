import React from "react";
import {CheckBox} from "../checkbox";

export const ExpandableFilter = props => {
  const { data } = props;

  return (
    <details>
      <summary>
        {data.label}
      </summary>
      {data.collection.map(
        i =>
          <CheckBox
            key={i.id}
            data={i}
          />
      )}
    </details>
  )
}