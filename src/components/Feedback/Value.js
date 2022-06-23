import React from "react";

const Value = ({ valueGood, valueNeutral, valueBad }) => {
  return <div>
    <div>
      <span>Good - {valueGood}</span>
    </div>
    <div>
      <span>Neutral - {valueNeutral}</span>
    </div>
    <div>
      <span>Bad - {valueBad}</span>
    </div>
  </div>
}

export default Value