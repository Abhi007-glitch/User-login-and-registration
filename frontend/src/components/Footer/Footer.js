import React from 'react'

const Footer = () => {
  const sty = {
    position: "fixed", left: "0", bottom: "0",
    width: "100%", display: "flex",
    justifyContent: "center", backgroundColor: "#daf5ff",
    minHeight: "8vh",alignItems: "center"
  };
  return (
    <div>
      <p style={sty}>Copyright &copy; AJ9U </p>
    </div>
  );
}

export default Footer