import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group my-max">
      <label htmlFor={name}>{label}</label>
      <input
        {...rest}
        name={name}
        id={name}
        className="form-control text-center"
      />
      {error && (
        <span className="font-weight-bolder h6 text-danger">{error}</span>
      )}
    </div>
  );
};

export default Input;
