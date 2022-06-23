import React from "react";

const Controls = (props) => {
  const { key, event } = props
  return (
    <div key={key}>
      <button type='button' onClick={event}>{key}</button>
    </div>
  )
}

export default Controls