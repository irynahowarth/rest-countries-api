import React from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "./Layout";
import BtnModeSwitch from "./BtnModeSwitch";

export default function Header() {
  const { mode } = React.useContext(ModeContext);
  return (
    <header className={`${mode}-mode`}>
      <Link className="site-logo" to="/">
        Where in the world?
      </Link>
      <BtnModeSwitch />
    </header>
  );
}
