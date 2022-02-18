
import React from 'react'
const Header = (props) => {
  const sty = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "5px",
    minHeight: "8vh",
    backgroundColor: "#daf5ff",
    borderBottom: "1px solid #daf5ff",
    color: "#282c34"
  };
  return (
    <div style={sty}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Header