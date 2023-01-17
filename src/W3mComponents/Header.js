import React from "react";

const headerStyle = {
  padding: "15px",
  textAlign: "center",
  background: "#001461",
  color: "white",
  fontSize: "20px",
};

function Header({title}) {
  return <div style={headerStyle}>{title?title:"This is header"}</div>;
}

export default Header;
