import React from "react";
import { Link } from "react-router-dom";
import homeData from "../../helpers/mock/home.json";
import "./styles.css";

export default function NavigationBar() {
  return (
    <div className="nav">
      {homeData.navData.map((item) => (
        <Link className="item" to={item.route}>
          {item.title}
        </Link>
      ))}
    </div>
  );
}
