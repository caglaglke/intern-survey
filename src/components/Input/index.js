import React from "react";
import "./styles.css";

export default function Input({ type, title, value, onChangeText }) {
  const handleChangeValue = (e) => {
    const value = e.target.value;
    onChangeText(value);
  };

  return (
    <div className="input-container">
      <p className="title">{title}</p>
      <input
        className="input"
        type={type}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}
