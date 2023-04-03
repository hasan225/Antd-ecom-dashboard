import { Space } from "antd";
import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import AppFooter from "../AppFooter/AppFooter";
import SideMenu from "../SideMenu/SideMenu";
import AppContent from "../AppContent/AppContent";

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <AppHeader />
      <div className="flex-1 flex items-start bg-gray-100" >
        <SideMenu />
        <AppContent content={children}/>
      </div>
      <AppFooter />
    </div>
  );
};

export default AppLayout;
