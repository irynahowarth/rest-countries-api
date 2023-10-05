import React from "react";
import { Link } from "react-router-dom";
import BtnModeSwitch from "./BtnModeSwitch";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        Where in the world?
      </Link>
      <BtnModeSwitch />
    </header>
  );
}
