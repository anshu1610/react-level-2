import React from "react";

const TextField = ({ label, inputType, name }) => (
  <div>
    <label>{label}</label>
    <input type={inputType} />
  </div>
);

export default TextField;
