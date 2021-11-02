import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="app-wrapper">
        <Routes />
      </div>
    </div>
  );
}
