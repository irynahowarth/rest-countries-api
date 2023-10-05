import React from "react";
import { ModeContext } from "./Layout";
import { BsMoon, BsMoonFill } from "react-icons/bs";

export default function BtnModeSwitch() {
  const { mode, toggleMode } = React.useContext(ModeContext);
  const btnIcon = mode == "light" ? <BsMoonFill /> : <BsMoon />;
  const btnText = mode == "light" ? "Dark" : "Light";
  return (
    <button onClick={toggleMode}>
      {btnIcon} {btnText} mode
    </button>
  );
}
