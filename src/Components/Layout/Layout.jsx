import React from "react";
import MyNavbar from "../MyNavbar/MyNavbar";

const Layout = ({children}) => {
  return (
    <div >
      <MyNavbar />
      {children}
    </div>
  );
};

export default Layout;
