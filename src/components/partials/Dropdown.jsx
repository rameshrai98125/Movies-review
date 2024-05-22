import React from "react";

function Dropdown() {
  return (
    <div className="select">
      <select name="format" id="format">
        <option value="0" disabled>
          sd
        </option>
      </select>
    </div>
  );
}

export default Dropdown;
