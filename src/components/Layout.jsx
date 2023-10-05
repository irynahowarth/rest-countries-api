import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const ModeContext = React.createContext();

export default function Layout() {
  const [mode, setMode] = React.useState("light");

  function toggleMode() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <div className={`site-wrapper ${mode}-mode`}>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </ModeContext.Provider>
  );
}

export { ModeContext };
