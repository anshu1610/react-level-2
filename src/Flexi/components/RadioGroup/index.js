import React from "react";

const RadioGroup = ({ label, name, options }) => (
  <div>
    <form>
      <label>{label}</label>
      <br />
      {options.map(el => (
        <span>
          {el.label}
          <input type="radio" value={el.label} />
        </span>
      ))}
    </form>
  </div>
);

export default RadioGroup;
