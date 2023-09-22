import React from "react";
import "./styles.css";

export default function Button({ type, children }) {
  return <button className={type}>{children}</button>;
}
