import { useState } from "react";
import "./App.css";
import Page from "./components/page";
import { ThemeContext } from "./components/context/ThemeContext";
import { UserContext } from "./components/context/UserContext";
// import { UserContext } from './context/UserContext';

function UseContextApp1() {
  // const [isDark, setIsDark] = useState(false);
  // return (
  //     <Page isDark={isDark} setIsDark={setIsDark} />
  //   );

  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default UseContextApp1;
