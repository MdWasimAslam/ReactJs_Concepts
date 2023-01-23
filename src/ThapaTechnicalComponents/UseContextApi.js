import React from "react";
import { createContext, useContext } from "react";

const UserThemeContext = createContext({});

function DisplayUsername() {
  const theme = useContext(UserThemeContext);
  return (
    <>
      <div style={{ height: "100px", backgroundColor: theme.name }}></div>
    </>
  );
}

const UseContextApi = () => {
  const theme = { name: "red" };

  return (
    <UserThemeContext.Provider value={theme}>
      <DisplayUsername />
    </UserThemeContext.Provider>
  );
};

export default UseContextApi;
